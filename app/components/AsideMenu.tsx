'use client'

import Link from 'next/link';
import { FaUsers, FaUserEdit } from 'react-icons/fa';
import { RiMenu2Line} from 'react-icons/ri';
import Image from 'next/image'
const AsideMenu = () => {
  return (
    <>
      <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
      <span className="sr-only">Open sidebar</span>
      <RiMenu2Line />
    </button>

    <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <a href="" className="flex items-center pl-2.5 mb-5">
            <Image src="/logo.jpeg" width={30} height={100} className="h-6 mr-3 sm:h-7" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">CRUD Page</span>
          </a>
          <ul className="space-y-2 font-medium">

          <li>
            <Link
              href="/"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover-bg-gray-700 group"
            >
              <FaUsers className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ml-3 whitespace-nowrap">Dashboard</span>
            </Link>
          </li>

          <li>
            <Link
              href="/members-form/[memberId]"
              as="/members-form"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover-bg-gray-700 group"
            >
              <FaUserEdit className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ml-3 whitespace-nowrap">Add Users</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
    </>
  )
}

export default AsideMenu