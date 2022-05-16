import { useContext } from "react";
import { Link } from "react-router-dom";
import { UsuarioLogadoContext } from "../../shared/contexts";

export const Dashboard = () => {
  const {nome} = useContext(UsuarioLogadoContext);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{nome}</p>
      <Link to={"/entrar"}>Login</Link>
    </div>
  );
};
