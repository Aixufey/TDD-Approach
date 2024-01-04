import PropTypes from 'prop-types';
import { useState } from 'react';
import "./index.css";
import kebabCaseToTitleCase from '../../helpers';

const CustomButton = ({ value, color, className, isDisable }) => {
    const [buttonColor, setButtonColor] = useState("medium-violet-red");
    const nextColorClassName = buttonColor === "medium-violet-red" ? "midnight-blue" : "medium-violet-red";
    const nextColorTitleCase = kebabCaseToTitleCase(nextColorClassName);
    const disabledColor = isDisable ? "gray" : buttonColor;

    return (
        <button
            className={disabledColor}
            onClick={() => setButtonColor(nextColorClassName)}
            disabled={isDisable}
        >
            {value} {nextColorTitleCase}
        </button>
    )
};

CustomButton.propTypes = {
    value: PropTypes.string.isRequired,
    color: PropTypes.string,
    className: PropTypes.string,
    isDisable: PropTypes.bool,
}
export default CustomButton;