import { logRoles, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect } from 'vitest';
import SummaryForm from '../summary/SummaryForm';

describe('SummaryForm for button and checkbox', () => {
    // Setup for userEvent simulation - async/await
    const user = userEvent.setup();

    test('checkbox flow', async () => {
        const { container } = render(<SummaryForm />);
        logRoles(container);

        const checkBox = screen.getByRole('checkbox', { name: /terms and conditions/i });
        const button = screen.getByRole('button', { name: /confirm order/i });

        // click checkbox - button enabled - checkbox checked
        await user.click(checkBox);
        expect(checkBox).toBeChecked();
        expect(button).toBeEnabled();

        // click again - button disabled - checkbox unchecked
        await user.click(checkBox);
        expect(checkBox).not.toBeChecked();
        expect(button).toBeDisabled();
    })
});

/**
 * @link https://testing-library.com/docs/react-testing-library/cheatsheet/
 * @description Screen Query Methods
 * - get: expect elements are present in the DOM
 * - query: expect element NOT to be in DOM
 * - find: expect element to appear async in DOM
 * 
 * exclude: expect only one match
 * include: expect multiple matches
 * 
 * QueryType
 * - Role (ARIAs)
 * - AltText (images)
 * - Text (display elements)
 */
test("popover response to hover", async () => {
    const user = userEvent.setup();
    render(<SummaryForm />);

    // popover starts out not existing
    const nullPopover = screen.queryByRole(/no ice cream will actually be delivered/i);
    expect(nullPopover).not.toBeInTheDocument();

    // popover appears on mouseover of checkbox label
    // https://testing-library.com/docs/user-event/convenience#hover
    const termsAndConditions = screen.getByText(/terms and conditions/i);
    await user.hover(termsAndConditions);
    const popover = screen.getByText(/no ice cream will actually be delivered/i);
    expect(popover).toBeInTheDocument();

    // popover disappears when we mouse out
    await user.unhover(termsAndConditions);
    expect(popover).not.toBeInTheDocument();
})