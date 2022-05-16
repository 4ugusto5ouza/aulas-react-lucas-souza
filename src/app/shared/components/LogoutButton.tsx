import React, { ReactNode } from "react";

interface ILogoutButton {
  children: ReactNode;
  onClick?: () => void;
}

const LogoutButton: React.FC<ILogoutButton> = ({ children, onClick }) => {
  return <button onClick={onClick && onClick}>{children}</button>;
};

export { LogoutButton };
