import React, { useState } from 'react';
import DataTable,{TableColumn} from 'react-data-table-component';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import {FaSearch} from 'react-icons/fa'
import useDebouncedSearch from '../customHooks/useDebounceSearch'
import { useRouter } from 'next/navigation';
import PopupDelete from '../components/DeleteModal'
import Link from 'next/link';
interface Member {
  id: string;
  title: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
}

interface MemberListProps {
  membersList: Member[];
}

const MemberTable: React.FC<MemberListProps> = ({ membersList }) => {
  const { searchTerm, setSearchTerm, debouncedData } = useDebouncedSearch<Member>(membersList, 300);
  const router = useRouter()
  const [isModalOpen, setModalOpen] = useState(false);
  const [rowID, setRowID] = useState("");
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };


  interface CustomColumn extends TableColumn<Member> {
    cell?: (row: Member) => React.ReactNode;
    selector?: (row: Member) => string | number;
  }

  const columns: CustomColumn[] = [
    {
      name: 'Title',
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: 'Name',
      selector: (row) => `${row.first_name} ${row.last_name}`,
      sortable: true,
    },
    {
      name: 'E-mail',
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: 'Role',
      selector: (row) => row.role,
      sortable: true,
    },
    {
      name: 'Actions',
      cell: (row) => (
        <div className="flex items-center space-x-3">
          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
            <AiOutlineEdit
              className="text-blue-500 hover:bg-blue-700 hover:text-white hover:rounded-lg"
              onClick={() => router.push(`/members-form/${row.id}`)}
              cursor='pointer'
              size={25}
            />
          </a>
          <AiOutlineDelete
            className="text-red-600 hover:bg-red-700 hover:text-white hover:rounded-lg"
            cursor='pointer'
            size={25}
            data-modal-target="popup-modal"
            onClick={() => {setRowID(row.id); openModal(); }}
            />
        </div>
      ),
    },
  ];
  

  return (
    <div>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
      <div className='flex items-center justify-between bg-gray-200 p-1 md:p-2 rounded-md'>
        <div className='flex-grow p-2 md:p-3 rounded-md border-none focus:outline-none focus:ring focus:border-blue-300'>
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">

                  <FaSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" size={20} />
              </div>
              <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="search" id="default-search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
          </div>
        </div>
        <Link
            href="/members-form"
            className="mt-[10px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Add New Member
          </Link>      
      </div>

      
      <DataTable
        columns={columns}
        data={debouncedData as Member[]}  
        pagination
        paginationPerPage={10}
        paginationRowsPerPageOptions={[10, 20, 30]}
        highlightOnHover
        striped
        noHeader
        dense
        paginationComponentOptions={{
          noRowsPerPage: true,
          rangeSeparatorText: 'of',
        }}
      />
    </div>

      <PopupDelete isModalOpen={isModalOpen} closeModal={closeModal} rowID={rowID}/>
    </div>
  );
};

export default MemberTable;
