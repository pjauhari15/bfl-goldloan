'use client';

interface SearchBarProps {
  placeholder?: string;
}

export default function SearchBar({ 
  placeholder = "Search for Loans, Investment, Insurance, Payments" 
}: SearchBarProps) {
  return (
    <div className="bg-white box-border flex gap-4 h-11 items-center justify-start pl-4 pr-0 py-0 relative rounded border border-gray-200 w-full">
      <div className="flex-1 flex gap-2 items-center justify-start">
        <input 
          type="text"
          placeholder={placeholder}
          className="flex-1 font-rubik font-normal text-sm text-gray-40 bg-transparent outline-none placeholder:text-gray-40"
        />
      </div>
      <div className="bg-tangerine-light box-border flex h-full items-center justify-center px-2 py-0 rounded-br rounded-tr w-10">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path 
            d="M21 21L16.5 16.5M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}