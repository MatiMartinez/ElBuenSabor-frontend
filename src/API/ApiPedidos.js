import api from "./api";

export async function createPedido(pedido) {
  return await api
    .post("/pedidos/", pedido)
    .then((res) => {
      console.log(res);
      console.log("Pedido creado");
      return res;
    })
    .catch((err) => {
      console.log(err.status);
    });
}

export async function getPedidosByEstado(estado) {
  return await api
    .get(`/pedidos/estado/${estado}`)
    .then((res) => {
      console.log(res);
      console.log("Pedidos obtenidos");
      const dataRes = res.data;
      return dataRes;
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function updateEstado(estado, id) {
  await api
    .put(`/pedidos/${estado}/${id}`)
    .then((res) => {
      console.log(res);
      console.log("Pedido ", estado);
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getPedidosUsuario(id) {
  return await api
    .get(`/pedidos/usuario/${id}`)
    .then((res) => {
      const resData = res.data;
      console.log(resData);
      return resData;
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function facturarPedido(id) {
  return await api
    .get(`/pedidos/${id}/facturar`)
    .then((res) => {
      const resData = res.data;
      console.log(resData);
      return resData;
    })
    .catch((err) => {
      console.log(err);
    });
}
