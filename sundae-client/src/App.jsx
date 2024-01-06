import OrderSummary from "./pages/summary/OrderSummary";

function App() {
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
      {/* <TestApp /> */}
      <OrderSummary />
    </div>
  );
}

export default App;