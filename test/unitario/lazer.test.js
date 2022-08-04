import {campoNomeVazio,} from "../../src/services/validaLazer.js";
import {campoAtividadeVazio} from "../../src/services/validaLazer.js";
import {campoDataVazio} from "../../src/services/validaLazer.js";

describe ('Testando para nome', () => {
    test ('nome não deve ser vazio', () =>{
        try {
            campoNomeVazio ('abcde')
        } catch (error) {
            expect (error.message).toBe('Campo nome não pode ser vazio')
        }
    })

    test ('atividade não deve ser vazio', () =>{
        try {
            campoAtividadeVazio ('abcde')
        } catch (error) {
            expect (error.message).toBe('Campo atividade não pode ser vazio')
        }
    })

    test ('data não deve ser vazio', () =>{
        try {
            campoDataVazio ('abcde')
        } catch (error) {
            expect (error.message).toBe('Favor inserir data no formato dd/mm/aaaa')
        }
    })
})