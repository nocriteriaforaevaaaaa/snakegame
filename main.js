let direction={x:0,y:0};
const foodSound=new Audio('food.mp3');
const gameOverSound=new Audio('gameover.mp3');
const moveSound=new Audio('move.mp3');
const musicSound=new Audio('music.mp3');
let speed=2;
let lastPaintTime=0;
let snakeArr=[
    {x:13,y:15}
]

function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime-lastPaintTime)/1000<1/speed)
    {
        return;
    }
    lastPaintTime=ctime;
    gameEngine();
}
function gameEngine(){
    bg.innerHTML= "";
    snakeArr.forEach((e,index)=>{
        snakeElement=document.createElement('div');
        snakeElement.style.gridRowStart=e.y;
        snakeElement.style.gridColumnStart=e.x;
        snakeElement.classList.add('food');
        bg.appendChild(snakeElement);

      
    })
     
}








window.requestAnimationFrame(main);