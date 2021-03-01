
var count = setInterval(toggleImage, 1000);
const limitTime = 60;
let score = 0;

function toggleImage() {
    var img1 = "punch1.gif";
    var img2 = "default.gif";
    var img3 = "punch2.gif";
    var aud1 = "punch.mp3";
    var aud2 = "whoosh.mp3";
    var aud3 = "default.mp3";
    var imgElement = document.getElementById("toggleImage");
    var audElement = document.getElementById("audio");
    const scoreDiv=document.getElementById("score");

    count++;
            imgElement.src = img2;
            audElement.src = aud3;
            audio.play();


    if(count>limitTime){
        clearInterval(count);
        if(score>60)
                        window.location.href = 'win.html';
    else
        window.location.href = 'score.html';
    }
    

}



function toggleScore(){
    var img1 = "punch1.gif";
    var img2 = "default.gif";
    var img3 = "punch2.gif";
    var aud1 = "punch.mp3";
    var aud2 = "whoosh.mp3";
    var aud3 = "default.mp3";
    var imgElement = document.getElementById("toggleImage");
    var audElement = document.getElementById("audio");
    const scoreDiv=document.getElementById("score");
            score++;    
    if(score<=30){
            imgElement.src = img1;
            audElement.src = aud1;
            audio.play();

        }
        else{
            imgElement.src = img3;
            audElement.src = aud2;
            audio.play();

        }
            }


