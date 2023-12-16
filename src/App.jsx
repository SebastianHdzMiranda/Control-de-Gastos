import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import Modal from "./components/Modal/Modal";
import ListadoGastos from "./components/ListadoGastos/ListadoGastos";

function App() {

  /* STATES
  ------------------------------------------------------- */
  const [presupuesto, setPresupuesto] = useState( ()=> JSON.parse( localStorage.getItem('presupuesto')) || 0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(()=> JSON.parse( localStorage.getItem('presupuestoValido')) || false);

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastos, setGastos] = useState(()=> JSON.parse( localStorage.getItem('gastos')) || []);

  const [gastoEditar, setGastoEditar]  = useState({});

  /* LOCALSTORAGE 
  ------------------------------------------------------- */ 
  useEffect( ()=> {
    localStorage.setItem('presupuesto', JSON.stringify(presupuesto));
  }, [presupuesto]);

  useEffect( ()=> {
    localStorage.setItem('presupuestoValido', JSON.stringify(isValidPresupuesto));
  }, [isValidPresupuesto]);

  useEffect( ()=> {
    localStorage.setItem('gastos', JSON.stringify(gastos));
  }, [gastos]);

  // UseEfectt que me habre el modal cuando gastoEditar cambie
  useEffect(()=> {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);
    
      setTimeout(() => {
        setAnimarModal(true);
      }, 200);
    }

  }, [gastoEditar]);
  
  /* FUNCIONES
  ------------------------------------------------------ */
  const handleNuevoGasto = () => {
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 200);
  };

  const guardarGasto = gasto => {
    setGastos([...gastos, gasto]);
  };

  const actualizarGastos = objGasto => {
    const gastosAct = gastos.map( gasto => gasto.id === objGasto.id ? objGasto : gasto );

    setGastos(gastosAct);
  }

  const eliminarGasto = id => {
    const gastosAct = gastos.filter( gasto => gasto.id !== id );

    setGastos(gastosAct);
  }

  return (
    <div className={modal ? "fijar" : ""}>
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
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
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
          gastoEditar={gastoEditar}
          actualizarGastos={actualizarGastos}
          setGastoEditar={setGastoEditar}
        />
      )}
    </div>
  );
}

export default App;
