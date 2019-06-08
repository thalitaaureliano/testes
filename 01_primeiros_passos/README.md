# Workshop de Testes Unitários | Primeiros passos

### TDD (Teste Driven Development) = Desenvolvimento Dirigido por Teste

Todo código que você escreve é guiado por um teste. Antes de escrever o código você realiza escreve o teste para aquele código que nem nasceu. Isso ajuda a planejar e estruturar melhor o código. Mas, como assim?

Vamos ver na prática ?

A proposta é começarmos implementando um teste para uma função que realiza a soma de dois números. 

1) Abre o terminal do linux ou o gitbash (caso esteja utilizando o windows)

2) Antes de iniciar, verifique se você tem o Node instalado na sua máquina 
`node --version` 
Se não tiver, instale o Node (ele já vai vir com o npm)

3) Para realizar os testes vamos utilizar o Mocha, uma ferramenta de testes bem simples de usar
`sudo npm install --global mocha`

Quase tudo instalado, agora vamos criar nossa estrutura de pastas e nossos arquivos.

4) Crie uma pasta chamada 'testes-js' no local de sua preferência 
`mkdir testes_js`

5) Acesse a pasta criada
`cd testes_js`

6) Nesta pasta, crie os diretórios 'src' e 'test' para organizar melhor os nossos arquivos 
`mkdir src test`

7) Crie um arquivo chamado 'soma.js' dentro da pasta 'src'(neste arquivo escreveremos a nossa função)
 `> src/soma.js`

8) Crie um arquivo chamado 'soma.teste.js' dentro da pasta 'test' (neste aquivo escreveremos o nosso teste)
`> test/soma.teste.js`

9) Pra ver se está tudo lindo na nossa estrutura de pastas podemos digitar o comando `tree`para ver a árvore de diretórios e arquivos. Teste aí!

Até aqui nós só preparamos o terreno, agora vamos começar a criar o nosso teste e depois a nossa função. Bora abrir o VSCode pra começar a codar? Digite `code .` e vamos fazer a mágica acontecer! (Vamos dar uma olhada na estrutura e ver se está tudo certinho)

Verificada a estrutura, nós precisaremos fazer uma última instalação antes de prosseguir. Precisamos incluir uma biblioteca de asserções, e utilizaremos a biblioteca Chai.

10) Crie um arquivo chamado 'package.json' contendo um par de chaves ('{}') no seu conteúdo. Esse arquivo serve para guardar as definições de bibliotecas que usaremos nos nossos testes. Lembre, que você pode fazer isso no terminal.
`echo {} > package.json`

11) Instale a biblioteca(módulo) chai e salve como uma dependência de desenvolvimento (observe que aparecerá uma pastinha node_modules na nossa estrutura)
`npm install --save-dev chai`

Agora escreva o seu teste e tente rodá-lo em seguida:

12) Para rodar o teste, digite o comando `mocha` no terminal

Dica extra: Se você quiser definir um comando para chamar o teste usando o o Mocha via npm, você pode acrescerntar o seguinte trecho de código no seu  arquivo 'package.json'
```
    "scripts": {
    "test": "mocha"
    }
```
Assim, para rodar o seu teste basta digitar, no terminal: 
`npm test`

## Exercício - Agora é com vocês! 
Implemente uma função que calcule a divisão de dois números utilizando a abordagem TDD que você acabou de aprender (aproveite a esturura que já criamos ;)

## Para saber mais sobre as ferramentas:
- https://mochajs.org/ 

- https://www.chaijs.com/

