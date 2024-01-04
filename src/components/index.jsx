import PropTypes from 'prop-types';
import { useState } from 'react';
import "./index.css";
const CustomButton = ({ value, color, className }) => {
    const [buttonColor, setButtonColor] = useState("red");
    const nextColor = buttonColor === "red" ? "green" : "red";

    return (
        <button
            className={buttonColor}
            onClick={() => setButtonColor(nextColor)}
        >
            {value}{nextColor}
        </button>
    )
};

CustomButton.propTypes = {
    value: PropTypes.string.isRequired,
    color: PropTypes.string,
    className: PropTypes.string,
}
export default CustomButton;