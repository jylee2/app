import { render, screen } from "@testing-library/react";

import App from "./App";

describe("renders entire app", () => {
  it("should have children", () => {
    render(<App />);

    const element = screen.getByText("Jun");
    expect(element).toBeInTheDocument();
  });
});
