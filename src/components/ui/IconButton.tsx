'use client';

interface IconButtonProps {
  icon: React.ReactNode;
  label: string;
  count?: number;
  showDropdown?: boolean;
  onClick?: () => void;
}

export default function IconButton({ icon, label, count, showDropdown, onClick }: IconButtonProps) {
  return (
    <button 
      className="flex flex-col items-center justify-start px-2 py-3.5 relative h-[87px] hover:bg-navy-light/10 transition-colors duration-200"
      onClick={onClick}
    >
      <div className="relative shrink-0 w-6 h-6 mb-1">
        {icon}
        {count !== undefined && count > 0 && (
          <span className="absolute -top-1 -right-1 bg-tangerine text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-medium">
            {count}
          </span>
        )}
      </div>
      <div className="flex gap-0.5 items-center justify-center w-full">
        <span className="font-rubik font-normal text-xs text-navy-light text-nowrap">
          {label}
        </span>
        {showDropdown && (
          <svg className="w-1.5 h-1.5 ml-1" viewBox="0 0 6 6" fill="currentColor">
            <path d="M3 4L1 2h4L3 4z" />
          </svg>
        )}
      </div>
    </button>
  );
}