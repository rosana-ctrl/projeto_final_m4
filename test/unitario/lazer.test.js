import {campoNomeVazio} from "../../src/services/validaLazer.js";
import {campoAtividadeVazio} from "../../src/services/validaLazer.js";
import {campoDataVazio} from "../../src/services/validaLazer.js";

describe ('Testando para nome', () => {
    test ('verdadeira', () =>{
        expect (campoNomeVazio (' ')) .toBe(true)
    })

    test ('falsa', () =>{
        expect (campoNomeVazio ('abcde')) .toBe(false)
    })
})

describe ('Testando para atividade', () => {
    test ('verdadeira', () =>{
        expect (campoAtividadeVazio (' ')) .toBe(true)
    })

    test ('falsa', () =>{
        expect (campoAtividadeVazio ('abcde')) .toBe(false)
    })
})

describe ('Testando para data', () => {
    test ('verdadeira', () =>{
        expect (campoDataVazio (' ')) .toBe(true)
    })

    test ('falsa', () =>{
        expect (campoDataVazio ('01/01/2022')) .toBe(false)
    })
})