import { createStore } from "redux";
import { ADICIONAR, ALTERNARFEITA, IAcaoTarefa, ITarefa, REMOVER } from "./acoes";

function tarefas(state: ITarefa[] = [], action: IAcaoTarefa): ITarefa[] {
    switch (action.type) {
        case ADICIONAR:
            if (action.texto) {
                return state.concat([{ texto: action.texto, feita: false }]);
            }
        case REMOVER:
            return state.filter((t) => t.texto === action.texto);
        case ALTERNARFEITA:
            return state.map((t) => {
                if (t.texto === action.texto) {
                    return { ...t, feita: !t.feita };
                }
                return t;
            });
    }
    return state;
}

export default createStore(tarefas);
