import Button from "./button";
import Input from "./input";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Registration = () => {
  const [userName, serUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (userName && password && password === confirmPassword) {
      localStorage.setItem("userName", userName);
      history.push("./dashboard");
    }
  };

  const onInputChange = (e) => {
    serUserName(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onLoginClick = () => {
    history.push("/");
  }

  return (
    <div className="registration-container">
      <form onSubmit={onFormSubmit} className="registration-form">
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

        <Input
          label="Confirm Password"
          placeholder="Please confirm password"
          type="password"
          value={confirmPassword}
          onChange={onConfirmPasswordChange}
        />
        <Button className="btn primary" type="submit" label="Register" />
        <Button className="btn secondary" label="Login" onClick={onLoginClick} />
      </form>
    </div>
  );
};

export default Registration;
