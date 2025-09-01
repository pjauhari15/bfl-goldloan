interface BajajLogoProps {
  className?: string;
}

export default function BajajLogo({ className = "" }: BajajLogoProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Bajaj Finserv Logo - matching Figma design exactly */}
      <div className="h-8 w-[73.488px] flex items-center">
        <div className="text-white font-rubik">
          <div className="text-base font-bold leading-none tracking-wide">
            BAJAJ FINSERV
          </div>
        </div>
      </div>
      
      {/* Vertical Divider - exact Figma dimensions */}
      <div className="h-[22px] w-px bg-white/30"></div>
    </div>
  );
}