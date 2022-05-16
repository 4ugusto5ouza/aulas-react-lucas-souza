import { useNavigate } from "react-router-dom";
export const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("pagina-inicial");
  };
  
  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleClick}>Página Inicial</button>
    </div>
  );
};
