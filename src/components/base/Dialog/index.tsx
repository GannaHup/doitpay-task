import { useEffect } from "react";
import { createPortal } from "react-dom";
import { cn } from "@libs/classnames";
import useClickOutside from "@hooks/useClickOutside";
import type { DialogProps } from "./Dialog.types";

const Dialog = ({
  isOpen,
  isLoading,
  children,
  closeOnOverlay = true,
  className,
  onClose,
}: DialogProps) => {
  const handleClose = () => {
    if (closeOnOverlay && !isLoading) return onClose();
  };

  const dropdownRef = useClickOutside(handleClose);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div
        ref={dropdownRef}
        className={cn("w-lg rounded-lg bg-white shadow-xl", className)}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Dialog;
