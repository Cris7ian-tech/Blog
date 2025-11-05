import React from 'react';

interface CustomButtonProps extends React.ComponentPropsWithoutRef<'p'> {
  children: React.ReactNode;
  className?: string;
};

const Paragraph : React.FC<CustomButtonProps> = ({children, className}) => {
    
  return (
    <p className={`text-lg text-neutral-600 mb-4 leading-5 ${className}`}>
      {children}
    </p>
);
};

  export default Paragraph;