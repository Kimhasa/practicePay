import React, { useState } from 'react';
import { Button, Input } from '../atoms';

interface SearchBoxProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  placeholder = "검색어를 입력하세요...",
  onSearch,
  className = ''
}) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex-1">
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full h-10 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-white focus:ring-white rounded-lg"
        />
      </div>
      <button 
        onClick={handleSearch}
        className="h-10 px-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors flex items-center whitespace-nowrap border border-gray-600"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        검색
      </button>
    </div>
  );
};

export default SearchBox; 