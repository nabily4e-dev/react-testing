import { FC } from "react";

interface LoginProps {
  "data-testid"?: string;
}

const Login: FC<LoginProps> = ({ "data-testid": testId }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Login button clicked!");
  };

  return (
    <form name="Login Form" data-testid={testId} onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit" name="Login">Login</button>
    </form>
  );
};

export default Login;