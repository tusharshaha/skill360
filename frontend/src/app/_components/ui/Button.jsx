'use client';

import React from 'react';

const Button = ({ children, className, onClick }) => {
  return (
    <button type='submit' onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
