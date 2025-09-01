'use client';

import { useState } from 'react';
import BajajLogo from '../ui/BajajLogo';

interface HeaderProps {
  cartCount?: number;
}

export default function Header({ cartCount = 0 }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-navy">
      {/* Mobile System Bar - only visible on mobile */}
      <div className="bg-navy px-2 py-1 md:hidden">
        <div className="flex items-center justify-between">
          <div className="text-white/40 text-sm font-medium font-rubik tracking-wider">9:41</div>
          <div className="flex items-center gap-1">
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white/50 rounded-full"></div>
            </div>
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2 17h20v2H2zm1.15-4.05L4 11.47l.85 1.48L3.5 14.5l1.35 1.55zm5.85.05h8v2H9v-2zm7.21-8.4L17.5 3.5 16.15 5.05 15 3.5l1.35-1.55L17.5.5l1.35 1.55L20.21 5.05zM4.5 9h2v2h-2V9zm13 0h2v2h-2V9z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Top Header - Desktop Layout */}
      <div className="hidden md:block bg-navy pl-6 pr-0 py-3">
        <div className="flex items-center justify-between w-full">
          {/* Logo Section */}
          <div className="flex gap-4 items-center">
            <BajajLogo />
          </div>

          {/* Search Section */}
          <div className="flex-1 mx-8">
            <div className="bg-white rounded flex items-center h-11 px-4">
              <input 
                type="text"
                placeholder="Search for Loans, Investment, Insurance, Payments"
                className="flex-1 text-sm text-gray-600 bg-transparent outline-none font-rubik"
              />
              <div className="bg-tangerine-light p-2 rounded ml-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
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
            <div className="text-center mt-2">
              <span className="text-xs text-navy-light font-rubik">BAJAJ FINANCE LIMITED</span>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="flex flex-col items-center text-navy-light hover:text-white">
              <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              <span className="text-xs">Sign In</span>
            </button>
            
            <button className="flex flex-col items-center text-navy-light hover:text-white">
              <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
              </svg>
              <span className="text-xs">EMI Card</span>
            </button>
            
            <button className="flex flex-col items-center text-navy-light hover:text-white">
              <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
              </svg>
              <span className="text-xs">Notifications</span>
            </button>
            
            <button className="flex flex-col items-center text-navy-light hover:text-white relative">
              <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-tangerine text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
              <span className="text-xs">Cart</span>
            </button>
            
            <button className="flex flex-col items-center text-navy-light hover:text-white">
              <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A3.008 3.008 0 0 0 16.96 6c-.8 0-1.54.37-2.01.97L12 10.5 9.05 6.97C8.58 6.37 7.84 6 7.04 6a3.008 3.008 0 0 0-2.9 2.37L1.5 16H4v6h2v-6h2.5l-.9-2.7L9 12l3 4 3-4 1.4 1.3L15.5 16H18v6h2z"/>
              </svg>
              <span className="text-xs">Partners</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Action Bar */}
      <div className="md:hidden bg-navy px-4 py-1">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <BajajLogo className="scale-75" />
          
          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 text-white text-xs font-rubik">
              <span>Sign in</span>
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                <path d="M3 9l3-3-3-3v6z"/>
              </svg>
            </button>
            
            <button className="text-white">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </button>
            
            <button className="text-white">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
              </svg>
            </button>
            
            <button className="text-white relative">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
              </svg>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden bg-navy px-4 py-2">
        <div className="flex items-center gap-2">
          <button className="text-white">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.42-1.41L7.83 13H20v-2z"/>
            </svg>
          </button>
          
          <div className="flex-1 bg-white rounded flex items-center h-10 px-3">
            <input 
              type="text"
              placeholder="Search for loans"
              className="flex-1 text-sm text-gray-600 bg-transparent outline-none font-rubik"
            />
            <svg className="w-5 h-5 text-gray-400 mr-2" viewBox="0 0 24 24" fill="none">
              <path 
                d="M21 21L16.5 16.5M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            <div className="bg-tangerine-light p-2 rounded">
              <svg className="w-4 h-4 text-tangerine" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Bottom Menu */}
      <div className="hidden md:flex bg-navy-dark h-10 items-center justify-between px-6">
        {/* Menu Items */}
        <div className="flex items-center space-x-6">
          <button 
            className="text-white text-sm hover:text-gray-300 flex items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            Menu
          </button>
          <button className="text-white text-sm hover:text-gray-300 flex items-center">
            Loans 
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </button>
          <button className="text-white text-sm hover:text-gray-300 flex items-center">
            All on EMI
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </button>
          <button className="text-white text-sm hover:text-gray-300 flex items-center">
            Bajaj Mall
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </button>
          <button className="text-white text-sm hover:text-gray-300 flex items-center">
            Cards
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </button>
          <button className="text-white text-sm hover:text-gray-300 flex items-center">
            Investments
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </button>
          <button className="text-white text-sm hover:text-gray-300 flex items-center">
            Insurance
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </button>
          <button className="text-white text-sm hover:text-gray-300 flex items-center">
            Payments
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </button>
          <button className="text-white text-sm hover:text-gray-300 flex items-center">
            Offers
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </button>
          <button className="text-white text-sm hover:text-gray-300 flex items-center">
            Locate Us
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </button>
          <button className="text-white text-sm hover:text-gray-300 flex items-center">
            Services
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-2">
          <button className="bg-black/50 text-white px-2 py-1 rounded text-xs hover:bg-black/70 flex items-center gap-1">
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
              <path d="M9.5 2H2.5C1.67 2 1 2.67 1 3.5v5C1 9.33 1.67 10 2.5 10h7c.83 0 1.5-.67 1.5-1.5v-5C11 2.67 10.33 2 9.5 2z"/>
            </svg>
            Do not call
          </button>
          <button className="bg-black/50 text-white px-2 py-1 rounded text-xs hover:bg-black/70 flex items-center gap-1">
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
              <path d="M10 1H2C1.45 1 1 1.45 1 2v6c0 .55.45 1 1 1h6l2 2V2c0-.55-.45-1-1-1z"/>
            </svg>
            Feedback
          </button>
          <button className="bg-black/50 text-white px-2 py-1 rounded text-xs hover:bg-black/70 flex items-center gap-1">
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
              <path d="M9.5 1.5H2.5C1.67 1.5 1 2.17 1 3v6c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5V3c0-.83-.67-1.5-1.5-1.5z"/>
            </svg>
            Download the app
          </button>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden bg-navy-dark">
        <div className="flex items-center justify-between px-4 py-2">
          <button 
            className="text-white text-sm font-rubik flex items-center gap-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
            Menu
          </button>
          
          {/* Mobile menu buttons can be scrollable or in a dropdown */}
          <div className="flex gap-4 overflow-x-auto">
            <button className="text-white text-xs whitespace-nowrap">Loans</button>
            <button className="text-white text-xs whitespace-nowrap">Cards</button>
            <button className="text-white text-xs whitespace-nowrap">EMI</button>
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="bg-navy-dark border-t border-navy-light/20 px-4 py-2">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <button className="text-white py-2 text-left">Loans</button>
              <button className="text-white py-2 text-left">All on EMI</button>
              <button className="text-white py-2 text-left">Bajaj Mall</button>
              <button className="text-white py-2 text-left">Cards</button>
              <button className="text-white py-2 text-left">Investments</button>
              <button className="text-white py-2 text-left">Insurance</button>
              <button className="text-white py-2 text-left">Payments</button>
              <button className="text-white py-2 text-left">Offers</button>
              <button className="text-white py-2 text-left">Locate Us</button>
              <button className="text-white py-2 text-left">Services</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}