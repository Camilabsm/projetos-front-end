/* 
Minha solução:
acionarBotao('.tecla_pom','#som_tecla_pom');
acionarBotao('.tecla_clap','#som_tecla_clap');
acionarBotao('.tecla_tim','#som_tecla_tim');
acionarBotao('.tecla_puff','#som_tecla_puff');
acionarBotao('.tecla_splash','#som_tecla_splash');
acionarBotao('.tecla_toim','#som_tecla_toim');
acionarBotao('.tecla_psh','#som_tecla_psh');
acionarBotao('.tecla_tic','#som_tecla_tic');
acionarBotao('.tecla_tom','#som_tecla_tom');

function acionarBotao(buttonClassName, soundIdName){ 
    document.querySelector(buttonClassName).onclick = function() {
        document.querySelector(soundIdName).play();
    }
} */

//Solução curso Alura
function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}