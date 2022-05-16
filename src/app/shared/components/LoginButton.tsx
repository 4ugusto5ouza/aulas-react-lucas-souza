import React, { ReactNode } from "react";

interface ILoginButton {
  children: ReactNode;
  onClick?: () => void;
}

const LoginButton: React.FC<ILoginButton> = ({ children, onClick }) => {
  return (
    <button
      onClick={() => {
        console.log("Foi para login");
      }}
    >
      {children}
    </button>
  );
};

export { LoginButton };
