import PropTypes from 'prop-types';
import { useState } from 'react';
import "./index.css";
const CustomButton = ({ value, color, className, isDisable }) => {
    const [buttonColor, setButtonColor] = useState("red");
    const nextColor = buttonColor === "red" ? "green" : "red";
    const disabledColor = isDisable ? "gray" : buttonColor;
    return (
        <button
            className={disabledColor}
            onClick={() => setButtonColor(nextColor)}
            disabled={isDisable}
        >
            {value}{nextColor}
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