import './FormInput.scss';

interface FormInputProps {
  type: string,
  id: string,
  label: string,
  value: string,
}

function FormInput({
  type, id, label, value,
}: FormInputProps) {
  return (
    <div className="form-input__wrapper">
      <input type={type} className="form-input" id={id} value={value} />
      <label htmlFor={id} className="form-input__label">{label}</label>
    </div>
  );
}

export default FormInput;
