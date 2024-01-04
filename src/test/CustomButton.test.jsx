import { render, screen } from "@testing-library/react";
import { expect } from "chai";
import CustomButton from "../components";
import { logRoles } from "@testing-library/react";

// Test a button behavior workflow
test("button starts with correct color", () => {
    const { container } = render(<CustomButton
        color={"red"}
        value={"Click me!"}
        className={"red"}
    />);
    
    // We can use the container to debug the DOM
    logRoles(container);
    
    const buttonEle = screen.getByRole("button", { name: /click me/i });
    expect(buttonEle).toHaveClass("red");
});

test("button starts with correct text", () => {

});
test("button has correct color after click", () => {

});
test("button has correct text after click", () => {

});