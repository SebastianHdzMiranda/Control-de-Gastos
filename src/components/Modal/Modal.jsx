import React, { useEffect, useState } from 'react';
import Mensaje from '../Mensaje/Mensaje';
import CerrarBtn from '../../img/cerrar.svg';
import { v4 as uuidv4 } from 'uuid';

function Modal({
  setModal,
  animarModal,
  setAnimarModal,
  guardarGasto,
  gastoEditar,
  setGastoEditar,
  actualizarGastos,
}) {
  
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");

  const [mensaje, setMensaje] = useState("");
  const[edicion, setEdicion] = useState(false);

  useEffect(() => {
    
    if(Object.keys(gastoEditar).length) {
      
      setNombre(gastoEditar.nombre);
      setCantidad(gastoEditar.cantidad);
      setCategoria(gastoEditar.categoria);

      setEdicion(true);
    }

  }, []);
  

  const ocultarModal = () => {
    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 400);

    setGastoEditar({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validacion = [nombre, cantidad, categoria].includes("");

    if (validacion) {
      setMensaje("Todos los campos son requeridos");

      setTimeout(() => {
        setMensaje("");
      }, 2000);
      return;
    }

    const gastoObj = {
      nombre,
      cantidad,
      categoria,
      date: Date.now(),
    }

    if (edicion) {
      gastoObj.id = gastoEditar.id;
      actualizarGastos(gastoObj);
      setGastoEditar({});

    } else {
      gastoObj.id = uuidv4();
      guardarGasto(gastoObj);
    }

    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 400);
  };

  

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="Cerrar modal" onClick={ocultarModal} />
      </div>

      <form
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
        onSubmit={handleSubmit}
      >
        <legend>{gastoEditar.nombre ? "Editar Gasto" : "Nuevo Gasto"}</legend>

        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            type="text"
            id="nombre"
            placeholder="Añade el Nombre del Gasto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            type="number"
            id="cantidad"
            placeholder="Añade la Cantidad del Gasto: ej. $300"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="" disabled hidden>
              -- Seleccione --
            </option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>

        <input
          type="submit"
          value={
            gastoEditar.nombre ? "Guardar Cambios" : "Añadir Gasto"
          }
        />
      </form>
    </div>
  );
}

export default Modal;