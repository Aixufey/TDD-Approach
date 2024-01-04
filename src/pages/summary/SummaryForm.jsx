import { useState } from 'react';
const SummaryForm = () => {
    const [isDisable, setIsDisable] = useState(true);
    return (
        <>
            <input
                id="terms-and-conditions-button"
                type="button"
                value='Confirm order'
                disabled={isDisable}
            />
            <input
                id="terms-and-conditions-checkbox"
                type="checkbox"
                aria-label="I agree to Terms and Conditions"
                defaultChecked={false}
                onChange={(e) => setIsDisable(!e.target.checked)}
            />
        </>
    )
}
export default SummaryForm;