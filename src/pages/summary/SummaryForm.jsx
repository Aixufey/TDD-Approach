import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
const SummaryForm = () => {
    const [isDisable, setIsDisable] = useState(true);
    const checkboxLabel = (
        <span>
            I agree to <span style={{ color: 'blue' }}>Terms and Conditions</span>
        </span>
    )
    return (
        <Form>
            <Form.Group controlId="terms-and-conditions">
                <Form.Check
                    type="checkbox"
                    label={checkboxLabel}
                    defaultChecked={false}
                    onChange={(e) => setIsDisable(!e.target.checked)}
                />
            </Form.Group>
            <Button
                type="submit"
                disabled={isDisable}
                variant="primary"
            >
                Confirm order
            </Button>
        </Form>
    )
}
export default SummaryForm;