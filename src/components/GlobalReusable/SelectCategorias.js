import React, { useState, useEffect } from 'react';

//API
import { getRubros, getRubrosRaiz } from '../../API/CategoriasApi';

const SelectCategorias = ({ register, label, todos, raiz }) => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const cargarRubros = async () => {
      let data;
      if (raiz === true) {
        data = await getRubrosRaiz();
      } else {
        data = await getRubros();
      }
      setCategorias(data);
    };
    cargarRubros();
  }, [raiz]); // Verificar raiz

  return (
    <div className="form-group">
      {label === true && (
        <label htmlFor="selectCategorias" className="control-label">
          Categoría
        </label>
      )}
      <select
        name="categorias"
        id="selectCategorias"
        className="form-control"
        defaultValue={''}
        ref={register}
      >
        <option hidden disabled value="">
          Seleccione una categoría
        </option>
        {todos === true && (
          <option key="0" value="todos">
            Todos
          </option>
        )}
        {categorias.map((categoria) => (
          <option key={categoria._id} value={categoria._id}>
            {categoria.denominacion}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCategorias;
