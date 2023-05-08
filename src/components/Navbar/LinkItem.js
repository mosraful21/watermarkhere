import React from "react";

const LinkItem = ({ link, children }) => {
  return (
    <li className="nav-item">
      <a className="nav-link" href={link}>
        {children}
      </a>
    </li>
  );
};

export default LinkItem;