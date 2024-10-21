'use client';

import { createContext, useState } from 'react';

interface ModalProductContextData {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

interface ModalProductProviderProps {
    children: React.ReactNode;
}

export const ModalProductContext = createContext({} as ModalProductContextData);

export const ModalProductProvider: React.FC<ModalProductProviderProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <ModalProductContext.Provider value={{isOpen, setIsOpen}}>
            {children}
        </ModalProductContext.Provider>
    );
};