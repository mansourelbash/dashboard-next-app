"use client"
import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';
import { deleteMember, editMember, getAllMembers } from '../service/api';
import { toast} from 'react-toastify';
import { Member } from '../types/types';

type MemberContextProps = {
  
  members: Member[];
  setMembers: Dispatch<SetStateAction<Member[]>>;
  deleteMember: (rowID: string) => void;
  editMember: (id:any) => Promise<void>;
  fetchAllData: () => Promise<void>;
};

export const MemberContext = createContext<MemberContextProps | undefined>(undefined);

export function MemberProvider({ children }: { children: ReactNode }) {
  const [members, setMembers] = useState<Member[]>([]);

  const fetchAllData = async () => {
    const allData = await getAllMembers();
    setMembers([...allData]);
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteMember(id);
      toast.success('Member deleted successfully');

      fetchAllData();
    } catch (error) {
      toast.success('Error deleting member');
    }
  };

  const handleUpdate = async (id: any) => {
    try {
      await editMember(id);
      toast.success('Done Updateing Member Values')
      fetchAllData();
    } catch (error) {
      toast.success('Error Updateing Member Values');

    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
<MemberContext.Provider value={{ members, setMembers, deleteMember: handleDelete, editMember: handleUpdate, fetchAllData }}>
  {children}
</MemberContext.Provider>

  );
}

export const useMemberContext = () => {
  const context = useContext(MemberContext);
  if (!context) {
    throw new Error('useMemberContext must be used within a MemberContextProvider');
  }
  return context;
};