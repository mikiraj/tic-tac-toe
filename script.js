function Gameboard(){
  let gameBoardArray=[];


    for(let i = 0 ; i < 3 ; i++){
    gameBoardArray[i]= [];
    for(let j = 0 ; j < 3 ; j++){
      gameBoardArray[i][j]="";
      
    }
  }
  console.log(gameBoardArray);
  let getBoard=()=>gameBoardArray;
      //const printBoard = () => {}

  // let setBoard=()=>;
    const setBoard =(number,sign)=>{
      if(number>=0 && number<=2){
        gameBoardArray[0][number]=sign;
      }
      else if(number>=3 && number<=5){
        gameBoardArray[1][number-3]=sign;
      }
      else{
        gameBoardArray[2][number-6]=sign;
      }

    }

return{getBoard,setBoard};
};


let board = Gameboard();
function game(){
  let boardPieces = document.getElementsByClassName("piece");
  let scoreBoardPlayer1 = document.getElementById("player-one");
  let scoreBoardPlayer2 = document.getElementById("player-two");
  
}

winningConditionCheck(board.getBoard());

function winningConditionCheck(arr){
  let winner
  for(let i=0; i<3; i++){ //looking at rows
  if(arr[i][0]==arr[i][1] && arr[i][1]==arr[i][2]){
    if(arr[i][0]=="X"){
      console.log(i+" row");
      winner = "Player1";
      console.log(winner);
      //return;

    }else if(arr[i][0]=="O"){
      console.log(i+" row");
      winner = "Player2";
      console.log(winner);
      //return;
    }
  }
  }
  for(let j=0; j<3; j++){ //looking arr columns
    if(arr[0][j]==arr[1][j] && arr[1][j]==arr[2][j]){
      if(arr[0][j]=="X"){
      winner = "Player1"
      console.log(j+" column");
      console.log(winner);
      //return;

    }else if(arr[0][j]=="O"){
      winnder = "Player2"
      console.log(j+" column");
      console.log(winner);
      //return;

    }

    }
  }

  if(arr[0][0]==arr[1][1] && arr[1][1]==arr[2][2]){
    if(arr[0][0]=="X"){
      winner = "Player1"
      console.log("\\");
      console.log(winner);
      //return;
    }else if(arr[0][0]=="O"){
      winner = "Player2"
      console.log("\\");
      console.log(winner);
      //return;
    }
  }

  if(arr[0][2]==arr[1][1] && arr[1][1]==arr[2][0]){
    if(arr[1][1]=="X"){
      winner = "Player1"
      console.log("/");
      console.log(winner);
      //return;
    }else if(arr[1][1]=="O"){
      winner = "Player2"
      console.log("/");
      console.log(winner);
      //return;
    }
  }


}
