import React, { createContext, ReactNode, useCallback } from "react";

interface IUsuarioLogadoData {
  nome: string;
  logout?: () => void;
  children?: ReactNode;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoData>(
  {} as IUsuarioLogadoData
);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoData> = ({
  nome,
  children,
}) => {

  const handleLogout = useCallback(() => {
    console.log("Executou logout");
  }, []);

  return (
    <UsuarioLogadoContext.Provider value={{ nome, logout: handleLogout }}>
      {children}
    </UsuarioLogadoContext.Provider>
  );
};
