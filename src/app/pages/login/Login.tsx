import {
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const inputSenhaRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (window.confirm("Você concorda com as políticas de uso?")) {
      console.log("Concordou com as políticas");
    } else {
      navigate("/pagina-inicial");
    }
  }, []);

  const emailLength = useMemo(() => {
    return email.length;
  }, [email.length]);

  const handleClick = () => {
    navigate("pagina-inicial");
  };

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      console.log(email, senha);
      navigate("pagina-inicial");
    },
    [email, senha]
  );

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
            onKeyDown={(e) =>
              e.key === "Enter" ? inputSenhaRef.current?.focus() : undefined
            }
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            ref={inputSenhaRef}
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
