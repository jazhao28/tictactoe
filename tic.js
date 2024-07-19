
let restart = document.getElementById("restart");
restart.onclick = function(){

}
function main(){
    let box1 = document.getElementById("box1");
    let box2 = document.getElementById("box2");
    let box3 = document.getElementById("box3");
    let box4 = document.getElementById("box4");
    let box5 = document.getElementById("box5");
    let box6 = document.getElementById("box6");
    let box7 = document.getElementById("box7");
    let box8 = document.getElementById("box8");
    let box9 = document.getElementById("box9");
    let Xbtn = document.getElementById("Xbtn");
    let Obtn = document.getElementById("Obtn");
    let playerSymbol;
    let computerSymbol;
    let submitBtn = document.getElementById("submit");
    let winMsg = document.getElementById("winMsg");

    const boxes = [[box1,box2,box3],[box4,box5,box6],[box7,box8,box9]];
    submitBtn.onclick = function(){
        if(Xbtn.checked){
            playerSymbol = "X";
            computerSymbol = "O"
        }
        else if(Obtn.checked){
            playerSymbol = "O";
            computerSymbol = "X";
        }
        console.log(playerSymbol);
        console.log(computerSymbol);
    
    }
    const copyOfBoxes = [[box1,box2,box3],[box4,box5,box6],[box7,box8,box9]]
    for(let i = 0; i < boxes.length; i++){
        for(let j = 0; j < 3; j++){
            boxes[i][j].addEventListener("click", e =>{
                if(boxes[i][j].textContent == ""){
                    boxes[i][j].textContent = playerSymbol;
                    if(checkWin(boxes,playerSymbol,computerSymbol)){
                        winMsg.textContent = "Player has won";
                        //popup msg
                    }
                    else if(checkFullness(boxes,playerSymbol,computerSymbol)){
                        winMsg.textContent = "Tie";
                        //popup msg
                    }
                    else{
                        aiMove(boxes,playerSymbol,computerSymbol);
                    }
                }
                
                
                 // fix logic here where ai can move even though player can select same spot still 
                
                //check win
                // check if full
                // otherwise pass remaninig spaces for ai to fill
                // copyOfBoxes.remove(boxes[i]);
                // ai robot choose
            })
        }
    }

}

function checkFullness(boxes){
    let symbolCount = 0;
    for(let i = 0; i < boxes.length;i++){
        for(let j = 0; j < boxes.length; j++){
            if(boxes[i][j].textContent != ""){
                symbolCount++;
            }
        }
    }
    if(symbolCount == 9){
        return true;
    }
    return false;
}


function checkWin(boxes,playerSymbol,computerSymbol){
    if(checkHorizontal(boxes,playerSymbol,computerSymbol) || checkVertical(boxes,playerSymbol,computerSymbol) || checkDiagonal(boxes,playerSymbol,computerSymbol)){
        return true;
    }
    return false;

}

function checkHorizontal(boxes,playerSymbol,computerSymbol){
    
    for(let i = 0; i < boxes.length; i++){
        let playerCount = 0;
        let aiCount = 0;
        for(let j = 0; j < 3; j++){
            if(boxes[i][j].textContent == playerSymbol){
                playerCount++;
            }
            else if(boxes[i][j].textContent == computerSymbol){
                aiCount++;
            }
        }
        if(playerCount == 3 || aiCount == 3){
            return true;
        }
    }
    return false;
}
function checkVertical(boxes,playerSymbol,computerSymbol){
    let j = 0;
    while(j < 3){
        let playerCount = 0;
        let aiCount = 0;
        for(let i = 0; i < boxes.length; i++){
            if(boxes[i][j].textContent == playerSymbol){
                playerCount++;

            }
            else if(boxes[i][j].textContent == computerSymbol){
                aiCount++;
            }
        }
        if(playerCount == 3 || aiCount == 3){
            return true;
        }
        j++;
    }
    return false;

}
function checkDiagonal(boxes,playerSymbol,computerSymbol){
    if(checkLeftDiagonal(boxes,playerSymbol,computerSymbol) || checkRightDiagonal(boxes,playerSymbol,computerSymbol)){
        return true;
    }
    return false;

}

function checkLeftDiagonal(boxes,playerSymbol,computerSymbol){
    let i = 0;
    let j = 0;
    let playerCount = 0;
    let aiCount = 0;
    while(i < 3){
        if(boxes[i][j].textContent == playerSymbol){
            playerCount++;
        }
        else if(boxes[i][j].textContent == computerSymbol){
            aiCount++;
        }
        i++;
        j++;

    }
    if(playerCount == 3 || aiCount == 3){
        return true;
    }
    else{
        return false;
    }
    
}
function checkRightDiagonal(boxes,playerSymbol,computerSymbol){
    let i = 2;
    let j = 0;
    let playerCount = 0;
    let aiCount = 0;
    while(i >= 0){
        if(boxes[i][j].textContent == playerSymbol){
            playerCount++;
        }
        else if(boxes[i][j].textContent == computerSymbol){
            aiCount++;
        }
        i--;
        j++;
    }
    if(playerCount == 3 || aiCount == 3){
        return true;

    }
    else{
        return false;
    }

}
function aiMove(boxes,playerSymbol,computerSymbol){
    // randomize i between 1-3
    // randomize j between 1-3
    // if not empty randomize again
    let i = Math.floor(Math.random() * 3);

    let j = Math.floor(Math.random() * 3);
    let found = false;
    while(!found){
        if(boxes[i][j].textContent == ""){
            boxes[i][j].textContent = computerSymbol;
            boxes[i][j].style.color = "red";
            found = true;

        }
        else{
            i = Math.floor(Math.random() * 3);
            j = Math.floor(Math.random() * 3);
        }
    }

    if(checkWin(boxes,playerSymbol,computerSymbol)){
        winMsg.textContent = "Computer Won";
    }
    else if(checkFullness(boxes,playerSymbol,computerSymbol)){
        winMsg.textContent = "Tie game";
    }

   
    


}

main();

// testing if this is a branch 