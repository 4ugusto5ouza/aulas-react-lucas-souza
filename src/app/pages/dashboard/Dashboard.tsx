import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { LoginButton, LogoutButton } from "../../shared/components";
import { useUsuarioLogado } from "../../shared/hooks";
import { LoginSubmitBtn } from "../login/components";

export const Dashboard = () => {
  const { nome, logout } = useUsuarioLogado();
  const [lista, setLista] = useState<string[]>([
    "Teste 1",
    "Teste 2",
    "Teste 3",
  ]);

  interface IFormElements extends HTMLFormControlsCollection {
    itemList: HTMLInputElement;
  }

  interface IItemList extends HTMLFormElement {
    readonly elements: IFormElements;
  }

  const handleSubmit: React.FormEventHandler<IItemList> = useCallback(
    (event) => {
      event.preventDefault();
      const newValue = event.currentTarget.elements.itemList.value;
      event.currentTarget.elements.itemList.value = "";
      
      if (newValue.trim().length === 0) return;

      setLista((prevValue) => {
        if (prevValue.includes(newValue)) return prevValue;

        return [...prevValue, newValue];
      });
    },
    []
  );

  return (
    <div>
      <h1>Dashboard</h1>
      <p>
        <span>Context: </span>
        {nome}
      </p>
      <div>
        <h2>Lista</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="itemList">
            Digite um texto:
            <input type="text" id="itemList" />
            <LoginSubmitBtn type="submit">Enviar</LoginSubmitBtn>
          </label>
        </form>
        <ul>
          {lista.map((value, index) => {
            return <li key={index}>{value}</li>;
          })}
        </ul>
      </div>
      <Link to={"/entrar"}>
        <LoginButton>Login</LoginButton>
      </Link>
      <LogoutButton onClick={logout}>Logout</LogoutButton>
    </div>
  );
};
