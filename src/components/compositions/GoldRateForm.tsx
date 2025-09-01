'use client';

import { useState } from 'react';

export function GoldRateForm() {
  const [formData, setFormData] = useState({
    loanAmount: '2,23,391',
    mobileNumber: '',
    fullName: '',
    dateOfBirth: '',
    branch: 'Pune - Chandannagar',
    acceptTerms: false
  });

  const [showWatchVideo, setShowWatchVideo] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full bg-white">
      {/* Container with responsive padding and max-width */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 md:p-6">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <h2 className="font-medium text-lg md:text-xl text-[#1a1a1a] leading-normal">
                Enter Loan Amount You Want
              </h2>
              <div className="w-3.5 h-3.5 cursor-pointer">
                <svg viewBox="0 0 14 14" fill="none" className="w-full h-full">
                  <path d="M7 1L7 13M1 7L13 7" stroke="#666" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setShowWatchVideo(!showWatchVideo)}
                className="flex items-center gap-1 text-[#ff6700] font-medium text-sm md:text-base hover:underline"
              >
                <span>Watch Video</span>
                <div className="w-4 h-4">
                  <svg viewBox="0 0 16 16" fill="currentColor" className="w-full h-full">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M6.271 5.055a.5.5 0 0 1 .52.444L7 6.5v3a.5.5 0 0 1-.271.445L6.5 10l-3-2a.5.5 0 0 1 0-.894L6.5 5a.5.5 0 0 1 .271.055z"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Gold Rate Info */}
          <div className="flex flex-wrap items-center gap-2 mb-4 text-sm">
            <span className="text-[#4d4d4d]">22k Gold rate / 10gm</span>
            <span className="text-[#4d4d4d]">|</span>
            <span className="font-medium text-[#4d4d4d]">₹80,958</span>
            <span className="text-[#00b500] text-xs">+520.60(0.24%)</span>
          </div>

          {/* Loan Amount Input */}
          <div className="mb-6">
            <div className="flex flex-col md:flex-row gap-0 border border-[#999999] rounded">
              {/* Rupee Symbol */}
              <div className="bg-[#f2f2f2] flex items-center justify-center px-4 py-4 border-r border-[#999999]">
                <div className="w-4 h-4">
                  <svg viewBox="0 0 16 16" fill="currentColor" className="w-full h-full">
                    <path d="M4 2h8v2H8.5c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5H4v2h4.5c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5H4v2h8v2H4c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1z"/>
                  </svg>
                </div>
              </div>
              
              {/* Amount Input */}
              <div className="flex-1 flex items-center justify-between p-3">
                <input
                  type="text"
                  value={formData.loanAmount}
                  onChange={(e) => handleInputChange('loanAmount', e.target.value)}
                  className="text-xl md:text-2xl font-medium text-[#1a1a1a] bg-transparent border-none outline-none flex-1"
                />
                
                {/* Required Gold Weight */}
                <div className="border-l border-[#cccccc] pl-3 text-right hidden md:block">
                  <div className="text-[10px] text-[#666666] leading-tight">Required gold weight</div>
                  <div className="text-base text-[#4d4d4d] font-medium">45.50 gm</div>
                </div>
              </div>
            </div>
            
            {/* Required Gold Weight - Mobile */}
            <div className="mt-2 text-right md:hidden">
              <div className="text-xs text-[#666666]">Required gold weight</div>
              <div className="text-sm text-[#4d4d4d] font-medium">45.50 gm</div>
            </div>
            
            <p className="text-xs text-[#666666] mt-2 leading-relaxed">
              Calculated at gold purity of 22 karats. This is an estimate. The actual weight of gold required may vary subject to verification of gold.
            </p>
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-[#ff6700] to-[#ff8900] text-white text-center py-3 rounded mb-6 opacity-90">
            <div className="flex items-center justify-center gap-2">
              <span className="font-medium text-sm md:text-base">START YOUR APPLICATION BELOW</span>
              <div className="w-4 h-4 rotate-90">
                <svg viewBox="0 0 18 18" fill="currentColor" className="w-full h-full">
                  <path d="M6 4l6 5-6 5V4z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            {/* Mobile Number */}
            <div>
              <label className="block text-sm font-medium text-[#1a1a1a] mb-2">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={formData.mobileNumber}
                onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                placeholder="Enter 10-digit mobile number"
                className="w-full p-3 border border-[#999999] rounded text-[#666666] placeholder-[#666666] focus:border-[#ff6700] focus:outline-none"
              />
              <p className="text-xs text-[#666666] mt-1">An OTP will be sent to this number for verification</p>
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-[#1a1a1a] mb-2">
                Full Name on PAN Card <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                placeholder="Enter full name"
                className="w-full p-3 border border-[#999999] rounded text-[#1a1a1a] placeholder-[#666666] focus:border-[#ff6700] focus:outline-none"
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-sm font-medium text-[#1a1a1a] mb-2">
                Date of Birth (DD/MM/YYYY) on PAN <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                placeholder="Enter date of birth"
                className="w-full p-3 border border-[#999999] rounded text-[#1a1a1a] placeholder-[#666666] focus:border-[#ff6700] focus:outline-none"
              />
            </div>

            {/* Nearest Branch */}
            <div>
              <label className="block text-sm font-medium text-[#1a1a1a] mb-2">
                Nearest Gold Loan Branch <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center justify-between p-3 border border-[#999999] rounded bg-white">
                <span className="text-[#1a1a1a]">{formData.branch}</span>
                <button className="text-[#ff6700] font-medium text-sm hover:underline">
                  Change
                </button>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                checked={formData.acceptTerms}
                onChange={(e) => handleInputChange('acceptTerms', e.target.checked)}
                className="mt-1 w-5 h-5 border border-[#4d4d4d] rounded accent-[#ff6700]"
              />
              <label htmlFor="terms" className="text-sm text-[#1a1a1a] leading-relaxed">
                I have read, understood, and hereby accept the{' '}
                <span className="text-[#ff6700] font-medium hover:underline cursor-pointer">
                  Terms and Conditions
                </span>{' '}
                of Bajaj Finance Ltd.
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col items-center gap-2 pt-4">
              <button className="w-full md:w-[400px] bg-gradient-to-r from-[#ff6700] to-[#ff8900] text-white font-medium text-sm uppercase py-3 px-6 rounded-full hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2">
                <span>SUBMIT APPLICATION</span>
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </button>
              
              <p className="text-xs text-[#666666] text-center max-w-md">
                <span className="text-[#ff6700] font-medium hover:underline cursor-pointer">Click here</span>{' '}
                to know more about our Fair Practice Code
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}