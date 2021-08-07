import {
    TAREAS_PROYECTOS,
    AGREGAR_TAREAS,
    VALIDAR_TAREA,
    ELIMINAR_TAREA
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
                tareas: [action.payload, ...state.tareas],
                errorTarea: false
            }

        case VALIDAR_TAREA:
            return {
                ...state,
                errorTarea: true
            }
        case ELIMINAR_TAREA:
            return {
                ...state,
                tareas: state.tareas.filter(t => t.id !== action.payload)

            }
        default:
            return state;
    }
}