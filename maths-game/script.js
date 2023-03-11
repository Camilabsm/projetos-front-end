var playing = false;
var score;
var action;
var maxtime;
var correctAnswer;

//clicando no botão "start game"
    //jogando
        //recarregar a página
document.getElementById("start-btn").onclick = function() {
    if (playing == true){
        location.reload();
    } else {//iniciando novo jogo
        playing = true; //alterando variável para jogando
        score = 0; //zerar score
        document.getElementById("score-value").innerHTML = score;
        
        show("time-remaining"); //mostrar timer
        maxtime = 60;
        document.getElementById("timer-value").innerHTML = maxtime; //reduzir tempo no incremento de segundos
        
        hide("gameover");
        
        document.getElementById("start-btn").innerHTML = "Reset Game";  //modificar o nome do botão para "reset game"

        startTimer(); 

        generateQA();
    }
}

for(i=1; i<5; i++){
    document.getElementById("answer"+i).onclick = function() {
    if(playing == true){
        if(this.innerHTML == correctAnswer) {
            score += 1;
            document.getElementById("score-value").innerHTML = score;
            
            hide("incorrect");
            show("correct");
            setTimeout(function(){
                hide("correct")
            }, 1000);
            
            generateQA();
        } else {
            hide("correct");
            show("incorrect");
            setTimeout(function(){
                hide("incorrect")
            },1000);
            }
        }
    }
}

function startTimer(){
    action = setInterval(function(){
        maxtime -= 1;
        document.getElementById("timer-value").innerHTML = maxtime;
    
        if (maxtime == 0){ //game over
            stopTimer();
            document.getElementById("gameover").innerHTML = "<p>Game Over!</p><p>Your Score is: " + score +".</p>"
            show("gameover");
            hide("time-remaining");
            hide("correct");
            hide("incorrect");
            playing = false;
            document.getElementById("start-btn").innerHTML = "Start Game";
        } 
    }, 1000)
}    
        
function stopTimer(){
    clearInterval(action);
}

function hide(id){
    document.getElementById(id).style.display = "none";
}

function show(id){
    document.getElementById(id).style.display = "block";
}

function generateQA(){

    var x = 1 + Math.round(Math.random()*9);
    var y = 1 + Math.round(Math.random()*9);
    correctAnswer = x*y;
    var correctPosition = 1 + Math.round(Math.random()*3);

    document.getElementById("screen").innerHTML = x + " x " + y;
    document.getElementById("answer"+correctPosition).innerHTML = correctAnswer;
    
    var answers = [correctAnswer];

    for (i=1; i<5; i++) {
        if (i != correctPosition){
            var wrongAnswer;
            do {
                wrongAnswer = (1 + Math.round(Math.random()*9))*(1 + Math.round(Math.random()*9));
            } while (answers.indexOf(wrongAnswer)>(-1));
            
            document.getElementById("answer"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);  
        }
    }
}

            //mostrar mensagem de game over no final do tempo e modificar botão para "start game" 

       

        //gerar nova pergunta e respostas

//clicando na resposta
    //jogando
        //resposta correta?
            //sim
                //score +1
                //mostrar mensagem correto
                //nova pergunta e respostas
            //não
                //mostrar mensagem incorreto

        