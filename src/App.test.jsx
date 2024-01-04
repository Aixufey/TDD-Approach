import { render, screen } from "@testing-library/react";
import { expect } from "chai";
import App from "./App";

test("app contains correct heading", () => {

    // Create simulated DOM via render
    render(<App />);

    // Access via screen
    const headingEle = screen.getByText(/lEaRn ReAcT/i);
    // General DOM assertion
    const headingEleCaseSensitive = screen.getByText('Learn React');
    // DOM specific assertions
    expect(headingEle).toBeInTheDocument();
    expect(headingEleCaseSensitive).toBeInTheDocument();

});
