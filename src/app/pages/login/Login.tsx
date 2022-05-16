import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogoutButton } from "../../shared/components";
import { useUsuarioLogado } from "../../shared/hooks";
import { LoginInput } from "./components/LoginInput";
import { LoginSubmitBtn } from "./components/LoginSubmitBtn";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const { nome, logout } = useUsuarioLogado();

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
      <p>
        <span>Context: </span>
        {nome}
      </p>
      <form onSubmit={handleSubmit}>
        <p>Qtde caractéres e-mail: {emailLength}</p>
        <LoginInput
          label="Email: "
          type="email"
          value={email}
          required={true}
          onChange={(newValue) => setEmail(newValue)}
          //onPressEnter={() => inputSenhaRef.current?.focus()}
        />
        <LoginInput
          label="Senha: "
          type="password"
          value={senha}
          required={true}
          onChange={(newValue) => setSenha(newValue)}
        />
        <LoginSubmitBtn type="submit">Entrar</LoginSubmitBtn>
        <LoginSubmitBtn type="submit">Cadastrar</LoginSubmitBtn>
      </form>
      <button onClick={handleClick}>Página Inicial</button>
      <LogoutButton onClick={logout}>Logout</LogoutButton>
    </div>
  );
};
