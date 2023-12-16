import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import Modal from "./components/Modal/Modal";
import ListadoGastos from "./components/ListadoGastos/ListadoGastos";

function App() {
  const [presupuesto, setPresupuesto] = useState( ()=> JSON.parse( localStorage.getItem('presupuesto')) || 0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(()=> JSON.parse( localStorage.getItem('presupuestoValido')) || false);

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastos, setGastos] = useState(()=> JSON.parse( localStorage.getItem('gastos')) || []);

  // LOCALSTORAGE
  useEffect( ()=> {
    console.log('Guardando presupuesto');
    localStorage.setItem('presupuesto', JSON.stringify(presupuesto));
  }, [presupuesto]);

  useEffect( ()=> {
    localStorage.setItem('presupuestoValido', JSON.stringify(isValidPresupuesto));
  }, [isValidPresupuesto]);

  useEffect( ()=> {
    localStorage.setItem('gastos', JSON.stringify(gastos));
  }, [gastos]);

  const handleNuevoGasto = () => {
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 200);
  };

  const guardarGasto = (gasto) => {
    setGastos([...gastos, gasto]);
  };

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        gastos={gastos}
      />
      {isValidPresupuesto && (
        <>
          <main>
            <ListadoGastos gastos={gastos}/>
          </main>

          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGasto}
              alt="Icono de nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
        />
      )}
    </div>
  );
}

export default App;
