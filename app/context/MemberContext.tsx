"use client"
import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';
import { deleteMember, editMember, getAllMembers, addMember } from '../service/api';
import { toast} from 'react-toastify';
import { Member, MemberContextProps } from '../types/types';

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

  const handleAdd = async (id: any) => {
    try {
      await addMember(id);
      toast.success('Done Adding New Member Values')
      fetchAllData();
      
    } catch (error) {
      toast.success('Error Adding Member Values');

    }
  }

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
<MemberContext.Provider value={{ members, setMembers, deleteMember: handleDelete, editMember: handleUpdate, fetchAllData, addMember: handleAdd }}>
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