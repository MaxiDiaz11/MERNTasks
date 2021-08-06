import {
    TAREAS_PROYECTOS,
    AGREGAR_TAREAS,
    VALIDAR_TAREA
} from "../../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case TAREAS_PROYECTOS:
            return {
                ...state,
                tareasProyecto: state.tareas.filter(tarea => tarea.proyectoId === action.payload)
            }
        case AGREGAR_TAREAS:
            return {
                ...state,
                tareas: [...state.tareas, action.payload],
                errorTarea: false
            }

        case VALIDAR_TAREA:
            return {
                ...state,
                errorTarea: true
            }
        default:
            return state;
    }
}