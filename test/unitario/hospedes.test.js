import ValidaHospede from "../../src/services/validaHospede.js";

describe("Testando metodos", ()=>{

    test("Deve aceitar nome", ()=>{
        expect(ValidaHospede.validaNome("Rachelle")).toBe("Rachelle")
    })

    test("Deve aceitar senha", ()=>{
        expect(ValidaHospede.validaSenha("R123@uhbv")).toBe("R123@uhbv")
    })

    test("Deve aceitar celular", ()=>{
        expect(ValidaHospede.validaCelular("(21) 99565-5643")).toBe("(21) 99565-5643")
    })

    test("Deve aceitar data", ()=>{
        expect(ValidaHospede.validaNasc("10/05/2000")).toBe("10/05/2000")
    })

    test("Deve aceitar email", ()=>{
        expect(ValidaHospede.validaEmail("emaildeteste@gmail.com")).toBe("emaildeteste@gmail.com")
    })

    test("Deve aceitar genero", ()=>{
        expect(ValidaHospede.validaGenero("F")).toBe("F")
    })

    test("Deve rejeitar genero", ()=>{
        try {
            ValidaHospede.validaGenero("H")
        } catch (error) {
            expect(error.message).toBe("Gênero inválido, use: F para feminino, M para masculino e NB para não binário")
        }
        
    })

    test("Deve rejeitar nome", ()=>{
        try {
            ValidaHospede.validaNome("")
        } catch (error) {
            expect(error.message).toBe("O campo NOME não pode ficar vazio")
        }
        
    })

    test("Deve rejeitar celular", ()=>{
        try {
            ValidaHospede.validaCelular("21998786545")
        } catch (error) {
            expect(error.message).toBe("Número de celular inválido. Use o formato (xx) xxxxx-xxxx")
        }
        
    })

    test("Deve rejeitar email", ()=>{
        try {
            ValidaHospede.validaEmail("testeerro@gmailcom")
        } catch (error) {
            expect(error.message).toBe("Email inválido. Por favor, insira um email válido")
        }
        
    })

    test("Deve rejeitar data", ()=>{
        try {
            ValidaHospede.validaNasc("13-12-1998")
        } catch (error) {
            expect(error.message).toBe("Data inválida. Formato aceito DD/MM/AAA")
        }
        
    })

    test("Deve rejeitar senha", ()=>{
        try {
            ValidaHospede.validaSenha("senhadeteste")
        } catch (error) {
            expect(error.message).toBe("A senha precisa ter no minimo 8 e no máximo 15, 1 letra maiscula, 1 letra minuscula, 1 número e 1 caractere especial")
        }
        
    })
})

