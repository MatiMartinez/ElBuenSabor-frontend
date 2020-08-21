import React from "react";
import SidebarReportes from "./SidebarReportes";
import PrivateRoute from "../../../routes/PrivateRoute";
import StockReporte from "./TablasReportes/StockReporte";
import RecaudacionesReporte from "./TablasReportes/RecaudacionesReporte";
import PedidosReporte from "./TablasReportes/PedidosReporte";

export default function Reportes() {
  return (
    <div className="p-4">
      <div className="row">
        <SidebarReportes />
        <div className="col-10">
          <PrivateRoute path="/admin/reportes/stock" component={StockReporte} />
          <PrivateRoute
            path="/admin/reportes/recaudaciones"
            component={RecaudacionesReporte}
          />
          <PrivateRoute
            path="/admin/reportes/ranking"
            component={StockReporte}
          />
          <PrivateRoute
            path="/admin/reportes/pedidos"
            component={PedidosReporte}
          />
        </div>
      </div>
    </div>
  );
}