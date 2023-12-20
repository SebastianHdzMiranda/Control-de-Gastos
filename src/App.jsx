import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import Modal from "./components/Modal/Modal";
import ListadoGastos from "./components/ListadoGastos/ListadoGastos";
import Filtros from "./components/Filtros/Filtros";

function App() {

  /* STATES
  ------------------------------------------------------- */
  const [presupuesto, setPresupuesto] = useState( ()=> Number(localStorage.getItem('presupuesto')) || 0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastos, setGastos] = useState(()=> JSON.parse( localStorage.getItem('gastos')) || []);

  const [gastoEditar, setGastoEditar]  = useState({});
  const [filtro, setFiltro] = useState('');

  /* LOCALSTORAGE 
  ------------------------------------------------------- */ 
  useEffect( ()=> {
    localStorage.setItem('presupuesto', presupuesto);
  }, [presupuesto]);

  useEffect( ()=> {
    presupuesto > 0 && setIsValidPresupuesto(true);
  }, []);

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

  const resetearApp = ()=> {
    setGastos([]);
    setIsValidPresupuesto(false);
    setPresupuesto(0);
  }

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        gastos={gastos}
        resetearApp={resetearApp}
      />

      
      {isValidPresupuesto && (
        <>
          <main>
            {gastos.length > 0 && <Filtros filtro={filtro} setFiltro={setFiltro}/>}
            <ListadoGastos
              gastos={ filtro ? gastos.filter( gasto => gasto.categoria === filtro ) : gastos }
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
