/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './FormInput.scss';

interface FormInputProps {
  type: string;
  id: string;
  label: string;
  value: string;
  setValue?: (value: string) => void;
}

function FormInput({
  type, id, label, value, setValue,
}: FormInputProps) {
  const [defaultValue, setdefaultValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setdefaultValue(e.target.value);
  };

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
      />
      <label htmlFor={id} className="form-input__label">{label}</label>
    </div>
  );
}

export default FormInput;
