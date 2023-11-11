'use client'
import React, {useState, useEffect} from 'react';
import { useMemberContext } from '../context/MemberContext';
import CardHeader from '../components/CardHeader';
import TextInput from '../components/TextInput'
import SelectDropdown from '../components/SelectInput'
import DatePicker from './DateInput';
import { v4 as uuidv4 } from "uuid";
import { useParams, useRouter } from "next/navigation";
import { useForm, Controller } from 'react-hook-form';
import { MemberFormData } from '../types/types';
import moment from 'moment';

function MemberForm() {
  const router = useRouter();
  const { handleSubmit, control, setValue, getValues, formState: { errors } } = useForm<MemberFormData>();
  const [newStartDate, setStartDate] = useState(new Date("2023/01/21"));
  const [newEndDate, setEndDate] = useState(new Date("2023/01/21"));
  const { members, setMembers} = useMemberContext();
  const { editMember, addMember, deleteMember } = useMemberContext();

  const { memberId } = useParams();
  const fillAllDate = () =>{
    let userIdData = {...members.find((member) => member.id === memberId)};
    const startDateNew = moment(userIdData.startDate).format('YYYY-MM-DD');
    const endDateNew = moment(userIdData.endDate).format('YYYY-MM-DD');
    if (userIdData) {
      setValue("title", userIdData.title);
      setValue("first_name", userIdData.first_name);
      setValue("last_name", userIdData.last_name);
      setValue("role", userIdData.role);
      setValue("email", userIdData.email);
      setValue("startDate", new Date(startDateNew));
      setValue("endDate", new Date(endDateNew));
    }
  }

    useEffect(()=>{
      if (memberId) {
      fillAllDate()
    }
    },[memberId, newStartDate, newEndDate])

  const roleOptions = ['Owner', 'Admin', 'Read Only'];
  const titleOptions = ['MR.','MRs.','Dr']

  const onSubmit = async (data: MemberFormData) => {
    if (memberId) {
      await editMember({
        id: memberId.toString(),
        ...data
      });

    } else {
      await addMember({
        id: uuidv4(),
        ...data
      });
    }
    router.push('/');
  };
  

  return (
    <>
      <CardHeader
        imageURL={memberId ? `/edit-user.png` : '/add-user.png'}
        title={memberId ? `Edit Member` : 'Add New Member'}
        description={memberId ? `Edit or Update member information in our system.` : 'Add new member information in our system.'}
      />

       <form className='mt-10' onSubmit={handleSubmit(onSubmit)}>

        <Controller
          name="title"
          control={control}
          defaultValue=""
          rules={{ required: 'Title is required' }} 
          render={({ field }) => (
            <SelectDropdown
              id="title"
              label="Title"
              options={titleOptions}
              value={field.value}
              onChange={field.onChange}
              error={errors?.title && errors?.title.message}
            />
          )}
        />


        <div className="grid md:grid-cols-2 md:gap-6">
          <Controller
            name="first_name"
            control={control}
            defaultValue=""
            rules={{ required: 'First name is required' }}
            render={({ field }) => (
                <TextInput
                  type="text"
                  name="first_name"
                  label="First name"
                  value={field.value}
                  onChange={field.onChange}
                  error={errors?.first_name && errors?.first_name.message}
                />
              )}
            />
          <Controller
            name="last_name"
            control={control}
            defaultValue=""
            rules={{ required: 'Last name is required' }}
            render={({ field }) => (
              <TextInput
                type="text"
                name="last_name"
                label="Last name"
                value={field.value}
                onChange={field.onChange}
                error={errors?.last_name && errors?.last_name.message}
              />
            )}
          />

        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{ required: 'E-mail is required' }}
            render={({ field }) => (
              <TextInput
                type="email"
                name="email"
                label="Email address"
                value={field.value}
                onChange={field.onChange}
                error={errors?.email && errors?.email.message}
              />
            )}
          />


        <Controller
          name="role"
          control={control}
          defaultValue=""
          rules={{ required: 'Role is required' }}
          render={({ field }) => (
            <SelectDropdown
              id="role"
              label="Role"
              options={roleOptions}
              value={field.value}
              onChange={field.onChange}
              error={errors?.role && errors?.role.message}
            />
          )}
        />
      </div>

        <DatePicker control={control} errors={errors} newStartDate={newStartDate} newEndDate={newEndDate} required={true}/>

        <div className="xs:flex xs:m-10">

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {memberId ? 'Update' : 'Save'}
          </button>
          {memberId ? (
            <button
              type="button"
              onClick={() => {
                deleteMember(memberId.toString());
                router.push('/');
              }}
              className="mt-2 sm:mt-0 ml-0 sm:ml-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Delete
            </button>
          ) : ''}

          <button
            type="button"
            onClick={() => router.push('/')}
            className="mt-2 sm:mt-0 ml-0 sm:ml-2 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Cancel
          </button>
        </div>

       </form>
    </>
  );
}

export default MemberForm;