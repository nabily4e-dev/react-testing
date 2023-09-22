import App from "@/App";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

test("renders the app title", () => {
  render(<App />);
  const appTitle = screen.getByRole("heading", {
    name: "React, Vite and TypeScript Login Form Example test",
  });
  expect(appTitle).toBeInTheDocument();
});

// Checking that  the Login component is rendered in the App component
test("renders the login component", () => {
  render(<App />);
  const loginComponent = screen.getByTestId("login-component");
  expect(loginComponent).toBeInTheDocument();
});
