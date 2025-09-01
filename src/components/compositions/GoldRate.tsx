const imgGl = "/images/gold-bg-1.png";
const imgGl1 = "/images/gold-bg-2.png";

export function GoldRate() {
  return (
    <div className="bg-white w-full">
      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="w-full">
          {/* Hero Section - Mobile */}
          <div 
            className="bg-gradient-to-b from-transparent from-[9.386%] to-black flex flex-col gap-3 items-start justify-start overflow-clip p-4 relative w-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url('${imgGl}'), url('${imgGl1}')`,
              backgroundPosition: '0% 0%, 50% 50%',
              backgroundSize: 'auto, cover'
            }}
          >
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
          <div className="bg-black flex flex-col gap-3 items-start justify-start p-4 w-full">
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
          
          {/* Bottom Section - Mobile (Stacked) */}
          <div className="flex flex-col gap-4 p-4 w-full">
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
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="w-full">
          {/* Hero Section - Desktop */}
          <div 
            className="bg-gradient-to-b from-transparent from-[9.386%] to-black flex flex-col gap-3 items-start justify-start overflow-clip p-5 relative w-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url('${imgGl}'), url('${imgGl1}')`,
              backgroundPosition: '0% 0%, 50% 50%',
              backgroundSize: 'auto, cover'
            }}
          >
            <div className="backdrop-blur-[6px] backdrop-filter bg-[rgba(46,46,46,0.7)] flex flex-col gap-3 items-start justify-start p-4 relative rounded-[16px] w-full">
              <div className="w-full">
                <h1 className="font-medium text-lg text-white leading-normal">Gold Rate Today</h1>
              </div>
              <div className="w-full">
                <p className="font-normal text-sm text-white leading-5">Need quick funds to manage urgent expenses? Get an instant personal loan with minimal paperwork and zero</p>
              </div>
            </div>
          </div>
          
          {/* Gold Rate Cards - Desktop (Side by Side) */}
          <div className="bg-black flex flex-col gap-3 items-start justify-start pb-4 pl-5 pr-4 pt-1 w-full">
            <div className="flex gap-2.5 items-center justify-start w-full">
              {/* First Card */}
              <div className="backdrop-blur-[4.5px] backdrop-filter bg-[rgba(0,0,0,0.5)] flex flex-col gap-2 items-end justify-center px-4 py-3 relative rounded-lg border border-[#a1a1a1] shadow-[0px_0px_10px_0px_rgba(255,255,255,0.56)] flex-1">
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <p className="font-normal text-sm text-[#cccccc] leading-5">Gold rate itna</p>
                  <p className="font-normal text-sm text-[#cccccc] leading-5">22k Gold / 10gm</p>
                  <div className="flex gap-1 items-center text-nowrap">
                    <p className="font-medium text-base text-white leading-normal whitespace-pre">₹80,958</p>
                    <p className="font-normal text-xs text-[#00b3cc] leading-4 whitespace-pre">+520.60(0.24%)</p>
                  </div>
                  <p className="font-medium text-xs text-[#ff6700] leading-4 text-right w-full">Lorem Ipsum</p>
                </div>
              </div>
              
              {/* Second Card */}
              <div className="backdrop-blur-[4.5px] backdrop-filter bg-[rgba(0,0,0,0.5)] flex flex-col gap-2 items-end justify-center px-4 py-3 relative rounded-lg w-48 border border-[#a1a1a1] shadow-[0px_0px_10px_0px_rgba(255,255,255,0.56)]">
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <p className="font-normal text-sm text-[#cccccc] leading-5">Gold rate itna</p>
                  <p className="font-normal text-sm text-[#cccccc] leading-5">22k Gold / 10gm</p>
                  <div className="flex gap-1 items-center">
                    <p className="font-medium text-base text-white leading-normal whitespace-pre">₹56,958</p>
                  </div>
                  <p className="font-medium text-xs text-[#ff6700] leading-4 text-right w-full">Gold loan calculator</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Section - Desktop (Side by Side) */}
          <div className="flex items-start justify-between px-6 py-3 w-full">
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
    </div>
  );
}