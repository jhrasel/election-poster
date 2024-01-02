import React from "react";

const BUList = ({ children, className }) => {
  return (
    <ul>
      <li className={className}>{children}</li>
    </ul>
  );
};

export default BUList;
