'use client';

import React from 'react';

interface AllProvidersProps {
  children: React.ReactNode;
}

export function AllProviders({ children }: AllProvidersProps) {
  return (
    <>
      {children}
    </>
  );
}

export default AllProviders;