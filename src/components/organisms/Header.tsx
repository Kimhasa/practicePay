import React from 'react';
import { Link } from 'react-router-dom';
import { Text, Button } from '../atoms';
import { SearchBox } from '../molecules';

interface HeaderProps {
  onSearch?: (query: string) => void;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  onSearch,
  className = ''
}) => {
  return (
    <header className={`bg-black border-b border-gray-800 sticky top-0 z-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-gray-600">
              <span className="text-black font-bold text-xl">P</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-black text-white">
                PRACTICE PAY
              </h1>
            </div>
          </Link>
          
          {/* 네비게이션 */}
          <nav className="hidden md:flex space-x-1">
            <Link 
              to="/" 
              className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200 font-medium rounded-lg"
            >
              홈
            </Link>
            <Link 
              to="/about" 
              className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200 font-medium rounded-lg"
            >
              소개
            </Link>
            <Link 
              to="/contact" 
              className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200 font-medium rounded-lg"
            >
              연락처
            </Link>
          </nav>
          
          {/* 검색박스와 로그인 버튼 */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block">
              <SearchBox
                placeholder="검색..."
                onSearch={onSearch}
                className="w-64"
              />
            </div>
            
            {/* 로그인 버튼 */}
            <button className="px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors flex items-center border border-gray-600">
              <span className="mr-2">🎮</span>
              <span className="hidden sm:inline">로그인</span>
            </button>
          </div>
          
          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white transition-all">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* 하단 라인 */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white opacity-20"></div>
    </header>
  );
};

export default Header; 