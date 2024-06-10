import React, { createContext, useState } from 'react';

export const BamContext = createContext();

export const BamProvider = ({ children }) => {
  const [location, setLocation] = useState('');
  const [dates, setDates] = useState({ start: '', end: '' });

  return (
    <BamContext.Provider value={{ location, setLocation, dates, setDates }}>
      {children}
    </BamContext.Provider>
  );
};