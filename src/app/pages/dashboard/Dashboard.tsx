import { Link } from "react-router-dom";
import { LogoutButton } from "../../shared/components";
import { useUsuarioLogado } from "../../shared/hooks";

export const Dashboard = () => {
  const { nome, logout } = useUsuarioLogado();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>
        <span>Context: </span>
        {nome}
      </p>
      <Link to={"/entrar"}>Login</Link>
      <LogoutButton onClick={logout}>Logout</LogoutButton>
    </div>
  );
};
