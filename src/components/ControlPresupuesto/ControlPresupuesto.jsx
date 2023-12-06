import React from 'react'

function ControlPresupuesto({presupuesto}) {

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
          <p>
            <span>Presupuesto:</span> {formatearPresupuesto(presupuesto)}
          </p>
          <p>
            <span>Disponible:</span> {formatearPresupuesto(0)}
          </p>
          <p>
            <span>Presupuesto:</span> {formatearPresupuesto(0)}
          </p>
        </div>
      </div>
    );
}

export default ControlPresupuesto;