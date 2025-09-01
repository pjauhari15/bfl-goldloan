'use client';

import { useState } from 'react';

const imgDivider = "/images/divider.svg";
const img = "/images/decorative-line.svg";

function PartDivider() {
  return (
    <div className="relative w-full h-0">
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ "--stroke-0": "rgba(211, 218, 225, 1)" } as React.CSSProperties}>
          <img alt="" className="block max-w-none w-full h-full" src={imgDivider} />
        </div>
      </div>
    </div>
  );
}

export function GoldRateCalculator() {
  const [goldPurity, setGoldPurity] = useState<'24' | '22'>('24');
  const [goldWeight, setGoldWeight] = useState(500);

  const calculateGoldValue = () => {
    const baseRate = goldPurity === '24' ? 105293 : 80958;
    return Math.round((baseRate * goldWeight) / 10);
  };

  return (
    <div className="bg-white w-full">
      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="flex flex-col gap-5 p-4">
          {/* Header */}
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-lg text-[#1a1a1a] leading-normal">Gold Rate Calculator</h1>
            <div className="flex flex-col gap-1 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-normal text-[#4d4d4d]">22k Gold rate / 10gm</span>
                <span className="font-normal text-[#4d4d4d] text-xs">|</span>
                <div className="flex items-center gap-1">
                  <span className="font-medium text-[#4d4d4d]">₹80,958</span>
                  <span className="font-normal text-[#00b500] text-xs">+520.60(0.24%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Gold Purity Selection */}
          <div className="flex flex-col gap-3">
            <h2 className="font-medium text-sm text-[#1a1a1a]">Gold Purity</h2>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <button
                onClick={() => setGoldPurity('24')}
                className={`bg-neutral-50 border rounded flex items-center gap-3 h-11 px-3 w-full sm:w-40 ${
                  goldPurity === '24' ? 'border-[#e3c77c]' : 'border-[#e3c77c]'
                }`}
              >
                <div className={`relative rounded-full w-4 h-4 border ${
                  goldPurity === '24' ? 'border-[#d1a732]' : 'border-[#d1a732]'
                }`}>
                  {goldPurity === '24' && (
                    <div className="absolute bg-[#907724] left-1/2 rounded-full w-2 h-2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                </div>
                <span className={`font-medium text-sm ${
                  goldPurity === '24' ? 'text-[#1a1a1a]' : 'text-[#4d4d4d]'
                }`}>
                  24 carat
                </span>
              </button>
              
              <button
                onClick={() => setGoldPurity('22')}
                className={`bg-neutral-50 border rounded flex items-center gap-3 h-11 px-3 w-full sm:w-40 ${
                  goldPurity === '22' ? 'border-[#e3c77c]' : 'border-[#e3c77c]'
                }`}
              >
                <div className={`relative rounded-full w-4 h-4 border ${
                  goldPurity === '22' ? 'border-[#d1a732]' : 'border-[#d1a732]'
                }`}>
                  {goldPurity === '22' && (
                    <div className="absolute bg-[#907724] left-1/2 rounded-full w-2 h-2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                </div>
                <span className={`font-normal text-sm ${
                  goldPurity === '22' ? 'text-[#1a1a1a]' : 'text-[#4d4d4d]'
                }`}>
                  22 carat
                </span>
              </button>
            </div>
          </div>

          {/* Gold Weight Input */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label className="font-medium text-sm text-[#1a1a1a]">Gold weight</label>
              <span className="font-normal text-xs text-[#1a1a1a]">(1gm - 6,000 gm)</span>
            </div>
            <div className="flex items-center bg-white border border-neutral-200 rounded overflow-hidden">
              <input
                type="number"
                value={goldWeight}
                onChange={(e) => setGoldWeight(Number(e.target.value))}
                className="flex-1 px-3 py-3 font-medium text-base text-[#1a1a1a] outline-none"
                min="1"
                max="6000"
              />
              <div className="bg-[#f2f2f2] px-3 py-3 border-l border-neutral-200">
                <span className="font-medium text-base text-[#1a1a1a]">gm</span>
              </div>
            </div>
          </div>

          {/* Slider */}
          <div className="flex flex-col gap-2">
            <div className="relative h-7">
              <div className="absolute bg-[#f2f2f2] top-[32%] bottom-[39%] left-0 right-0 rounded-sm shadow-inner"></div>
              <div 
                className="absolute bg-[#ecdbad] top-[32%] bottom-[39%] left-0 rounded-sm shadow-inner"
                style={{ right: `${100 - (goldWeight / 6000) * 100}%` }}
              ></div>
              <div 
                className="absolute bg-[#d1a732] w-4 h-4 rounded-full border-2 border-white shadow top-1/2 transform -translate-y-1/2 -translate-x-1/2"
                style={{ left: `${(goldWeight / 6000) * 100}%` }}
              >
                <div className="absolute bg-[#d1a732] flex gap-0.5 h-2 items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2">
                  <div className="bg-[#ecdbad] h-1 rounded-sm w-0.5"></div>
                  <div className="bg-[#ecdbad] h-1 rounded-sm w-0.5"></div>
                  <div className="bg-[#ecdbad] h-1 rounded-sm w-0.5"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-[#999999]">
              <span>01</span>
              <span>125</span>
              <span>250</span>
              <span>500</span>
              <span>1K</span>
              <span>6K</span>
            </div>
          </div>

          {/* Result Panel */}
          <div className="bg-[#fffbef] border border-[#e3c77c] rounded p-4 flex flex-col gap-4 items-center">
            <div className="text-center">
              <p className="font-normal text-lg text-[#1a1a1a] mb-1">Value of your gold</p>
              <p className="font-medium text-xl text-[#1a1a1a]">₹{calculateGoldValue().toLocaleString()}</p>
            </div>
            <div className="w-full h-px">
              <img alt="" className="block w-full h-full" src={img} />
            </div>
            <button className="bg-gradient-to-r from-[#ff6700] to-[#ff8900] text-white font-medium text-sm uppercase py-3 px-6 rounded-full w-full max-w-xs">
              Apply for gold loan
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="bg-white rounded flex p-6 gap-6">
          {/* Left Panel - Form */}
          <div className="flex-1 flex flex-col gap-5">
            {/* Header */}
            <div className="flex flex-col gap-2 h-12 w-full max-w-3xl">
              <h1 className="font-medium text-xl text-[#1a1a1a] leading-normal">Gold Rate Calculator</h1>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-normal text-[#4d4d4d] whitespace-nowrap">22k Gold rate / 10gm</span>
                <span className="font-normal text-[#4d4d4d] text-xs">|</span>
                <div className="flex items-center gap-1">
                  <span className="font-medium text-[#4d4d4d] whitespace-nowrap">₹80,958</span>
                  <span className="font-normal text-[#00b500] text-xs whitespace-nowrap">+520.60(0.24%)</span>
                </div>
              </div>
            </div>

            {/* Gold Purity Selection */}
            <div className="flex items-center justify-between w-full">
              <h2 className="font-medium text-sm text-[#1a1a1a] whitespace-nowrap">Gold Purity</h2>
              <div className="flex gap-4">
                <button
                  onClick={() => setGoldPurity('24')}
                  className={`bg-neutral-50 border border-[#e3c77c] rounded flex items-center gap-3 h-11 px-3 w-40`}
                >
                  <div className={`relative rounded-full w-4 h-4 border border-[#d1a732]`}>
                    {goldPurity === '24' && (
                      <div className="absolute bg-[#907724] left-1/2 rounded-full w-2 h-2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    )}
                  </div>
                  <span className={`font-medium text-sm ${
                    goldPurity === '24' ? 'text-[#1a1a1a]' : 'text-[#4d4d4d]'
                  }`}>
                    24 carat
                  </span>
                </button>
                
                <button
                  onClick={() => setGoldPurity('22')}
                  className={`bg-neutral-50 border border-[#e3c77c] rounded flex items-center gap-3 h-11 px-3 w-40`}
                >
                  <div className={`relative rounded-full w-4 h-4 border border-[#d1a732]`}>
                    {goldPurity === '22' && (
                      <div className="absolute bg-[#907724] left-1/2 rounded-full w-2 h-2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    )}
                  </div>
                  <span className={`font-normal text-sm ${
                    goldPurity === '22' ? 'text-[#1a1a1a]' : 'text-[#4d4d4d]'
                  }`}>
                    22 carat
                  </span>
                </button>
              </div>
            </div>

            {/* Gold Weight Input */}
            <div className="flex flex-col gap-5">
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <label className="font-medium text-sm text-[#1a1a1a] whitespace-nowrap">Gold weight</label>
                  <span className="font-normal text-xs text-[#1a1a1a] whitespace-nowrap">(1gm - 6,000 gm)</span>
                </div>
                <div className="flex items-center bg-white border border-neutral-200 rounded overflow-hidden w-52">
                  <input
                    type="number"
                    value={goldWeight}
                    onChange={(e) => setGoldWeight(Number(e.target.value))}
                    className="flex-1 px-3 py-3 font-medium text-base text-[#1a1a1a] outline-none"
                    min="1"
                    max="6000"
                  />
                  <div className="bg-[#f2f2f2] px-2 py-3 border-l border-neutral-200">
                    <span className="font-medium text-base text-[#1a1a1a]">gm</span>
                  </div>
                </div>
              </div>

              {/* Slider */}
              <div className="flex flex-col gap-2">
                <div className="relative h-7">
                  <div className="absolute bg-[#f2f2f2] top-[32%] bottom-[39%] left-0 right-0 rounded-sm shadow-inner"></div>
                  <div 
                    className="absolute bg-[#ecdbad] top-[32%] bottom-[39%] left-0 rounded-sm shadow-inner"
                    style={{ right: `${100 - (goldWeight / 6000) * 100}%` }}
                  ></div>
                  <div 
                    className="absolute bg-[#d1a732] w-4 h-4 rounded-full border-2 border-white shadow top-1/2 transform -translate-y-1/2 -translate-x-1/2"
                    style={{ left: `${(goldWeight / 6000) * 100}%` }}
                  >
                    <div className="absolute bg-[#d1a732] flex gap-0.5 h-2 items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2">
                      <div className="bg-[#ecdbad] h-1 rounded-sm w-0.5"></div>
                      <div className="bg-[#ecdbad] h-1 rounded-sm w-0.5"></div>
                      <div className="bg-[#ecdbad] h-1 rounded-sm w-0.5"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-[#999999]">
                  <span className="whitespace-nowrap">01</span>
                  <div className="flex h-2 items-center justify-center w-0">
                    <div className="transform rotate-90">
                      <div className="h-0 w-2 relative">
                        <PartDivider />
                      </div>
                    </div>
                  </div>
                  <span className="whitespace-nowrap">125</span>
                  <div className="flex h-2 items-center justify-center w-0">
                    <div className="transform rotate-90">
                      <div className="h-0 w-2 relative">
                        <PartDivider />
                      </div>
                    </div>
                  </div>
                  <span className="whitespace-nowrap">250</span>
                  <div className="flex h-2 items-center justify-center w-0">
                    <div className="transform rotate-90">
                      <div className="h-0 w-2 relative">
                        <PartDivider />
                      </div>
                    </div>
                  </div>
                  <span className="whitespace-nowrap">500</span>
                  <div className="flex h-2 items-center justify-center w-0">
                    <div className="transform rotate-90">
                      <div className="h-0 w-2 relative">
                        <PartDivider />
                      </div>
                    </div>
                  </div>
                  <span className="whitespace-nowrap">1K</span>
                  <div className="flex h-2 items-center justify-center w-0">
                    <div className="transform rotate-90">
                      <div className="h-0 w-2 relative">
                        <PartDivider />
                      </div>
                    </div>
                  </div>
                  <span className="whitespace-nowrap">6K</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Result */}
          <div className="flex-1 bg-[#fffbef] border border-[#e3c77c] rounded p-4 flex flex-col gap-4 items-center">
            <div className="flex flex-col gap-4 items-start w-full">
              <div className="flex flex-col gap-1 items-center w-full">
                <div className="flex gap-1 items-center justify-center w-full">
                  <span className="font-normal text-lg text-[#1a1a1a] whitespace-nowrap">Value of your gold</span>
                </div>
                <p className="font-medium text-2xl text-[#1a1a1a] text-center h-6 leading-normal">₹{calculateGoldValue().toLocaleString()}</p>
              </div>
              <div className="h-0 w-full relative">
                <div className="absolute inset-0">
                  <div className="absolute inset-0" style={{ "--stroke-0": "rgba(236, 219, 173, 1)" } as React.CSSProperties}>
                    <img alt="" className="block max-w-none w-full h-full" src={img} />
                  </div>
                </div>
              </div>
            </div>
            <button className="bg-gradient-to-r from-[#ff6700] to-[#ff8900] text-white font-medium text-sm uppercase py-3 px-6 rounded-full h-[42px] w-72">
              Apply for gold loan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}