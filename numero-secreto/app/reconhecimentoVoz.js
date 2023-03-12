const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript
    chute=parseInt(chute)
    console.log(chute)
    exibeChuteNaTela(chute)
    verificaValorValido(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
     `
}

recognition.addEventListener('end',()=>recognition.start())
//-------------------------
function search(ele) {
    if(event.key != 'Enter') {
        return
    }
    console.log(ele.value)
    exibeChuteNaTela(ele.value)
    verificaValorValido(ele.value)
}