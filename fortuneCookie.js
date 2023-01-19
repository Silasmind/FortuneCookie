    const phrases= ['A solidão é a sorte de todos os espíritos excepcionais.','Não ser amado é falta de sorte, mas não amar é a própria infelicidade.','Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar.','Homens fracos acreditam na sorte. Homens fortes acreditam em causa e efeito.','Tente a sua sorte! A vida é feita de oportunidades. O homem que vai mais longe é quase sempre aquele que tem coragem de arriscar.','Sorte é estar pronto quando a oportunidade vem.','A sorte favorece a mente bem preparada.','compartilhamentosA sorte, para chegar até mim, tem de passar pelas condições que o meu caráter lhe impõe.','A vida trará coisas boas se tiver paciência.','Não compense na ira o que lhe falta na razão.',' O bom-senso vale mais do que muito conhecimento.','Você é do tamanho do seu sonho.','Nós somos o que pensamos.', 'O insucesso é apenas uma oportunidade para recomeçar de novo com mais experiência.'
    ]
const screen1= document.querySelector('.screen1')
const screen2= document.querySelector('.screen2')
const btnFortuneCookie= document.querySelector('#btnYouFortune')
const btnOtherCookie= document.querySelector('#btnOtherCookie')
let randomPhrase

function btnFortuneClick(e){
e.preventDefault()

let randomPhrase=phrases[Math.floor(Math.random() *14)]

screen2.classList.remove('hide')
screen1.classList.add('hide')

let result= document.querySelector('.screen2 p').innerHTML=randomPhrase

}
btnFortuneCookie.addEventListener('click',btnFortuneClick)
btnOtherCookie.addEventListener('click', function (ev){
    ev.preventDefault()

    screen1.classList.remove('hide')
    screen2.classList.add('hide')

})