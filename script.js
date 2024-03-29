const html = document.querySelector('html');
const botaoIniciar = document.querySelector('.app__card-primary-button');
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const displayTempo = document.querySelector('#timer');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');

//Variaveis de tempo
const duracaoFoco = 1500;
const duracaoDescansoCurto = 300;
const duracaoDescansoLongo = 900;

alteraContexto = function (contexto) {
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `/imagens/${contexto}.png`)
    switch (contexto) {
        case 'foco':
            titulo.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>
        `
            break;
        case 'descanso-curto':
            titulo.innerHTML = `Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>
            ` 
            break;
        case 'descanso-longo':
                titulo.innerHTML = `
                Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>
                `
            break;
        default:
            break;
    }

}

focoBt.addEventListener('click', () => {
    alteraContexto('foco')
})

curtoBt.addEventListener('click', () => {
    alteraContexto('descanso-curto');
})

longoBt.addEventListener('click', () => {
    alteraContexto('descanso-longo');
})
