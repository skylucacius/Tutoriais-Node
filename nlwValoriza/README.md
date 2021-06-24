## NLW Valoriza

## Regras
- Cadastro de Usuário
[ X ] Não é permitido cadastrar mais de um usuário com o mesmo e-mail;
[ X ] Não é permitido cadastrar usuário sem e-mail.

- Cadastro de Tag
[ ] Não é permitido cadastrar mais de uma tag com o mesmo nome;
[ X ] Não é permitido cadastrar tag sem nome.

- Cadastro de Elogios
[ ] Não é permitido um usuário cadastrar um elogio para si próprio;
[ ] Não é permitido cadastrar elogios para usuários inválidos;
[ ] O usuário precisa estar autenticado na aplicação


## Diferenças em relação a aplicação desenvolvido na NLW 6 - Node
1. Ao criar o serviço de criação de tag, é feita uma instanciação comum de objeto ao invés de usar o TagRepository.create(). Ao meu ver, isso torna mais simples a criação de um serviço.
2. Não foi usado um construtor para uuid na entidade Tag.