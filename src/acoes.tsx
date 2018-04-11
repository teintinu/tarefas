
export interface ITarefa {
    feita: boolean;
    texto: string;
}

export interface IAcaoTarefa {
    type: string;
    texto?: string;
}

export const ADICIONAR = "ADICIONAR";
export const REMOVER = "REMOVER";
export const ALTERNARFEITA = "ALTERNARFEITA";
export const REMOVERTAREFASFEITAS = "REMOVERTAREFASFEITAS";
