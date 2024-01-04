import { render, screen, fireEvent } from "@testing-library/react";
import { expect } from "chai";
import CustomButton from "../components";
import { logRoles } from "@testing-library/react";

// Test a button behavior workflow
test("button flow", () => {
    // render the component
    const { container } = render(<CustomButton
        value="Change to"
    />);

    // find the button
    const buttonEle = screen.getByRole("button", { name: /change to/i });
    // We can use the container to debug the DOM
    logRoles(container);

    // check initial color
    expect(buttonEle).toHaveClass("red");

    // check the button's label before click
    expect(buttonEle).toHaveTextContent(/green/i);
    
    // click the button
    fireEvent.click(buttonEle);
    
    // check the button's label after click
    expect(buttonEle).toHaveTextContent(/red/i);
    
    // check the button's color
    expect(buttonEle).toHaveClass("green");
});