import React from 'react';
import MemberTable from './MemberTable'
import {MemberListProps } from "../types/types";
const MemberList: React.FC<MemberListProps> = ({ membersList}) => {
  return (
    <div>
      <MemberTable membersList={membersList}/>
    </div>
  );
}

export default MemberList;