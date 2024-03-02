# QualityMap
desafio-QualityMap

*Cenários de teste - Desafio técnico - Fazer um registro com sucesso

Funcionalidade: Registro com sucesso

  Cenário: Criar registro 
    Dado que estou na página de registro
    Quando preencho o formulário de registro com dados válidos
    E clico no botão de registrar
    Então devo ver uma mensagem de confirmação de registro "Seu cadastro foi concluído"
    E o botão de continuar deve estar disponivel para redirecionar a página inicial 

  Cenário: Validar data 
    Dado que estou na página de registro
    Quando seleciono a data de nascimento desejada 
    E preencho o restante do formulário com dados válidos
    E clico no botão de registrar 
    Então devo ver uma mensagem de confirmação de registro "Seu cadastro foi concluído"
    E o botão de continuar deve estar disponivel para redirecionar a página inicial 



*Cenários de teste - Desafio técnico - Validar mensagem de erro durante o registro

Funcionalidade: Mensagem de Erro ao Registrar Usuário

  Cenário: Registro com campos obrigatórios em branco
    Dado que estou na página de registro
    Quando tento registrar sem preencher os campos obrigatórios
    Então devo ver uma mensagem de erro indicando que os campos são obrigatórios
    E a mensagem deve ser compatível com os campos em branco


  Cenário: Registro com e-mail inválido
    Dado que estou na página de registro
    Quando preencho o formulário com um e-mail inválido
    Então devo ver uma mensagem de erro indicando que o e-mail é inválido
    

  Cenário: Registro com senhas diferentes
    Dado que estou na página de registro
    Quando preencho o formulário com senhas diferentes nos campos de senha e confirmação de senha
    Então devo ver uma mensagem de erro indicando que as senhas não coincidem
    

  Cenário: Registro com senha fora das regras
    Dado que estou na página de registro
    Quando preencho o formulário com senhas diferentes do padrão de senha exigido
    Então devo ver uma mensagem de erro indicando que a senha deve atender as regras 

