// src/components/myData/MisDatos.tsx
import React from "react";
import "./myData.css";

const MisDatos: React.FC = () => {
  return (
    <div className="mis-datos-container">
      <h1 className="titleData">Mis datos</h1>
      <div className="datos">
        <div>
          <label htmlFor="nombre">
            Nombre <span className="required">*</span>
          </label>
          <input
            type="text"
            id="nombre"
            placeholder="    Nombre"
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="email">
            Email <span className="required">*</span>
          </label>
          <input
            type="text"
            id="email"
            placeholder="    Email"
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="telefono">
            Teléfono <span className="required">*</span>
          </label>
          <input
            type="text"
            id="telefono"
            placeholder="    Teléfono"
            className="input-field"
          />
        </div>
        <button className="btn-guardar">
          <span>Guardar</span>
        </button>
      </div>
    </div>
  );
};

export default MisDatos;
