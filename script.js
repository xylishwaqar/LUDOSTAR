// // function to edit the player name.

// function edit(){
//     var x=prompt("Type Player1 Name !!");
//     var y=prompt("Type Player2 Name !!");
//     document.getElementsByClassName("name")[0].innerHTML=x;
//     document.getElementsByClassName("name")[1].innerHTML=y;
// }

// //function to play or roll the dice.

// function play(){
//     var x=(Math.floor(Math.random()*6))+1;
//     var y=(Math.floor(Math.random()*6))+1;

//     var pictures=[];
//     pictures[1]="<img src='dice1.png'>";
//     pictures[2]="<img src='dice2.png'>";
//     pictures[3]="<img src='dice3.png'>";
//     pictures[4]="<img src='dice4.png'>";
//     pictures[5]="<img src='dice5.png'>";
//     pictures[6]="<img src='dice6.png'>";

//     if(x==y){
//         document.getElementById("dice1").innerHTML=pictures[x];
//         document.getElementById("dice2").innerHTML=pictures[y];
//         document.getElementById("result").innerHTML="MATCH DRAW !!";
//         document.getElementById("result").style.color="red";
//     }

//     else if(x>y){
//         document.getElementById("dice1").innerHTML=pictures[x];
//         document.getElementById("dice2").innerHTML=pictures[y];
//         document.getElementById("result").innerHTML= document.getElementsByClassName("name")[0].innerHTML+ " WINS !!";
//         document.getElementById("result").style.color="red";
//     }

//     else{
//         document.getElementById("dice1").innerHTML=pictures[x];
//         document.getElementById("dice2").innerHTML=pictures[y];
//         document.getElementById("result").innerHTML=document.getElementsByClassName("name")[1].innerHTML +" WINS !!";
//         document.getElementById("result").style.color="red";
//     }
// }

ludogame = () => { 
    const play1 = Math.floor(Math.random() * 6) + 1; 
    const play1dice = `images/dice${play1}.png`;
    document.getElementById('check1').setAttribute('src', play1dice);
   
    const play2 = Math.floor(Math.random() * 6) + 1; 
    const play2dice = `images/dice${play2}.png`;
    document.getElementById('check2').setAttribute('src', play2dice);
   
    if(play1 > play2) 
     { document.querySelector('h1').innerHTML="Player 1 won ";
    } else if(play1 < play2) {
      document.querySelector('h1').innerHTML="Player 2 won ";
    } else{ document.querySelector('h1').innerHTML="DRAW "; }
   }
   