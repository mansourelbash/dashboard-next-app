import React from 'react';
import Image from 'next/image';
import { CardHeaderProps } from '../types/types';

const CardHeader: React.FC<CardHeaderProps> = ({ imageURL, title, description }) => {
  return (
    <>
      <div className="flex flex-col items-center bg-gray-100 border border-gray-200 shadow md:p-5 md:flex-row md:w-full dark:border-gray-700 dark:bg-gray-800">
        {imageURL ? (
          <Image
            className="md:object-cover w-full h-46 sm:h-auto md:h-auto md:w-28 md:rounded-none md:rounded-l-lg"
            src={imageURL.startsWith('/') ? imageURL : `/${imageURL}`} 
            alt="Users"
            width={150}
            height={150}
          />
        ) : (
          <div className="placeholder-image">Placeholder Image</div>
        )}
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        </div>
      </div>
    </>
  );
};

export default CardHeader;
