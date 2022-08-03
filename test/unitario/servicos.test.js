import validacaoServicos from "../../src/services/validacaoServicos";
let servico = new validacaoServicos()
describe("Verifica se a data é válida", () => {
        test("deve rejeitar se a data for inválida", () => {
            try {
                servico.validaDataPassada("21-05-2022 10:30")
            } catch (error) {
                expect(error.message).toBe("Data inválida.")
            }
        })
    }

)