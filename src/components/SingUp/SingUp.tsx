import React from "react";

interface ModalProps {
  children: React.ReactNode;
  placeholder: string;
}

export const AccessForm = ({ children, placeholder }: ModalProps) => (
  <div className="access">
    <form>
      <input className="input" placeholder={placeholder} type="phone"></input>
      {children}
    </form>
  </div>
);
