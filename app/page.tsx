"use client"
import * as React from 'react';
import {useMemberContext } from './context/MemberContext';
import MemberList from './components/MemberList';
import CardHeader from './components/CardHeader';
export default function Home() {
  const { members } = useMemberContext();
  return (
    <main>
      <div className="p-4 sm:ml-64">
      <CardHeader
        imageURL="/list-users.jpg"
        title="List All Members"
        description="View, add, or edit member information in our system."
      />
        <MemberList membersList={members} />
      </div>
    </main>
  )
}
