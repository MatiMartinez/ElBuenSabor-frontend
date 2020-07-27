import React from "react";

export default function TablaPlatos({ platos, toggle, borrarPlato }) {
  return (
    <table className="table div-shadow bg-white mt-3">
      <thead className="font-bold-700">
        <tr>
          <th>Denominación</th>
          <th>Tiempo de cocina (minutos)</th>
          <th>Categoría</th>
          <th>Ingredientes</th>
          <th>Opciones</th>
        </tr>
      </thead>
      {platos.length !== 0 && (
        <tbody>
          {platos.map((plato) => (
            <tr key={plato._id}>
              <th>{plato.denominacion}</th>
              <td>{plato.tiempoCocina}</td>
              <td>{plato.rubro.denominacion}</td>
              <td>Ingredientes</td>
              <td>
                <div className="d-flex align-items-center">
                  <button className="btn" onClick={() => toggle(plato)}>
                    <i className="far fa-edit"></i>
                  </button>
                  <button
                    className="btn"
                    onClick={() => borrarPlato(plato._id)}
                  >
                    <i className="far fa-trash-alt"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
}