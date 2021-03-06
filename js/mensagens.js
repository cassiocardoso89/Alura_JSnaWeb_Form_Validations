export const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo NOME não pode estar vazio.'
    },
    email: {
        valueMissing: 'O campo E-MAIL não pode estar vazio.',
        typeMismatch: 'O email digitado não é válido.'
    },
    senha: {
        valueMissing: 'O campo SENHA não pode estar vazio.',
        patternMismatch: 'A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos.'
    },
    dataNascimento: {
        valueMissing: 'O campo DATA DE NASCIMENTO não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    cpf: {
        valueMissing: 'O campo CPF não pode estar vazio.',
        customError: 'O CPF digitado não é válido.' 
    },
    cep: {
        valueMissing: 'O campo CEP não pode estar vazio.',
        patternMismatch: 'O CEP digitado não é válido.',
        customError: 'CEP não encontrado'
    },
    logradouro:{
        valueMissing: 'O campo LOGRADOURO não pode estar vazio.',
    },
    cidade: {
        valueMissing: 'O campo CIDADE não pode estar vazio.',
    },
    estado: {
        valueMissing: 'O campo ESTADO não pode estar vazio.',
    },
    preco: {
        valueMissing: 'O campo PREÇO não pode estar vazio'
    }

}