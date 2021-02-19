import { useState, useEffect } from "react";
import Button from "./button";
import Input from "./input";
import { useHistory } from "react-router-dom";
import credentials from "../credentials.json";

const Login = () => {
  const [userName, serUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("userName")) {
      history.push("/dashboard");
    } else {
      history.push("/");
    }
  }, [localStorage.getItem("userName")]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (credentials[userName]?.password === password) {
      localStorage.setItem("userName", userName);
      history.push("/dashboard");
    }
  };

  const onInputChange = (e) => {
    serUserName(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onRegisterButtonClick = () => {
    history.push('/registration');
  }

  return (
    <div className="login-container">
      <form onSubmit={onFormSubmit} className="login-form">
        <Input
          label="Username"
          placeholder="Please enter your username"
          type="text"
          value={userName}
          onChange={onInputChange}
        />
        <Input
          label="Password"
          placeholder="Please password"
          type="password"
          value={password}
          onChange={onPasswordChange}
        />
        <Button className="btn primary" type="submit" label="Login" />
        <Button label="Register" className="btn secondary" onClick={onRegisterButtonClick} />
      </form>
    </div>
  );
};

export default Login;
