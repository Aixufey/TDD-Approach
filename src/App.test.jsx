import { render, screen } from "@testing-library/react";
import { expect } from "chai";
import App from "./App";

test("app contains correct heading", () => {

    // Create simulated DOM via render
    render(<App />);

    // Access via screen
    const headingEle = screen.getByText(/lEaRn ReAcT/i);

    const headingEleCaseSensitive = screen.getByText('Learn React');
    // Assert
    expect(headingEle).toBeInTheDocument();
    expect(headingEleCaseSensitive).toBeInTheDocument();

});


test("button text is correct", () => {
    render(<App />);

    // General DOM assertion
    const clickMe = screen.getByText(/click me/i);
    expect(clickMe.textContent).toBe("Click me!");

    // DOM specific assertion
    expect(clickMe).toBeInTheDocument();
})