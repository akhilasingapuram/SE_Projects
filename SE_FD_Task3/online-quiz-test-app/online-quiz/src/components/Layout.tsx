import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white-500 text-gray-900">
      <main className="min-h-screen flex items-center justify-center px-4">
        {children}
      </main>
    </div>
  );
}

export default Layout;
