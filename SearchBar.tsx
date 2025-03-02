import { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="p-2 hover:bg-gray-100 rounded-full"
      >
        <Search className="h-5 w-5 text-gray-500" />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg p-4">
          <input
            type="text"
            placeholder="Search reviews..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
          <div className="mt-2 text-sm text-gray-500">
            Press Enter to search
          </div>
        </div>
      )}
    </div>
  );
}