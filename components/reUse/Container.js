import React from "react";

const Container = ({ children, className }) => {
  return (
    <div
      className={` container mob:max-w-full px-4 tab:px-7 laptop:px-16 desktop:px-40 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
