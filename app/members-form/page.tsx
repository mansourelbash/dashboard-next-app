import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Add Members Page',
  description: 'Add new members to our platform. Provide user details, set permissions, and more to onboard new members.',
};

import MemberForm from '../components/MemberForm';
const Form = () => {
  return (
    <div className="p-4 sm:ml-64">
      <MemberForm />
    </div>
  );
};

export default Form;
