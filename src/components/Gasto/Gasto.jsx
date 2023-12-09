import React from "react";
import { formatearDate } from "../../helpers";

function Gasto({gasto}) {

    const {nombre, cantidad, categoria, id, date} = gasto;

    return (
        <div className="gasto sombra">
            <div className="contenido-gasto">
                <div className="descripcion-gasto">
                    <p className="categoria">{categoria}</p>
                    <p className="nombre-gasto">{nombre}</p>
                    <p className="fecha-gasto">Agregado el: <span>{formatearDate(date)}</span></p>

                </div>
            </div>
        </div>
    );
}

export default Gasto;
