let secretNumber=getRandomInt(0,9);
let attempts=3;
function getRandomInt(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
document.querySelector(".check").onclick=function(){
    let userNumber=document.querySelector(".number").value;
    //console.log(userNumber==secretNumber);
    //console.log(userNumber<secretNumber);
    //console.log(userNumber>secretNumber);
    if (userNumber==secretNumber){
        document.querySelector(".hint").innerHTML="Вы угадали!";
    }
    if (userNumber>secretNumber){
        document.querySelector(".hint").innerHTML="Попробуй число поменьше";
    }
    if (userNumber<secretNumber){
        document.querySelector(".hint").innerHTML="Попробуй число побольше";
    }
    attempts=attempts - 1;
    document.querySelector(".attempts").innerHTML=attempts;
    if (attempts==0){
        document.querySelector(".number").disabled=true;
    document.querySelector(".check").disabled=true;
    }
};
document.querySelector(".start").onclick=function(){
    secretNumber=getRandomInt(0,9);
    attempts=3;
    document.querySelector(".hint").innerHTML="Я буду подсказывать";
    document.querySelector(".attempts").innerHTML=attempts;
    document.querySelector(".number").disabled=false;
    document.querySelector(".check").disabled=false;
    document.querySelector(".number").value="";
    document.querySelector(".number").focus();
}