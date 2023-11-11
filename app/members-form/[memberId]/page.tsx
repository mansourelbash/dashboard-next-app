import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Edit Members Page',
  description: 'Edit and manage member information on our platform. Update user details, permissions, and more.',
};

import MemberForm from '../../components/MemberForm';
const Form = () => {
  return (
    <div className="p-4 sm:ml-64">
      <MemberForm />
    </div>
  );
};

export default Form;
