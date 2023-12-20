import React, { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Swal from 'sweetalert2';

function ControlPresupuesto({presupuesto, gastos, resetearApp}) {

  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  const [porcentaje, setPorcentaje] = useState(0);

  const [color, setColor] = useState('#3B82f6');


  useEffect(()=> {
      const totalGastos =  gastos.reduce( (total, gasto) => total + gasto.cantidad , 0);
      const totalDisponible = presupuesto - totalGastos;
      
      // calcular el porcentaje gastado
      const nuevoPorcentaje = (( (presupuesto - totalDisponible) / presupuesto ) * 100).toFixed(2);

      if (nuevoPorcentaje >= 80) {
        setColor('#DC2626');
      } else if(nuevoPorcentaje >= 60 ) {
        setColor('#f7b054');
      } else {
        setColor('#3B82f6');
      }
      
      setGastado(totalGastos);
      setDisponible(totalDisponible);
      setPorcentaje(nuevoPorcentaje);

  }, [gastos]);

  const formatearPresupuesto = cantidad => {
      // API de react que te formatea numeros
      return cantidad.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
      });
  }

  const handleResetear = () => {
    Swal.fire({
      title: "¿Está seguro?",
      text: "¡Se reiniciara el presupuesto y los gastos!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Si, Resetea!",
      cancelButtonText: "¡No, cancela!"
    }).then((result) => {
      if (result.isConfirmed) {
        resetearApp();
      }
    });
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar 
          value={porcentaje}
          // maxValue={100}
          text={`${porcentaje}% Gastado`}
          styles={buildStyles({
        
            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 1.3,

            // Colors
            pathColor: `${color}`,
            trailColor: '#f5f5f5',
            textColor: `${color}`,
          })}
        />
      </div>

      <div className="contenido-presupuesto">
        {/* <p>
          <span>Presupuesto:</span> {formatearPresupuesto(presupuesto)}
        </p> */}
        <button className='reset-app' type='button' onClick={handleResetear}>Resetear App</button>
        <p className={`${disponible < 0 ? 'negativo' : ''}`}>
          <span>Disponible:</span> {formatearPresupuesto(disponible)}
          
          
        </p>
          <p className='mensaje-help'>
            {disponible < 0 ? '* Te has salido de tu presupuesto, te recomendamos disminuir Gastos' : ''}
          </p>
        <p>
          <span>Gastado:</span> {formatearPresupuesto(gastado)}
        </p>
      </div>
    </div>
  );
}

export default ControlPresupuesto;