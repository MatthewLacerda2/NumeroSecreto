function verificaValorValido(chute){
    const numero=+chute
    
    if(chuteInvalido(numero)){
        elementoChute.innerHTML+="<div>valor invalido</div>"
        return;
    }
    
    if(numeroOutRange(numero)){
        elementoChute.innerHTML+=`
        <div>Valor out of range</div>
        `
        return;
    }
    
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3 class="msgVitoria">O número secreto era ${numeroSecreto}</h3>
            <h2>Voce acertou em ${numeroTentativas} tentativas</h2>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
        meuConfetti();
        var audio = new Audio('./celebration.mp3');
        audio.play();

    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `;
        numeroTentativas++;
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
        numeroTentativas++;
    }
}

numeroTentativas=0;

function chuteInvalido(numero){
    return Number.isNaN(numero)
}

function numeroOutRange(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e=>{
    if(e.target.id=='jogar-novamente'){
        window.location.reload();
    }
})

function meuConfetti(){
    var duration = 3 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    
    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }
    
    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();
    
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
    
      var particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}