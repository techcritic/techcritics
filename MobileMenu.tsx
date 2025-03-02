import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-gray-100 rounded-full"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-gray-500" />
        ) : (
          <Menu className="h-6 w-6 text-gray-500" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg p-4">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-gray-700 hover:text-blue-600 px-4 py-2 hover:bg-gray-50 rounded">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 px-4 py-2 hover:bg-gray-50 rounded">Reviews</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 px-4 py-2 hover:bg-gray-50 rounded">Categories</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 px-4 py-2 hover:bg-gray-50 rounded">About</a>
          </nav>
        </div>
      )}
    </div>
  );
}