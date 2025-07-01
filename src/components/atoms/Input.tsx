import React from 'react';

interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  id?: string;
  name?: string;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  onKeyPress,
  disabled = false,
  required = false,
  className = '',
  id,
  name
}) => {
  const baseClasses = 'w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500';
  const disabledClasses = disabled ? 'bg-gray-100 cursor-not-allowed' : '';
  
  const classes = `${baseClasses} ${disabledClasses} ${className}`;
  
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      disabled={disabled}
      required={required}
      className={classes}
      id={id}
      name={name}
    />
  );
};

export default Input; 