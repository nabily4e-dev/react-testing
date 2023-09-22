const Login = () => {
  return (
    <div className="container">
      <form>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button
          type="submit"
          value="Login"
          onClick={(e) => {
            e.preventDefault();
            alert("Login button clicked!");
          }}
        />
      </form>
    </div>
  );
};

export default Login;
