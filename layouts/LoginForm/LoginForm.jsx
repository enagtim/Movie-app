import Title from "../../components/Title/Title";
import styles from "./LoginForm.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { UserContext } from "../../src/сontext/user.context";
import { useContext, useState } from "react";

function LoginForm() {
  const { login } = useContext(UserContext);
  const [inputValue, setInputValue] = useState("");

  const changeInput = (event) => {
    setInputValue(event.target.value);
  };

  const formSubmit = (event) => {
    event.preventDefault();
    login(inputValue);
    setInputValue("");
  };
  return (
    <form className={styles["form"]} onSubmit={formSubmit}>
      <Title title="Log in" />
      <Input
        IconLeft={true}
        IconRight={true}
        type="text"
        name="name"
        value={inputValue}
        onChange={changeInput}
        placeholder="Enter your name"
        autoComplete="off"
      />
      <Button onClick={login} text="Log in profile" />
    </form>
  );
}
export default LoginForm;
