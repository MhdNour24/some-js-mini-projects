const hex =[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener("click",function() {
    randomHex=getRandomNumber();
    document.body.style.backgroundColor = randomHex;
    color.textContent=randomHex;
    
})

function getRandomNumber() {
    let randomHex="#";
    for (let index = 0; index < 6; index++) {
        const randomIndex=Math.floor(Math.random()*hex.length);
        const randompartOfHex=hex[randomIndex];
        randomHex+=randompartOfHex;
    }
    return randomHex;
}