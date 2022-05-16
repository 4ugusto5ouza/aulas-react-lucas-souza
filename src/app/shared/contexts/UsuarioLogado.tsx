import React, { createContext, ReactNode } from "react";

interface IUsuarioLogadoData {
  nome: string;
  children?: ReactNode;
}

const UsuarioLogado = createContext<IUsuarioLogadoData>(
  {} as IUsuarioLogadoData
);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoData> = ({
  nome,
  children,
}) => {
  return (
    <UsuarioLogado.Provider value={{ nome }}>{children}</UsuarioLogado.Provider>
  );
};
