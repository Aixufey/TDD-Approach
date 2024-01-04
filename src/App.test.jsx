import { render, screen } from "@testing-library/react";
import { expect } from "chai";
import App from "./App";
import { describe } from "vitest";
import kebabCaseToTitleCase from "./helpers";

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


/**
 * Describe will group tests together for functional testing
 * 
 */
describe("kebabCaseToTitleCase", () => {
    test("works for no hyphens", () => {
        expect(kebabCaseToTitleCase("red")).toBe("Red");
    })
    test("works for one hyphen", () => {
        expect(kebabCaseToTitleCase("midnight-blue")).toBe("Midnight Blue");
    })
    test("works for multiple hyphens", () => {
        expect(kebabCaseToTitleCase("medium-violet-red")).toBe("Medium Violet Red");
     })
})