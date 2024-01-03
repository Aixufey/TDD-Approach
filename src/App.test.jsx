import { render, screen } from "@testing-library/react";
import App from "./App";

test("app contains correct heading", () => {
    render(<App />);

    const headingEle = screen.getByText(/learn react/i);
    expect(headingEle).toBeInTheDocument();

});