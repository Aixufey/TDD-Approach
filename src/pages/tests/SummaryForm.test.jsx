import { fireEvent, logRoles, render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import SummaryForm from '../summary/SummaryForm';

describe('SummaryForm for button and checkbox', () => {
    test('checkbox flow', () => {
        const { container } = render(<SummaryForm />);
        logRoles(container);

        const checkBox = screen.getByRole('checkbox', { name: /terms and conditions/i });
        const button = screen.getByRole('button', { name: /confirm order/i });

        // checkbox init state - button disabled
        expect(checkBox).not.toBeChecked();
        expect(button).toBeDisabled();

        // click checkbox
        fireEvent.click(checkBox);
        expect(checkBox).toBeChecked();
        expect(button).toBeEnabled();
        
    })
});