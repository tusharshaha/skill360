import React from 'react';

const Badge = ({ className, children }) => {
  return (
    <span
      className={`${className} rounded-full uppercase px-10 py-2 font-semibold text-sm sm:text-base`}
    >
      {children}
    </span>
  );
};

export default Badge;
