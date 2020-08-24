import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { getRecaudaciones } from "../../../../API/ApiReportes";

export default function RecaudacionesReporte() {
  const [recaudaciones, setRecaudaciones] = useState([]);
  const [fecha_desde, setFecha_desde] = useState("2020-08-01");
  const [fecha_hasta, setFecha_hasta] = useState("2020-08-23");

  async function onSubmit() {
    const data = await getRecaudaciones({ fecha_desde, fecha_hasta });
    console.log(data);
    setRecaudaciones(data);
  }

  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-between align-items-center">
        <div className="text-muted">Recaudaciones</div>
        <div>
          <a
            className="btn btn-info mb-1"
            href="http://localhost:3033/api/reportes/descargar/recaudaciones"
          >
            <i className="fas fa-file-download mr-2"></i>
            Excel
          </a>
        </div>
      </div>
      <hr className="w-100" />
      <div className="d-flex justify-content-end mb-3">
        <TextField
          name="fecha_desde"
          id="date"
          label="Desde"
          type="date"
          value={fecha_desde}
          onChange={(e) => setFecha_desde(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          className="ml-2 mr-2"
        />
        <TextField
          name="fecha_hasta"
          id="date"
          label="Hasta"
          type="date"
          value={fecha_hasta}
          onChange={(e) => setFecha_hasta(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          className="ml-2 mr-2"
        />
        <button
          className="btn btn-danger mt-2 mr-2 ml-2"
          type="button"
          onClick={() => onSubmit()}
        >
          Buscar
        </button>
      </div>
      {recaudaciones.length !== 0 ? (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Cantidad</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {recaudaciones.map((recaudacion, index) => (
                <tr key={index}>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
              {/** Se me ocurrio mostrar cantidad y total de reventas, insumos y el total de todo */}
            </tbody>
          </table>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
