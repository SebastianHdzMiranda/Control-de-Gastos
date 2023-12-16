# Libreria Swipeable-list
    - Esta Libreria sirve para crear efectos de slide que pueden tener una reaccion al deslizar un elemento, como editar, eliminar, aceptar, etc..

    - Instalar la libreria con npm:
        npm install react-swipeable-list
    
    - En el componente que se usara importar los siguientes modulos de la libreria: 
        import {
            LeadingActions,
            SwipeableList,
            SwipeableListItem,
            SwipeAction,
            TrailingActions,
        } from 'react-swipeable-list';

    - Importar tambien la hoja de estilos: 
        import 'react-swipeable-list/dist/styles.css';

    - Rodear todo el contenido del componente con 'SwipeableList': 
        
        <SwipeableList> 
            ...
        </SwipeableList>

    - Despues rodear con 'SwipeableListItem': 
        <SwipeableList> 
            <SwipeableListItem> 
                ...
            </SwipeableListItem>
        </SwipeableList>

    - crear las props 'leadingActions' y 'trailingActions' en 'SwipeableListItem':

        <SwipeableListItem

            // accion que se ejecuta al arrastrar izq
            leadingActions={leadingActions()}

            // accion que se ejecuta al arrastrar derec
            trailingActions={trailingActions()}
        >

    - escribir las funciones leadingActions() y trailingActions(): 

        // El parentesis indica un return, es decir que me returne un componente
        
        const leadingActions = () => (
            <LeadingActions>
                <SwipeAction onClick={()=> console.log('Editar')}>
                    Editar
                </SwipeAction>
            </LeadingActions>
        );

        const trailingActions = () => (
            <TrailingActions>
                <SwipeAction onClick={()=> console.log('Eliminar')}>
                    Eliminar
                </SwipeAction>
            </TrailingActions>
        );

    - añadir  destructive={true} a 'SwipeAction', esto crea una transicion para eliminar un elemento:

        <SwipeAction 
            destructive={true}
            onClick={()=> eliminarGasto(id)}
        >
            Eliminar
        </SwipeAction>