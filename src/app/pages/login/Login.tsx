import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("pagina-inicial");
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(email, senha);
    navigate("pagina-inicial");
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>E-mail:</span>
          <input
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </label>
        <button>Entrar</button>
      </form>
      <button onClick={handleClick}>Página Inicial</button>
    </div>
  );
};
