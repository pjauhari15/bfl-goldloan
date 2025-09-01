'use client';

interface MenuItemProps {
  text: string;
  showDropdown?: boolean;
  isActive?: boolean;
  onClick?: () => void;
}

export default function MenuItem({ text, showDropdown = true, isActive = false, onClick }: MenuItemProps) {
  return (
    <button 
      className={`flex gap-1 items-center justify-start px-1.5 py-2.5 rounded transition-colors duration-200 ${
        isActive ? 'bg-navy-light/20' : 'hover:bg-navy-light/10'
      }`}
      onClick={onClick}
    >
      <span className="font-rubik font-normal text-sm text-white">
        {text}
      </span>
      {showDropdown && (
        <svg className="w-[18px] h-[18px] ml-1" viewBox="0 0 18 18" fill="none">
          <path 
            d="M4.5 6.75L9 11.25L13.5 6.75" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}