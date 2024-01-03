const CustomButton = ({value}) => {
    return (
        <div style={{
            width: "100px",
            height: "100px",
            border: "1px solid black",
        }}>
            <button
                style={{
                    width: "100%",
                    height: "100%",                    
                }}
            >
                {value}
            </button>
        </div>
    )
};
export default CustomButton;