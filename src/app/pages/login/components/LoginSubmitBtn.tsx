import React, { ReactNode } from "react";

interface ILoginSubmitBtn {
  type: "button" | "submit" | "reset";
  children: ReactNode;
  onClick?: () => void;
}
const LoginSubmitBtn: React.FC<ILoginSubmitBtn> = ({
  type,
  onClick,
  children,
}) => {
  return (
    <>
      <button type={type}>{children}</button>
    </>
  );
};

export { LoginSubmitBtn };
