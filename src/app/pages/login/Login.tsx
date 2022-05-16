import {
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { LoginInput } from "./components/LoginInput";

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
        <LoginInput
          label="Email: "
          type="email"
          value={email}
          required={true}
          onChange={(newValue) => setEmail(newValue)}
          onPressEnter={() => inputSenhaRef.current?.focus()}
        />
        <LoginInput
          label="Senha: "
          type="password"
          value={senha}
          required={true}
          onChange={(newValue) => setSenha(newValue)}
        />
        <button>Entrar</button>
      </form>
      <button onClick={handleClick}>Página Inicial</button>
    </div>
  );
};
