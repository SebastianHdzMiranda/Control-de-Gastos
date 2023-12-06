import React, { useState } from 'react'
import NuevoPresupuesto from '../NuevoPresupuesto/NuevoPresupuesto';
import ControlPresupuesto from '../ControlPresupuesto/ControlPresupuesto';

function Header({presupuesto, setPresupuesto,isValidPresupuesto, setIsValidPresupuesto}) {


    return (
      <header>
        <h1>Planificador de gastos</h1>

        {isValidPresupuesto ? (
          <ControlPresupuesto presupuesto={presupuesto} />
        ) : (
          <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
          />
        )}
      </header>
    );
}

export default Header;
