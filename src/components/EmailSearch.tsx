import React from 'react';
import { Search } from 'lucide-react';

interface EmailSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function EmailSearch({ searchTerm, onSearchChange }: EmailSearchProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search emails..."
        className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent outline-none transition-all font-['Open_Sans']"
      />
    </div>
  );
}