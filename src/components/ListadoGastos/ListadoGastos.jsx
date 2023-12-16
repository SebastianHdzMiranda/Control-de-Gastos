import React from 'react'
import Gasto from '../Gasto/Gasto';

function ListadoGastos({gastos, setGastoEditar, eliminarGasto}) {
  return (
    <div>
      <div className="listado-gastos contenedor">
        <h2>{gastos.length ? "Gastos" : "Aun no hay Gastos!"}</h2>

        {gastos.map((gasto) => (
          <Gasto
            key={gasto.id}
            gasto={gasto}
            setGastoEditar={setGastoEditar}
            eliminarGasto={eliminarGasto}
          />
        ))}
      </div>
    </div>
  );
}

export default ListadoGastos;