let page1 = document.querySelector('.page1')
let page2 = document.querySelector('.page2')
let BtnOpenFortune = document.querySelector('#BtnOpenFortune')
let BtnResetFortune = document.querySelector('#BtnResetFortune')
let FortuneText = document.querySelector('#FortuneText')
let RandomFortune = Math.round(Math.random() * (8 - 0) + 0)

const frase = ['Não compense na ira o que lhe falta na razão.',
'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
'Siga os bons e aprenda com eles.', 
'Quem quer colher rosas tem de estar preparado para suportar os espinhos.',
'Surpreender e ser surpreendido é o segredo do amor.',
'A sua visão se tornará mais clara apenas quando conseguir olhar para dentro do seu coração.',
'O verdadeiro homem mede a sua força, quando se defronta com o obstáculo.',
'A adversidade desperta em nós capacidades que, em circunstâncias favoráveis, teriam ficado adormecidas.', 
'Você sempre será a sua melhor companhia!']


BtnOpenFortune.addEventListener('click', HandleOpenClick)
BtnResetFortune.addEventListener('click', HandleOpenClick)
BtnOpenFortune.addEventListener('click', NewFortune)

function HandleOpenClick () {

    page1.classList.toggle('hide')
    page2.classList.toggle('hide')

}
function NewFortune () {

    FortuneText.innerText = frase[RandomFortune]
    RandomFortune = Math.round(Math.random() * (4 - 0) + 0)

}
