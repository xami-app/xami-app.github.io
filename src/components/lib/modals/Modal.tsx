import { useEffect } from 'react';
import { FiX } from 'react-icons/fi';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = ''; 
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleBackdropClick = () => {
        onClose();
    };

    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose();
        }
    };

    return (
        <div
            onClick={handleBackdropClick}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
        >
            <div
                onClick={handleContentClick}
                className="bg-zinc-800 p-6 rounded-xl shadow-xl w-full max-w-2xl text-white relative"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white hover:text-cyan-400 transition"
                    aria-label="Close modal"
                >
                    <FiX size={24} />
                </button>
                {children}
            </div>
        </div>
    );
};
