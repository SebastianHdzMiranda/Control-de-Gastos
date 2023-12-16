import React from "react";
import { formatearDate } from "../../helpers";

// Iconos
import ahorro from "../../img/icono_ahorro.svg";
import comida from "../../img/icono_comida.svg";
import casa from "../../img/icono_casa.svg";
import gastos from "../../img/icono_gastos.svg";
import ocio from "../../img/icono_ocio.svg";
import salud from "../../img/icono_salud.svg";
import suscripciones from "../../img/icono_suscripciones.svg";

function Gasto({gasto}) {

    const {nombre, cantidad, categoria, id, date} = gasto;

    const categoriasIconos = { ahorro, comida, casa, gastos, ocio, salud, suscripciones }

    return (
        <div className="gasto sombra">


            <div className="contenido-gasto">
                <img src={categoriasIconos[categoria]} alt="icono gasto"/>
                <div className="descripcion-gasto">
                    <p className="categoria">{categoria}</p>
                    <p className="nombre-gasto">{nombre}</p>
                    <p className="fecha-gasto">Agregado el: <span>{formatearDate(date)}</span></p>
                </div>
            </div>
            <p className="cantidad-gasto">${cantidad}</p>
        </div>
    );
}

export default Gasto;
