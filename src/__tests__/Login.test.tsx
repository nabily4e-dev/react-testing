import Login from "@components/Login";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Login component", () => {
  it("should render the form with username, password and login button", () => {
    render(<Login />);
    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  it("should alert when login button is clicked", () => {
    render(<Login />);
    window.alert = jest.fn();
    fireEvent.click(screen.getByText("Login"));
    expect(window.alert).toHaveBeenCalledWith("Login button clicked!");
  });
});
