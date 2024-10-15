import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MisDevoluciones from "./myReturns";

test("renders MisDevoluciones title", () => {
  render(<MisDevoluciones />);
  const titleElement = screen.getByText(/Mis devoluciones/i);
  expect(titleElement).toBeInTheDocument();
});
