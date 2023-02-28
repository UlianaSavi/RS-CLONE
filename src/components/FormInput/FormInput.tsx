/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './FormInput.scss';

interface FormInputProps {
  type: string;
  id: string;
  label: string;
  value: string;
  setValue?: (value: string) => void;
  mode?: string;
  pattern?: string;
  required?: boolean;
  title?: string;
}

function FormInput({
  type, id, label, value, setValue, mode, pattern, required, title,
}: FormInputProps) {
  const [defaultValue, setdefaultValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setdefaultValue(e.target.value);
  };

  function lostFocusAfterEnter(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter' && mode === 'edit') {
      (event.target as HTMLInputElement).blur();
    }
  }

  useEffect(() => {
    setValue?.(defaultValue);
  }, [defaultValue]);

  return (
    <div className="form-input__wrapper">
      <input
        type={type}
        className="form-input"
        id={id}
        value={defaultValue}
        onChange={handleChange}
        placeholder=" "
        onKeyDown={(event) => lostFocusAfterEnter(event)}
        pattern={pattern}
        required={required}
        title={title}
      />
      <label htmlFor={id} className="form-input__label">{label}</label>
    </div>
  );
}

export default FormInput;
