import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MisComunicaciones from "./myCommunications";

test("renders MisComunicaciones title", () => {
  render(<MisComunicaciones />);
  const titleElement = screen.getByText(/Mis comunicaciones/i);
  expect(titleElement).toBeInTheDocument();
});
