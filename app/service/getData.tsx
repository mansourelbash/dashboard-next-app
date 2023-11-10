import { Member } from "../types/types";

const baseUrl = 'http://localhost:5000';

export const getAllMembers = async (): Promise<Member[]> => {
  const res = await fetch(`${baseUrl}/members`, { cache: 'no-store' });
  const users = await res.json();
  return users;
}

export const addMember = async (member: Member): Promise<Member> => {
  const res = await fetch(`${baseUrl}/members`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(member)
  })
  const newMember = await res.json();
  return newMember;
}

export const editMember = async (member: Member): Promise<Member> => {
  const res = await fetch(`${baseUrl}/members/${member.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(member)
  })
  const updatedMember = await res.json();
  return updatedMember;
}

export const deleteMember= async (id: string): Promise<void> => {
  await fetch(`${baseUrl}/members/${id}`, {
    method: 'DELETE',
  })
}