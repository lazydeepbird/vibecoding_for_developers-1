"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalContextType {
    openModal: (content: ReactNode) => void;
    closeModal: () => void;
    isOpen: boolean;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};

interface ModalProviderProps {
    children: ReactNode;
}

export default function ModalProvider({ children }: ModalProviderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState<ReactNode | null>(null);
    const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

    // 클라이언트 사이드에서만 document에 접근
    useEffect(() => {
        if (typeof window !== "undefined") {
            setPortalElement(document.body);
        }
    }, []);

    const openModal = (content: ReactNode) => {
        setModalContent(content);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setModalContent(null);
    };

    return (
        <ModalContext.Provider value={{ openModal, closeModal, isOpen }}>
            {children}
            {isOpen && portalElement && createPortal(
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative bg-white dark:bg-gray-800 rounded-lg p-4 max-w-md w-full">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            닫기
                        </button>
                        {modalContent}
                    </div>
                </div>,
                portalElement
            )}
        </ModalContext.Provider>
    );
}
