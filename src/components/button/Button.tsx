import React from 'react';

interface ButtonProps {
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;

  onClick?: () => void;
}


export function Button({size = 'medium',backgroundColor,label,...props}: ButtonProps){
  return(
    <button
      type="button"
      style={{
        backgroundColor: backgroundColor || '#fff',
        padding: size === 'small' ? '1.5rem' : size === 'medium' ? '2rem' : '3rem',
      }}
      {...props}
    >
      {label}
    </button>
  )
}

