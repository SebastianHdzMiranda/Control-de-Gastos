import React from 'react';
import CerrarBtn from '../../img/cerrar.svg';

function Modal({setModal}) {
    const ocultarModal = () => {
        setModal(false);
    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img 
                    src={CerrarBtn} 
                    alt="Cerrar modal" 
                    onClick={ocultarModal} 
                />
            </div>
        </div>
    );
}

export default Modal;