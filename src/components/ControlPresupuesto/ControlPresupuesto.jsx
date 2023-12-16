import React, { useEffect, useState } from 'react'

function ControlPresupuesto({presupuesto, gastos}) {

  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);


  useEffect(()=> {
      const totalGastos =  gastos.reduce( (total, gasto) => total + gasto.cantidad , 0)
      
      setGastado(totalGastos);
      setDisponible(presupuesto - totalGastos);
  }, [gastos]);

  const formatearPresupuesto = cantidad => {
      // API de react que te formatea numeros
      return cantidad.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
      });
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica Aqui</p>
      </div>

      <div className="contenido-presupuesto">
        {/* <p>
          <span>Presupuesto:</span> {formatearPresupuesto(presupuesto)}
        </p> */}
        <p>
          <span>Disponible:</span> {formatearPresupuesto(disponible)}
        </p>
        <p>
          <span>Gastado:</span> {formatearPresupuesto(gastado)}
        </p>
      </div>
    </div>
  );
}

export default ControlPresupuesto;