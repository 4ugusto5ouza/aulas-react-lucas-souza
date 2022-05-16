import { useContext } from "react";
import { UsuarioLogadoContext } from "../contexts";

const useUsuarioLogado = () => {
  return useContext(UsuarioLogadoContext);
};

export { useUsuarioLogado };
