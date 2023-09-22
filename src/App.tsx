import "@App.css";
import Login from "./components/Login";

function App() {
  return (
    <>
      <h1>React, Vite and TypeScript Login Form Example test</h1>
      <div className="App">
        <Login data-testid="login-component" />
      </div>
    </>
  );
}

export default App;
