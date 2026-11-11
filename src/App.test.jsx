import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App Component", () => {
  it("renders correctly", () => {
    render(<App />);
    const headingElement = screen.getByText(/Get started/i);
    expect(headingElement).toBeDefined();
  });
});
