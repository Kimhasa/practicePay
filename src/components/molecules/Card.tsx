import React from 'react';
import { Text, Button } from '../atoms';

interface CardProps {
  title: string;
  content: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  buttonText,
  onButtonClick,
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 border border-gray-200 ${className}`}>
      <Text variant="h3" className="mb-3">
        {title}
      </Text>
      
      <Text variant="body" color="secondary" className="mb-4">
        {content}
      </Text>
      
      {buttonText && onButtonClick && (
        <Button onClick={onButtonClick} size="sm">
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default Card; 