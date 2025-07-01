import React from 'react';
import { Input, Text } from '../atoms';

interface FormFieldProps {
  label: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  className?: string;
  id?: string;
  name?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
  className = '',
  id,
  name
}) => {
  const fieldId = id || name || label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={`w-full ${className}`}>
      <label htmlFor={fieldId} className="block mb-2">
        <Text variant="body" className="font-medium">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </Text>
      </label>
      
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        id={fieldId}
        name={name}
        className={error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}
      />
      
      {error && (
        <Text variant="caption" color="danger" className="mt-1">
          {error}
        </Text>
      )}
    </div>
  );
};

export default FormField; 