import React from 'react';
import { Header, Footer } from '../organisms';

interface MainLayoutProps {
  children: React.ReactNode;
  onSearch?: (query: string) => void;
  className?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  onSearch,
  className = ''
}) => {
  return (
    <div className={`min-h-screen flex flex-col bg-gray-900 ${className}`}>
      <Header onSearch={onSearch} />
      
      <main className="flex-1">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout; 