'use client';

import React, { createContext, useState } from 'react';

interface ModalContextData {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const ModalContext = createContext({} as ModalContextData);

interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
};
