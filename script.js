const html = document.querySelector('html');
const focoBt = document.querySelector('app__card-button--foco')
const curtoBt = document.querySelector('app__card-button--curto')

focoBt.addEventListener('click', ()=>{
    debugger;
    html.setAttribute('data-context', 'foco')
})