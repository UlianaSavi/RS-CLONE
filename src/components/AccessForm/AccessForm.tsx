import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  placeholder: string;
}

export function AccessForm({ children, placeholder }: ModalProps) {
  return (
    <div className="access">
      <form>
        <input className="input" placeholder={placeholder} type="phone" />
        {children}
      </form>
    </div>
  );
}
