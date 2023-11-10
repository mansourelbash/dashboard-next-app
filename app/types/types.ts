import { FieldErrors } from 'react-hook-form';

export interface DateInputProps {
  onInputChange: (name: string, value: string) => void;
  value_from: string;
  value_to: string;
  required: boolean;
}

export interface SelectDropdownProps {
  id: string;
  label: string;
  options: string[];
  value: string | undefined;
  error:any,
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface HasStringKeys {
  [key: string]: string | number;
}

export interface Member {
  id: string;
  title: string;
  first_name: string;
  last_name: string;
  email: string;
  startDate: Date;
  endDate: Date;
  role: string;
}

export interface ModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  rowID: any;
}

export interface DateRangePickerProps {
  newStartDate: Date;
  newEndDate: Date;
  required: boolean;
  errors: FieldErrors;
  control: any
}

export interface MemberFormData {
  title: string | any;
  first_name: string | any;
  last_name: string | any;
  email: string | any;
  startDate: Date | any;
  endDate: Date | any;
  role: string | any;
  errors: any
}
export interface MemberListProps {
  membersList: Member[];
}

export interface CardHeaderProps {
  imageURL: string;
  title: string;
  description: string;
}
