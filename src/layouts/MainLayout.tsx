import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <div className="hidden lg:block h-full">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
