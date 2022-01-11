'use strict'
// Login constantes
const login = document.getElementById('art1');
const game = document.getElementById('art2');
const btn = document.getElementById('btn');
const user = document.getElementById('user');
const pass = document.getElementById('pass');
const userImg = document.getElementById('userImg');
const AiImg = document.getElementById('AiImg');
const select = document.querySelector('#select');
// login Función
function playGame(){
    if(user.value === 'player' && pass.value === 'password'){
        login.style.display = 'none';
        game.style.display = 'flex';
    } else if (user.value !== 'player' && pass.value !== 'password'){
        err1.innerHTML = 'User or /and password incorrect'
    }
};

// Game

document.getElementById('rock').onclick = function() {myPlay('rock')};
document.getElementById('scissors').onclick = function() {myPlay('scissors')};
document.getElementById('hand').onclick = function() {myPlay('hand')};

let round = 0;
let score = 0;

const points = [];

function myPlay(choice){
    let shootPlayer = choice;
    document.getElementById('userImg').src = "./images/"+choice+".svg";

    const optionComputer = ['rock', 'hand', 'scissors'];

    const random = Math.floor(Math.random() * optionComputer.length);
    let shootBot = optionComputer[random];
    document.getElementById('AiImg').src = "./images/"+shootBot+".svg";

    round += 1;

    const a = shootPlayer;
    const b = shootBot;

    let sR = 0 ;
    let txt = '';

            if( a === b ){
               sR =  0; txt = 'tie'
            }else if ( a === 'rock' && b === 'hand'){
               sR = - 30; txt = 'lost'
            } else if ( a === 'rock' && b === 'scissors'){
            sR =  100; txt = 'win'
            }else if ( a === 'hand' && b === 'scissors'){
            sR = - 30; txt = 'lost'
            }else if ( a === 'hand' && b === 'rock') {
            sR =  100 ; txt = 'win'
            }else if ( a === 'scissors' && b === 'rock'){
            sR = - 30; txt = 'lost'
            }else if ( a === 'scissors' && b === 'hand') {
            sR =  100; txt = 'win'
            }
        
            score = score+sR;

            let gameNum = (localStorage.length);
    
            document.getElementById('playN').innerHTML = `
            game #${gameNum +1}</br> 
            round #${round}</br>
             total pts.${(score)}`;
    
            if (round === 10){
                round = 0;

                if(points.length >= 5){
                    points.pop();
                    points.unshift(score);
                } else{
                    points.push(score);
                }
                localStorage.removeItem('points')
                localStorage.setItem('points', JSON.stringify(points));
                let arrPoints = JSON.parse(localStorage.getItem('points'));

                let st = '';

                for (let i = 0; i < arrPoints.length; i++){
                     st += `(#${i}) ${arrPoints[i]}<br>`;
                }
                document.getElementById('resNum').innerHTML = st;
                score = 0
            }
}

    window.addEventListener('DOMContentLoaded', (event) => {
        let arrPoints = JSON.parse(localStorage.getItem('points'));

        let st = '';

        for (let i = 0; i < arrPoints.length; i++){
             st += `(#${i}) ${arrPoints[i]}<br>`;
        }
        document.getElementById('resNum').innerHTML = st;
    });


    
    



