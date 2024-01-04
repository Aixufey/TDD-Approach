import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../App';
import { expect } from 'vitest';
test('checkbox workflow', () => {
    // Checkbox is in the shadow tree of App
    render(<App />);

    const button = screen.getByRole("button", { name: /change to/i });
    // Name for checkbox is the label HTML element or aria-label attribute
    const checkBox = screen.getByRole("checkbox", { name: /disable button/i });

    // Initial state tests
    expect(button).toBeEnabled();
    expect(checkBox).not.toBeChecked();

    // click checkbox to disable button and check checkbox
    fireEvent.click(checkBox);
    expect(button).toBeDisabled();
    expect(checkBox).toBeChecked();

    /* 
        button turns gray when disabled.
        Because CSS is not applied directly to the DOM
        thus, checking the color being applied to className instead.
    */
    expect(button).toHaveClass("gray");

    // click checkbox again to re-enable button and uncheck checkbox
    fireEvent.click(checkBox);
    expect(button).toBeEnabled();
    expect(checkBox).not.toBeChecked();

    // button turns red when enabled
    expect(button).toHaveClass("red");
});

test("checkbox workflow after button click", () => {
    render(<App />);

    const button = screen.getByRole("button", { name: /change to/i });
    const checkBox = screen.getByRole("checkbox", { name: /disable button/i });

    // Button click change color to green
    fireEvent.click(button);
    expect(button).toHaveClass("green");

    // click checkbox to disable button and check checkbox
    fireEvent.click(checkBox);
    expect(button).toBeDisabled();
    expect(checkBox).toBeChecked();
    expect(button).toHaveClass("gray");

    // click checkbox again to re-enable button and uncheck checkbox
    fireEvent.click(checkBox);
    expect(button).toBeEnabled();
    expect(checkBox).not.toBeChecked();
    expect(button).toHaveClass("green");
})