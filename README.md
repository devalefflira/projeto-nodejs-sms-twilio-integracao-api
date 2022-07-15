Projeto desenvolvido com NodeJs. Integração de serviço de SMS com a API do Twilio.

Tornou-se possível enviar sms para o número previamente cadastrado e validado no site do Twilio;

Criado durante a live coding de NodeJs, da Tech Academy, da StartSe, Turma 1.

Nesse projeto aplicamos os conceitos apresentados durante o curso de NodeJs, como Callbacks, Promises, Refatoração das Callbacks, async e await, entre outros.

No arquivo "package.json" usamos o nodemon ao invés do node, por questões práticas de atualização automática do servidor.

Instalamos, através do gerenciador de pacotes npm as seguintes dependências:
- dotenv
- express
- twilio

Com relação aos arquivos sensíveis/segurança - fizemos uso do .gitignore para não subir para o repositório arquivos de configuração de PORTA, SID, TOKEN e NUMERO utilizados para a integração da API.

Dentro do projeto criamos pastas/diretórios e seus respectivos arquivos, para melhor manter o código, em casos de atualização.
-Controllers
-Services

Configuramos devidamente a rota.

Através da extensão do vscode Thunder Cliente, criamos uma Request, usando o método POST e na área do Body, fazendo uso do Json, configuramos a mensagem a ser enviada e o número que irá recebê-la.

A verificação do status é feita através da própria extensão, que retorna um código. Ocorrendo tudo bem, o código retornado será 200.