import React from 'react';

interface TextProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption';
  color?: 'primary' | 'secondary' | 'danger' | 'success';
  className?: string;
}

const Text: React.FC<TextProps> = ({
  children,
  variant = 'body',
  color = 'primary',
  className = ''
}) => {
  const variantClasses = {
    h1: 'text-3xl font-bold',
    h2: 'text-2xl font-semibold',
    h3: 'text-xl font-medium',
    body: 'text-base',
    caption: 'text-sm'
  };
  
  const colorClasses = {
    primary: 'text-gray-900',
    secondary: 'text-gray-600',
    danger: 'text-red-600',
    success: 'text-green-600'
  };
  
  const classes = `${variantClasses[variant]} ${colorClasses[color]} ${className}`;
  
  if (variant === 'h1') {
    return <h1 className={classes}>{children}</h1>;
  }
  if (variant === 'h2') {
    return <h2 className={classes}>{children}</h2>;
  }
  if (variant === 'h3') {
    return <h3 className={classes}>{children}</h3>;
  }
  
  return <p className={classes}>{children}</p>;
};

export default Text; 