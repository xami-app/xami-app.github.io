import React, { useEffect, useRef } from 'react';

interface OffcanvasProps {
  isOpen: boolean;
  onClose: () => void;
  breakpoint?: number; // px - when to auto-close (e.g., 1024 for `lg`)
  children: React.ReactNode;
}

const Offcanvas: React.FC<OffcanvasProps> = ({
  isOpen,
  onClose,
  breakpoint = 1024,
  children,
}) => {
  const panelRef = useRef<HTMLDivElement>(null);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  // Close on resize to larger than breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= breakpoint) {
        onClose();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [onClose, breakpoint]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-40">
      <aside
        ref={panelRef}
        className="absolute top-0 right-0 w-2/4 h-full bg-zinc-800 p-4 overflow-y-auto"
      >
        {children}
      </aside>
    </div>
  );
};

export default Offcanvas;
