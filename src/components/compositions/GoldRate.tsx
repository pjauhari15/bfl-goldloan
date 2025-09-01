// Authentic GL background from Figma node 3288:83648
const glBackground = "/images/gl-background.png";

export function GoldRate() {
  return (
    <div className="bg-white w-full">
      {/* Mobile Layout */}
      <div className="md:hidden">
        {/* Complete GL Component - Matches Figma node 3288:83647 */}
        <div 
          className="bg-gradient-to-b from-[#00000000] from-[9.386%] to-[#000000] flex flex-col items-start justify-start relative w-full"
          style={{ 
            backgroundImage: `url('${glBackground}')`,
            backgroundPosition: 'center top',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Hero Section - Mobile */}
          <div className="flex flex-col gap-3 items-start justify-start overflow-clip p-4 relative w-full">
            <div className="backdrop-blur-[6px] backdrop-filter bg-[rgba(46,46,46,0.7)] flex flex-col gap-3 items-start justify-start p-4 relative rounded-[16px] w-full">
              <div className="w-full">
                <h1 className="font-medium text-lg text-white leading-normal">Gold Rate Today</h1>
              </div>
              <div className="w-full">
                <p className="font-normal text-sm text-white leading-5">Need quick funds to manage urgent expenses? Get an instant personal loan with minimal paperwork and zero</p>
              </div>
            </div>
          </div>
          
          {/* Gold Rate Cards - Mobile (Stacked) */}
          <div className="flex flex-col gap-3 items-start justify-start p-4 w-full">
            <div className="w-full space-y-3">
              {/* First Card */}
              <div className="backdrop-blur-[4.5px] backdrop-filter bg-[rgba(0,0,0,0.5)] flex flex-col gap-2 p-4 relative rounded-lg w-full border border-[#a1a1a1] shadow-[0px_0px_10px_0px_rgba(255,255,255,0.56)]">
                <div className="space-y-1 w-full">
                  <p className="font-normal text-sm text-[#cccccc] leading-5">Gold rate itna</p>
                  <p className="font-normal text-sm text-[#cccccc] leading-5">22k Gold / 10gm</p>
                  <div className="flex gap-1 items-center text-nowrap">
                    <p className="font-medium text-base text-white leading-normal whitespace-pre">₹80,958</p>
                    <p className="font-normal text-xs text-[#00b3cc] leading-4 whitespace-pre">+520.60(0.24%)</p>
                  </div>
                  <p className="font-medium text-xs text-[#ff6700] leading-4 text-right">Lorem Ipsum</p>
                </div>
              </div>
              
              {/* Second Card */}
              <div className="backdrop-blur-[4.5px] backdrop-filter bg-[rgba(0,0,0,0.5)] flex flex-col gap-2 p-4 relative rounded-lg w-full border border-[#a1a1a1] shadow-[0px_0px_10px_0px_rgba(255,255,255,0.56)]">
                <div className="space-y-1 w-full">
                  <p className="font-normal text-sm text-[#cccccc] leading-5">Gold rate itna</p>
                  <p className="font-normal text-sm text-[#cccccc] leading-5">22k Gold / 10gm</p>
                  <div className="flex gap-1 items-center">
                    <p className="font-medium text-base text-white leading-normal whitespace-pre">₹56,958</p>
                  </div>
                  <p className="font-medium text-xs text-[#ff6700] leading-4 text-right">Gold loan calculator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section - Mobile (Stacked) - Outside background */}
        <div className="bg-white flex flex-col gap-4 p-4 w-full">
          <div className="space-y-3">
            <div className="flex flex-col gap-2">
              <p className="font-normal text-base text-[#1a1a1a] leading-normal">24K Gold / 10gm: ₹1,05,293</p>
              <p className="font-normal text-sm text-[#00b500] leading-5">+520.60(0.24%)</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-normal text-sm text-[#666666] leading-5">Find nearest gold loan branch</p>
              <p className="font-normal text-sm text-[#1778eb] leading-5">Check now</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-2 items-center">
            <button className="flex items-center justify-center px-4 py-3 relative rounded-full w-full bg-gradient-to-r from-[#ff6700] to-[#ff8533] max-w-sm">
              <span className="font-medium text-sm text-white uppercase leading-normal">Check eligibility for gold loan</span>
            </button>
            <p className="font-normal text-xs text-[#666666] leading-4 text-center">Lorem ipsum dolor orem ipsum dolor ipsum dolor ipsum dolor ipsum dolor</p>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        {/* Complete GL Component - Matches Figma node 3288:83647 */}
        <div 
          className="bg-gradient-to-b from-[#00000000] from-[9.386%] to-[#000000] flex flex-col items-start justify-start relative w-full"
          style={{ 
            backgroundImage: `url('${glBackground}')`,
            backgroundPosition: 'center top',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Hero Section - Desktop */}
          <div className="flex flex-col gap-3 items-start justify-start overflow-clip p-5 relative w-full">
            <div className="backdrop-blur-[6px] backdrop-filter bg-[rgba(46,46,46,0.7)] flex flex-col gap-3 items-start justify-start p-4 relative rounded-[16px] w-full">
              <div className="w-full">
                <h1 className="font-medium text-lg text-white leading-normal">Gold Rate Today</h1>
              </div>
              <div className="w-full">
                <p className="font-normal text-sm text-white leading-5">Need quick funds to manage urgent expenses? Get an instant personal loan with minimal paperwork and zero</p>
              </div>
            </div>
          </div>
          
          {/* Gold Rate Cards - Desktop (Side by Side) - Matches Figma node 3288:83653 */}
          <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start pb-4 pl-5 pr-4 pt-1 relative w-full">
            <div className="content-stretch flex gap-2.5 items-center justify-start relative shrink-0 w-full">
              {/* First Card */}
              <div className="backdrop-blur-[4.5px] backdrop-filter bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col gap-2 items-end justify-center px-4 py-3 relative rounded-[8px] shrink-0 w-[190px]">
                <div aria-hidden="true" className="absolute border border-[#a1a1a1] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_10px_0px_rgba(255,255,255,0.56)]" />
                <div className="content-stretch flex flex-col gap-1 items-start justify-start leading-[0] relative shrink-0 w-full">
                  <div className="flex flex-col font-['Rubik',_sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[#cccccc] text-[14px]">
                    <p className="leading-[20px]">Gold rate itna</p>
                  </div>
                  <div className="flex flex-col font-['Rubik',_sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[#cccccc] text-[14px]">
                    <p className="leading-[20px]">22k Gold / 10gm</p>
                  </div>
                  <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0 text-nowrap">
                    <div className="flex flex-col font-['Rubik',_sans-serif] font-medium justify-center relative shrink-0 text-[16px] text-white">
                      <p className="leading-[normal] text-nowrap whitespace-pre">₹80,958</p>
                    </div>
                    <div className="font-['Rubik',_sans-serif] font-normal relative shrink-0 text-[#00b3cc] text-[12px]">
                      <p className="leading-[16px] text-nowrap whitespace-pre">+520.60(0.24%)</p>
                    </div>
                  </div>
                  <div className="font-['Rubik',_sans-serif] font-medium min-w-full relative shrink-0 text-[#ff6700] text-[12px] text-right">
                    <p className="leading-[16px]">Lorem Ipsum</p>
                  </div>
                </div>
              </div>
              
              {/* Second Card */}
              <div className="backdrop-blur-[4.5px] backdrop-filter bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col gap-2 items-end justify-center px-4 py-3 relative rounded-[8px] shrink-0 w-[190px]">
                <div aria-hidden="true" className="absolute border border-[#a1a1a1] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_10px_0px_rgba(255,255,255,0.56)]" />
                <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full">
                  <div className="flex flex-col font-['Rubik',_sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#cccccc] text-[14px]">
                    <p className="leading-[20px]">Gold rate itna</p>
                  </div>
                  <div className="flex flex-col font-['Rubik',_sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#cccccc] text-[14px]">
                    <p className="leading-[20px]">22k Gold / 10gm</p>
                  </div>
                  <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0">
                    <div className="flex flex-col font-['Rubik',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white">
                      <p className="leading-[normal] whitespace-pre">₹56,958</p>
                    </div>
                  </div>
                  <div className="font-['Rubik',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#ff6700] text-[12px] text-right">
                    <p className="leading-[16px]">Gold loan calculator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section - Desktop (Side by Side) - Outside background */}
        <div className="bg-white flex items-start justify-between px-6 py-4 w-full">
          <div className="flex flex-col gap-3 items-start justify-start">
            <div className="flex font-normal gap-3 items-center">
              <p className="text-lg text-[#1a1a1a] leading-normal whitespace-pre">24K Gold / 10gm: ₹1,05,293</p>
              <p className="text-sm text-[#00b500] leading-5 whitespace-pre">+520.60(0.24%)</p>
            </div>
            <div className="flex font-normal gap-2 items-center text-sm">
              <p className="text-[#666666] leading-5 whitespace-pre">Find nearest gold loan branch</p>
              <p className="text-[#1778eb] leading-5 whitespace-pre">Check now</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-2 items-center">
            <button className="flex gap-2.5 h-[42px] items-center justify-center px-2.5 py-3 relative rounded-full w-96 bg-gradient-to-r from-[#ff6700] to-[#ff8533]">
              <span className="font-medium text-sm text-white uppercase leading-normal whitespace-pre">Check eligibility for gold loan</span>
            </button>
            <p className="font-normal text-xs text-[#666666] leading-4 text-center whitespace-pre">Lorem ipsum dolor orem ipsum dolor ipsum dolor ipsum dolor ipsum dolor</p>
          </div>
        </div>
      </div>
    </div>
  );
}