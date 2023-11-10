import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { MemberProvider } from './context/MemberContext';
import AsideMenu from './components/AsideMenu';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'List All Members Page',
  description: 'Explore the comprehensive list of all members on our platform. View user profiles, permissions, and easily navigate through the entire member roster.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MemberProvider>
          <AsideMenu />
          {children}
          <ToastContainer />
        </MemberProvider>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.0.0/flowbite.min.js"></script>
      </body>
    </html>
  );
}
