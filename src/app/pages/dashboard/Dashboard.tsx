import { Link } from "react-router-dom";
import { useUsuarioLogado } from "../../shared/hooks";

export const Dashboard = () => {
  const { nome } = useUsuarioLogado();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>
        <span>Context: </span>
        {nome}
      </p>
      <Link to={"/entrar"}>Login</Link>
    </div>
  );
};
