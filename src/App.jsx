import { useState } from "react";
import CustomButton from "./components/button";
import CheckBox from "./components/checkbox";
function App() {
  const [isDisable, setIsDisable] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        height: '100%',
      }}
    >
      <h1>Learn React</h1>
      <CustomButton
        value="Change to"
        isDisable={isDisable}
      />
      <br />
      <CheckBox
        handleOnCheck={() => setIsDisable(prev => !prev)}
      />
    </div>
  );
}

export default App;