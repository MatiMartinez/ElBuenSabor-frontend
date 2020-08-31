import React from "react";
import Insumos from "./Insumos/Insumos";
import ArtReventa from "./ArtReventa/ArtReventa";
import Categorias from "./Categorias/Categorias";
import Platos from "../../Cocinero/AdministrarCocina/Platos/Platos";
import PrivateRoute from "../../../routes/PrivateRoute";

const Cocina = () => {
  /** JSX -------------------------------------------------------------------------------- */
  return (
    <div className="m-4">
      <PrivateRoute
        path="/admin/cocina/insumos"
        component={Insumos}
        rol="Administrador"
      />
      <PrivateRoute
        path="/admin/cocina/platos"
        component={Platos}
        rol="Administrador"
      />
      <PrivateRoute
        path="/admin/cocina/categorias"
        component={Categorias}
        rol="Administrador"
      />
      <PrivateRoute
        path="/admin/cocina/articulos-reventa"
        component={ArtReventa}
        rol="Administrador"
      />
    </div>
  );
};

export default Cocina;
