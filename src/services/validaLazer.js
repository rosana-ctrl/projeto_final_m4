
export const campoNomeVazio = (nome_Hospede) => {
    if (nome_Hospede.length == 0) {
        throw new Error ('O campo Nome não pode ser vazio')
    } else {
        return nome_Hospede
    }
}

export const campoAtividadeVazio = (nome_Atividade) => {
    if (nome_Atividade.length == 0) {
        throw new Error ('O campo Atividade não pode ser vazio')
    } else {
        return nome_Atividade
    }
}

export const campoDataVazio = (dia_Atividade) => {
    if (dia_Atividade.length == 0) {
        throw new Error ('Favor inserir data no formato dd/mm/aaaa')
    } else {
        return dia_Atividade
    }
}