import PropTypes from 'prop-types';
import "./index.css";
const CustomButton = ({ value, color, className }) => {

    return (
        <div style={{
            width: "100px",
            height: "100px",
            border: "1px solid black",
        }}>
            <button
                className={className}
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: color,
                }}
            >
                {value}
            </button>
        </div>
    )
};

CustomButton.propTypes = {
    value: PropTypes.string.isRequired,
    color: PropTypes.string,
    className: PropTypes.string,
}
export default CustomButton;