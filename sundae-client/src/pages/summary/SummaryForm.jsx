import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
const SummaryForm = () => {
    const [isDisable, setIsDisable] = useState(true);

    const popover = (
        <Popover id="popover-basic">
            <Popover.Body>
                No ice cream will actually be delivered
            </Popover.Body>
        </Popover>
    );

    const checkboxLabel = (
        <span>
            I agree to
            <OverlayTrigger placement="right" overlay={popover}>
                <span style={{ color: 'blue' }}>Terms and Conditions</span>
            </OverlayTrigger>
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