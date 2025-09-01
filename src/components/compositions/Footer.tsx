'use client';

import { useState } from 'react';

interface FooterDropdownProps {
  direction?: "Down" | "Up";
}

function FooterDropdown({ direction = "Down" }: FooterDropdownProps) {
  if (direction === "Up") {
    return (
      <div className="relative w-[18px] h-[18px]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg className="w-3 h-3 rotate-180 text-white" viewBox="0 0 12 12" fill="none">
            <path d="M2 4.5L6 8.5L10 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    );
  }
  
  return (
    <div className="relative w-[18px] h-[18px]">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
          <path d="M2 4.5L6 8.5L10 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}

interface FooterSectionProps {
  title: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  showBorder?: boolean;
}

function FooterSection({ title, children, isOpen = false, onToggle, showBorder = true }: FooterSectionProps) {
  return (
    <div className={`w-full ${showBorder ? 'border-b border-[#4a6784]' : ''}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3 text-left"
      >
        <h3 className="text-white font-medium text-sm font-rubik leading-[18px]">{title}</h3>
        <FooterDropdown direction={isOpen ? "Up" : "Down"} />
      </button>
      
      {isOpen && children && (
        <div className="px-4 pb-3">
          {children}
        </div>
      )}
    </div>
  );
}

export default function Footer() {
  const [openSections, setOpenSections] = useState<{[key: string]: boolean}>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy w-full">
      {/* Mobile Layout */}
      <div className="md:hidden">
        {/* Back to Top */}
        <button 
          onClick={scrollToTop}
          className="w-full bg-navy flex items-center justify-center gap-1.5 px-4 py-3 border-b border-[#4a6784]"
        >
          <FooterDropdown direction="Up" />
          <span className="text-white font-normal text-sm font-rubik leading-5">Top of Page</span>
        </button>

        {/* Collapsible Sections */}
        <FooterSection
          title="Application Forms"
          isOpen={openSections.applicationForms}
          onToggle={() => toggleSection('applicationForms')}
        >
          <div className="space-y-2">
            <a href="#" className="block text-white text-xs opacity-80">Loan Application Form</a>
            <a href="#" className="block text-white text-xs opacity-80">EMI Card Application</a>
            <a href="#" className="block text-white text-xs opacity-80">Insurance Forms</a>
          </div>
        </FooterSection>

        <FooterSection
          title="Products Portfolio"
          isOpen={openSections.productsPortfolio}
          onToggle={() => toggleSection('productsPortfolio')}
        >
          <div className="space-y-2">
            <a href="#" className="block text-white text-xs opacity-80">Personal Loans</a>
            <a href="#" className="block text-white text-xs opacity-80">Business Loans</a>
            <a href="#" className="block text-white text-xs opacity-80">Home Loans</a>
            <a href="#" className="block text-white text-xs opacity-80">Car Loans</a>
          </div>
        </FooterSection>

        <FooterSection
          title="Calculators"
          isOpen={openSections.calculators}
          onToggle={() => toggleSection('calculators')}
        >
          <div className="space-y-2">
            <a href="#" className="block text-white text-xs opacity-80">EMI Calculator</a>
            <a href="#" className="block text-white text-xs opacity-80">Loan Calculator</a>
            <a href="#" className="block text-white text-xs opacity-80">SIP Calculator</a>
          </div>
        </FooterSection>

        <FooterSection
          title="Legal"
          isOpen={openSections.legal}
          onToggle={() => toggleSection('legal')}
        >
          <div className="space-y-2">
            <a href="#" className="block text-white text-xs opacity-80">Terms & Conditions</a>
            <a href="#" className="block text-white text-xs opacity-80">Privacy Policy</a>
            <a href="#" className="block text-white text-xs opacity-80">Fair Practice Code</a>
          </div>
        </FooterSection>

        <FooterSection
          title="Reach Us"
          isOpen={openSections.reachUs}
          onToggle={() => toggleSection('reachUs')}
          showBorder={false}
        >
          <div className="space-y-2">
            <a href="#" className="block text-white text-xs opacity-80">Contact Us</a>
            <a href="#" className="block text-white text-xs opacity-80">Customer Care</a>
            <a href="#" className="block text-white text-xs opacity-80">Branch Locator</a>
          </div>
        </FooterSection>

        {/* Company Information */}
        <div className="px-4 py-4 space-y-6">
          {/* Corporate Office and Registered Office */}
          <div className="space-y-4">
            <div>
              <h4 className="text-white font-medium text-sm font-rubik leading-[18px] mb-2">Corporate Office</h4>
              <p className="text-white font-normal text-[10px] font-rubik leading-normal">
                Bajaj Finserv Limited<br />
                6th Floor Bajaj Finserv Corporate Office, Off Pune-Ahmednagar Road, Viman Nagar, Pune - 411014<br />
                Maharashtra, India
              </p>
            </div>

            <div>
              <h4 className="text-white font-medium text-sm font-rubik leading-[18px] mb-2">Registered Office</h4>
              <p className="text-white font-normal text-[10px] font-rubik leading-normal">
                Bajaj Finance Limited<br />
                Akrudi, Pune - 411035<br />
                Maharashtra, India<br />
                Email ID: investors.service@bajajfinserv.in
              </p>
            </div>
          </div>

          {/* Legal Information */}
          <div className="space-y-3">
            <div>
              <h4 className="text-white font-medium text-sm font-rubik leading-normal mb-1">Corporate Identity Number (CIN)</h4>
              <p className="text-white font-normal text-[10px] font-rubik leading-normal">L65910MH1987PLC042961</p>
            </div>

            <div>
              <h4 className="text-white font-medium text-sm font-rubik leading-normal mb-1">IRDAI Corporate Agency Registration Number</h4>
              <p className="text-white font-normal text-[10px] font-rubik leading-normal">CA0101 (Valid till 31-Mar-2025)</p>
            </div>

            <div>
              <h4 className="text-white font-medium text-sm font-rubik leading-normal mb-1">URN</h4>
              <p className="text-white font-normal text-[10px] font-rubik leading-normal">WEB/BFL/22-23/3/V1</p>
            </div>
          </div>

          {/* Our Companies */}
          <div>
            <h4 className="text-white font-medium text-sm font-rubik leading-[18px] mb-3">Our Companies</h4>
            <div className="space-y-0.5">
              <p className="text-white font-normal text-[10px] font-rubik leading-normal h-4">Bajaj Finserv Limited</p>
              <p className="text-white font-normal text-[10px] font-rubik leading-normal h-4">Bajaj Finance Limited</p>
              <p className="text-white font-normal text-[10px] font-rubik leading-normal h-4">Bajaj Allianz General Insurance</p>
              <p className="text-white font-normal text-[10px] font-rubik leading-normal h-4">Bajaj Allianz Life Insurance</p>
              <p className="text-white font-normal text-[10px] font-rubik leading-normal h-4">Bajaj Finserv Direct Limited</p>
              <p className="text-white font-normal text-[10px] font-rubik leading-normal h-4">Bajaj Housing Finance Limited</p>
              <p className="text-white font-normal text-[10px] font-rubik leading-normal h-4">Bajaj Financial Securities</p>
              <p className="text-white font-normal text-[10px] font-rubik leading-normal h-4">Bajaj Finserv Health Ltd</p>
            </div>
          </div>

          {/* Download App */}
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-6">
              <div className="w-[38px] h-[38px] flex items-center justify-center">
                <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                  <path d="M4 8V24C4 25.1 4.9 26 6 26H26C27.1 26 28 25.1 28 24V8C28 6.9 27.1 6 26 6H6C4.9 6 4 6.9 4 8ZM16 12.5C17.4 12.5 18.5 13.6 18.5 15S17.4 17.5 16 17.5S13.5 16.4 13.5 15S14.6 12.5 16 12.5ZM20 21H12V20C12 18.7 14.7 18 16 18S20 18.7 20 20V21Z" fill="#4CAF50"/>
                </svg>
              </div>
              <div className="w-[38px] h-[38px] flex items-center justify-center">
                <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                  <path d="M16.5 3C12.4 3 9.1 6.3 9.1 10.4C9.1 11.9 9.6 13.3 10.4 14.4L16.5 25L22.6 14.4C23.4 13.3 23.9 11.9 23.9 10.4C23.9 6.3 20.6 3 16.5 3ZM16.5 13C15.1 13 14 11.9 14 10.5S15.1 8 16.5 8S19 9.1 19 10.5S17.9 13 16.5 13Z" fill="white"/>
                </svg>
              </div>
            </div>
            <p className="text-white font-medium text-xs font-rubik leading-normal">Download App</p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-white font-medium text-xs font-rubik leading-4">© 2023 Bajaj Finance Limited. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Back to Top */}
          <button 
            onClick={scrollToTop}
            className="w-full flex items-center justify-center gap-1.5 py-4 border-b border-[#4a6784] mb-8"
          >
            <FooterDropdown direction="Up" />
            <span className="text-white font-normal text-sm font-rubik leading-5">Top of Page</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Corporate Office */}
            <div>
              <h3 className="text-white font-medium text-sm font-rubik leading-[18px] mb-4">Corporate Office</h3>
              <p className="text-white font-normal text-[10px] font-rubik leading-normal mb-6">
                Bajaj Finserv Limited<br />
                6th Floor Bajaj Finserv Corporate Office, Off Pune-Ahmednagar Road, Viman Nagar, Pune - 411014<br />
                Maharashtra, India
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium text-sm font-rubik leading-normal mb-1">Corporate Identity Number (CIN)</h4>
                  <p className="text-white font-normal text-[10px] font-rubik leading-normal">L65910MH1987PLC042961</p>
                </div>

                <div>
                  <h4 className="text-white font-medium text-sm font-rubik leading-normal mb-1">IRDAI Corporate Agency Registration Number</h4>
                  <p className="text-white font-normal text-[10px] font-rubik leading-normal">CA0101 (Valid till 31-Mar-2025)</p>
                </div>

                <div>
                  <h4 className="text-white font-medium text-sm font-rubik leading-normal mb-1">URN</h4>
                  <p className="text-white font-normal text-[10px] font-rubik leading-normal">WEB/BFL/22-23/3/V1</p>
                </div>
              </div>
            </div>

            {/* Registered Office */}
            <div>
              <h3 className="text-white font-medium text-sm font-rubik leading-[18px] mb-4">Registered Office</h3>
              <p className="text-white font-normal text-[10px] font-rubik leading-normal mb-6">
                Bajaj Finance Limited<br />
                Akrudi, Pune - 411035<br />
                Maharashtra, India<br />
                Email ID: investors.service@bajajfinserv.in
              </p>
            </div>

            {/* Our Companies */}
            <div>
              <h3 className="text-white font-medium text-sm font-rubik leading-[18px] mb-4">Our Companies</h3>
              <div className="space-y-0.5">
                <p className="text-white font-normal text-[10px] font-rubik leading-normal h-4">Bajaj Finserv Limited</p>
                <p className="text-white font-normal text-[10px] font-rubik leading-normal h-4">Bajaj Finance Limited</p>
                <p className="text-white font-normal text-[10px] font-rubik leading-normal h-4">Bajaj Allianz General Insurance</p>
                <p className="text-white font-normal text-[10px] font-rubik leading-normal h-4">Bajaj Allianz Life Insurance</p>
                <p className="text-white font-normal text-[10px] font-rubik leading-normal h-4">Bajaj Finserv Direct Limited</p>
                <p className="text-white font-normal text-[10px] font-rubik leading-normal h-4">Bajaj Housing Finance Limited</p>
                <p className="text-white font-normal text-[10px] font-rubik leading-normal h-4">Bajaj Financial Securities</p>
                <p className="text-white font-normal text-[10px] font-rubik leading-normal h-4">Bajaj Finserv Health Ltd</p>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-white font-medium text-sm font-rubik leading-[18px] mb-4">Quick Links</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-white font-medium text-xs font-rubik mb-2">Application Forms</h4>
                  <div className="space-y-1">
                    <a href="#" className="block text-white text-[10px] opacity-80 hover:opacity-100">Loan Application Form</a>
                    <a href="#" className="block text-white text-[10px] opacity-80 hover:opacity-100">EMI Card Application</a>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-medium text-xs font-rubik mb-2">Calculators</h4>
                  <div className="space-y-1">
                    <a href="#" className="block text-white text-[10px] opacity-80 hover:opacity-100">EMI Calculator</a>
                    <a href="#" className="block text-white text-[10px] opacity-80 hover:opacity-100">Loan Calculator</a>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-medium text-xs font-rubik mb-2">Legal</h4>
                  <div className="space-y-1">
                    <a href="#" className="block text-white text-[10px] opacity-80 hover:opacity-100">Terms & Conditions</a>
                    <a href="#" className="block text-white text-[10px] opacity-80 hover:opacity-100">Privacy Policy</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Download App and Copyright */}
          <div className="text-center mt-12 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-6">
                <div className="w-[38px] h-[38px] flex items-center justify-center">
                  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                    <path d="M4 8V24C4 25.1 4.9 26 6 26H26C27.1 26 28 25.1 28 24V8C28 6.9 27.1 6 26 6H6C4.9 6 4 6.9 4 8ZM16 12.5C17.4 12.5 18.5 13.6 18.5 15S17.4 17.5 16 17.5S13.5 16.4 13.5 15S14.6 12.5 16 12.5ZM20 21H12V20C12 18.7 14.7 18 16 18S20 18.7 20 20V21Z" fill="#4CAF50"/>
                  </svg>
                </div>
                <div className="w-[38px] h-[38px] flex items-center justify-center">
                  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                    <path d="M16.5 3C12.4 3 9.1 6.3 9.1 10.4C9.1 11.9 9.6 13.3 10.4 14.4L16.5 25L22.6 14.4C23.4 13.3 23.9 11.9 23.9 10.4C23.9 6.3 20.6 3 16.5 3ZM16.5 13C15.1 13 14 11.9 14 10.5S15.1 8 16.5 8S19 9.1 19 10.5S17.9 13 16.5 13Z" fill="white"/>
                  </svg>
                </div>
              </div>
              <p className="text-white font-medium text-xs font-rubik leading-normal">Download App</p>
            </div>

            <p className="text-white font-medium text-xs font-rubik leading-4">© 2023 Bajaj Finance Limited. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}