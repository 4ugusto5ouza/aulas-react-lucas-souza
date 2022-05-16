import React, { createContext, ReactNode } from "react";

interface IUsuarioLogadoData {
  nome: string;
  children?: ReactNode;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoData>(
  {} as IUsuarioLogadoData
);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoData> = ({
  nome,
  children,
}) => {
  return (
    <UsuarioLogadoContext.Provider value={{ nome }}>
      {children}
    </UsuarioLogadoContext.Provider>
  );
};
