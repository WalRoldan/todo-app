// MisDatos.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import MisDatos from "./myData";
import "@testing-library/jest-dom";

describe("MisDatos Component", () => {
  test("renders MisDatos component with correct elements", () => {
    render(<MisDatos />);

    // Verificar que el título se renderiza
    const titleElement = screen.getByText(/mis datos/i);
    expect(titleElement).toBeInTheDocument();

    // Verificar que los campos de entrada están presentes
    const nameLabel = screen.getByLabelText(/nombre/i);
    const emailLabel = screen.getByLabelText(/email/i);
    const phoneLabel = screen.getByLabelText(/teléfono/i);
    expect(nameLabel).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(phoneLabel).toBeInTheDocument();

    // Verificar que el botón de guardar se renderiza
    const saveButton = screen.getByRole("button", { name: /guardar/i });
    expect(saveButton).toBeInTheDocument();
  });
});
