const CheckBox = ({ handleOnCheck }) => {

    return (
        <input
            style={{ margin: "10px", width: "20px", height: "20px" }}
            id="disable-button-checkbox"
            type="checkbox"
            defaultChecked={false}
            aria-label="Disable button"
            onClick={handleOnCheck}
        />
    )
}
export default CheckBox;