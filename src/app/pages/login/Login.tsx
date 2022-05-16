import { FormEvent, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (window.confirm("Você concorda com as políticas de uso?")) {
      console.log("Concordou com as políticas");
      setEmail("");
      setSenha("");
    } else {
      navigate("/pagina-inicial");
    }
  }, []);

  const emailLength = useMemo(() => {
    return email.length;
  }, [email]);

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
        <p>Qtde caractéres e-mail: {emailLength}</p>
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
