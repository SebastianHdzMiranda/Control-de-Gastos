import { useState } from 'react'
import Header from './components/Header/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg';
import Modal from './components/Modal/Modal';

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  
  const[gastos, setGastos] = useState([]);



  const handleNuevoGasto = () => {
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true);
    }, 200);
  }

  const guardarGasto = gastoObj => {
    setGastos([...gastos, gastoObj]);
  }

  return (
    <>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {isValidPresupuesto && (
        <div className="nuevo-gasto">
          <img
            src={IconoNuevoGasto}
            alt="Icono de nuevo gasto"
            onClick={handleNuevoGasto}
          />
        </div>
      )}

      {modal && 
        <Modal 
          setModal={setModal} 
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
        />
      }

    </>
  );
}

export default App
