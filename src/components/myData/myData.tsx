import React from "react";
import "./myData.css";

const MisDatos: React.FC = () => {
  return (
    <div className="mis-datos-container">
      <h1 className="titleData">Mis datos</h1>
      <div className="datos">
        <div>
          <label>
            Nombre <span className="required">*</span>
          </label>

          <input type="text" placeholder="    Nombre" className="input-field" />
        </div>
        <div>
          <label>
            Email <span className="required">*</span>
          </label>
          <input type="text" placeholder="    Email" className="input-field" />
        </div>
        <div>
          <label>
            Teléfono <span className="required">*</span>
          </label>

          <input
            type="text"
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
