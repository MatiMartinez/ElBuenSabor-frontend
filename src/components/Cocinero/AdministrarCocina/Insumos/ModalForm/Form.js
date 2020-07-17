import React from "react";
import { useForm } from "react-hook-form";
import { createInsumo, updateInsumo } from "../../../../../API/InsumosApi";
import InputField from "../../../../GlobalReusable/InputField";
import SelectMedida from "../../../../GlobalReusable/SelectMedida";
import SelectCategorias from "../../../../GlobalReusable/SelectCategorias";

export default function Form(props) {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    if (props.idEdit === undefined) {
      await createInsumo(data);
    } else {
      await updateInsumo(props.idEdit._id, data);
    }
    window.location.reload(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        id="denominacion"
        label="Denominación"
        type="text"
        name="denominacion"
        register={register}
        defaultValue={
          props.idEdit === undefined ? "" : props.idEdit.denominacion
        }
      />
      <SelectMedida
        register={register}
        defaultValue={
          props.idEdit === undefined ? "" : props.idEdit.unidadMedida
        }
      />
      <InputField
        id="stockMinimo"
        label="Stock mínimo"
        type="number"
        name="stockMinimo"
        register={register}
        defaultValue={
          props.idEdit === undefined ? "" : props.idEdit.stockMinimo
        }
      />
      <InputField
        id="stockMaximo"
        label="Stock máximo"
        type="number"
        name="stockMaximo"
        register={register}
        defaultValue={
          props.idEdit === undefined ? "" : props.idEdit.stockMaximo
        }
      />
      <SelectCategorias
        register={register}
        label={true}
        allValue={false}
        raiz={false}
        //defaultValue={idEdit === undefined ? '' : idEdit.rubro}
      />
      {/** Botones del modal */}
      <div className="d-flex justify-content-center border-top mt-5">
        <div className="d-flex justify-content-around pt-3 w-50">
          <button type="submit" className="btn btn-modal w-100 m-2">
            Guardar
          </button>
          <button
            className="btn btn-modal-outline w-100 m-2"
            onClick={() => props.setIsOpen(false)}
          >
            Volver
          </button>
        </div>
      </div>
    </form>
  );
}