import React from "react";
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

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

    // El parentesis indica un return, es decir que me returne un componente
    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={()=> console.log('Editar')}>
                Editar
            </SwipeAction>
        </LeadingActions>
    )
    
    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction onClick={()=> console.log('Eliminar')}>
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )

    return (
        <SwipeableList>
            <SwipeableListItem
                // accion que se ejecuta al arrastrar izq
                leadingActions={leadingActions()}
                // accion que se ejecuta al arrastrar derec
                trailingActions={trailingActions()}
            >
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
            </SwipeableListItem>
        </SwipeableList>
    );
}

export default Gasto;
