var temporizador;
function zeracontador(){
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");

    minutes.innerText= 25;
    seconds.innerText= '00';
        
    if( minutes.innerText == 00 && seconds.innerText == 00){
        var sound = new Audio('./sound.mp3');
        sound.play();
        alert("Tempo de estudo/trabalho terminado");
        restart();
    }
}

function start(){

    var minutos = minutes.innerText;
    var segundos = seconds.innerText;

        temporizador = setInterval(() => {
            if(segundos == 0){
                minutos--;
                segundos = 59;
                seconds.innerText= segundos;
                minutes.innerText= minutos;
            }else{
                segundos--;
                if(segundos < 10){
                    seconds.innerText= "0" + segundos; 
                }else{
                    seconds.innerText= segundos;
                    minutes.innerText= minutos;
                }
            }
            if( minutos == 0 && segundos == 0){
                clearInterval(temporizador);
            }
            console.log(temporizador);
        },1000);




}

function pause(){
    clearInterval(temporizador);
}

function restart(){
    clearInterval(temporizador);
    minutes.innerText= 25;
    seconds.innerText= '00';  
    minutos = minutes.innerText;
    segundos = seconds.innerText;
}