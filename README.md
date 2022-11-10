# SECRET WORD APP

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

Para rodar o projeto, faça um clone e após digite no console:
### `npm install`

### `npm start`

# Índice

* [Descrição do Projeto](#Descrição-do-projeto)
* [A cara do projeto](#A-cara-do-projeto)
* [Input](#Input)
* [Em caso de acerto da letra](#Em-caso-de-acerto-da-letra)
* [Em caso de erro](#Em-caso-de-erro)
* [Acerto da palavra](#Acerto-da-palavra)
* [Gamve Over!](#Game-Over!)

## Descrição do Projeto

Projeto pessoal criado utilizando ReactJS.
O projeto consiste em uma tela interativa na qual o usuário tenta adivinhar uma palavra dentro de um tema aleatório.
Ah, e ele também está adaptado para smartphones ok?!
Divirta-se e tente adivinhar todas as palavras!

### A cara do projeto!
Essa é a tela inicial que o usuário verá assim que abrir a aplicação:

![image](https://user-images.githubusercontent.com/105092250/201227425-843f8b4b-ff32-48a5-8002-98e5aa3e5381.png)


![image](https://user-images.githubusercontent.com/105092250/201226178-e9d83547-3f11-4b6f-bd64-2b74f4041ae1.png)

## Imagens da aplicação em celulares:
![image](https://user-images.githubusercontent.com/105092250/201228868-cd30ea47-6db9-4904-a0a4-5dea3c9e4a74.png)
![image](https://user-images.githubusercontent.com/105092250/201228892-863a78cd-ba5e-4165-91bc-47025eed77e7.png)


### Input
Esse campo abaixo é onde o usuário deverá colocar a letra a ser adivinhada da palavra, caso ela conter na palavra aleatória, a mesma será revelada e então o usuário poderá escolher outra letra.
OBS.: Pra casos de usabilidade, não é necessário clicar no campo a cada letra a ser adivinhada, apenas utilizando a tecla enter o usuário já consegue fazer o input do dado.

![image](https://user-images.githubusercontent.com/105092250/201226480-50a58ace-e4d6-480a-abf4-67f0fb3388dd.png)

### Em caso de acerto da letra
Caso o usuário acerte a letra, irá aparecer da seguinte forma:

![image](https://user-images.githubusercontent.com/105092250/201226582-ba15eb72-764a-4fd0-b0fa-27478c3e5163.png)

### Em caso de erro
Caso o usuário digite uma letra que não contenha na palavra, a mesma será computada abaixo no campo "Letras já utilizadas" para servir de auxílio na hora de adivinhar uma outra letra e não repetir. Também caso o usuário erre a letra, a tentativa será subtraída do total de tentativas que o usuário terá em cada sessão do jogo.

![image](https://user-images.githubusercontent.com/105092250/201226917-d0c9e94d-5692-48a8-8069-06d5511684f8.png)

### Acerto da palavra
Quando o usuário acerta a palavra, é somado um valor de 100 à pontuação do usuário como segue: 

![image](https://user-images.githubusercontent.com/105092250/201227016-2a6096b0-3cea-43fd-a25a-917b3aa8626d.png)

### Game Over!
Caso as tentativas do usuário tenham acabado, o jogo finaliza e será mostrado a pontuação total daquela sessão e um botão para começar novamente o jogo:

![image](https://user-images.githubusercontent.com/105092250/201227287-2d74d82b-afa4-42b3-b79e-1896261006fb.png)
