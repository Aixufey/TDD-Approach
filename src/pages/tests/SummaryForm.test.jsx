import { logRoles, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe } from 'vitest';
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