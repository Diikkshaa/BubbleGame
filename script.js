

function makeBubble(){

    var clutter = "";
    for (var i = 1; i <= 102; i++) {
        var randn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${randn}</div>`;
    }
    document.querySelector("#pbottom").innerHTML = clutter;
}

var timer=60;
function runTimer(){
    var timer2= setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").innerHTML = timer;

        }
        else{
            clearInterval(timer2);
            document.querySelector("#pbottom").innerHTML='<h1>GAME OVER<h1/>';
        }
       
    },1000);
}
var rn=0;
function getNewHit(){
    rn= Math.floor(Math.random()*10);
   document.querySelector("#hitval").innerHTML=rn;
}

var score=0;
function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").innerHTML= score;
}

document.querySelector("#pbottom").addEventListener("click", function(dets){// det will tell which bubble is clicked
// adding event listner to parent of bubbles, pbottom. first it will search the evnt in the bubble if it will not find then it will go to the parent.
//writing event for each bubble is difficult.
var clickednum= Number(dets.target.textContent);
if(clickednum===rn){
    increaseScore();
    makeBubble();
    getNewHit();
}

});



getNewHit();
runTimer();
makeBubble();