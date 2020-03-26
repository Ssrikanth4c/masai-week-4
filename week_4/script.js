var playerDetails= document.getElementById('playerDetails')

var mainContainer= document.createElement('div')
mainContainer.setAttribute('class', 'mainCont')
document.body.appendChild(mainContainer)

playerDetails.addEventListener('click', addDetails)

function addDetails(){

    //player 
    var playerDiv=document .createElement('div')
    playerDiv.setAttribute('class','player')
    //  label name and input
    var player1Name= document.createElement('p')
    player1Name.innerHTML='enter Player-1 Name:'
    
    var player2Name= document.createElement('p')
    player2Name.innerHTML='enter Player-2 Name:'

    var  p1Input= document.createElement('input','text')
    p1Input.setAttribute('id','p1Input')
    p1Input.setAttribute('name','p1Input')

    var  p2Input= document.createElement('input','text')
    p2Input.setAttribute('id','p2Input')
    p2Input.setAttribute('name','p2Input')

    // select symbol
    var p1SelectName=document.createElement('p')
    p1SelectName.innerText='choose Symbol'
    var p1Select= document.createElement('select')
    p1Select.setAttribute('id','p1Select')
    p1Select.setAttribute('name', 'p1Select')

    var p2SelectName=document.createElement('p')
    p2SelectName.innerText='choose Symbol'
    var p2Select= document.createElement('select')
    p2Select.setAttribute('id','p2Select')
    p2Select.setAttribute('name', 'p2Select')

    // symobls
    p1Option1= document.createElement('option')
    p1Option1.setAttribute('value', 'X')
    p1Option1.textContent='X'

    p1Option2= document.createElement('option')
    p1Option2.setAttribute('value', 'O')
    p1Option2.textContent='O'
    //append symbol options to  p1 select tag
    p1Select.append(p1Option1,p1Option2)
    
    p2Option1= document.createElement('option')
    p2Option1.setAttribute('value', 'X')
    p2Option1.textContent='X'

    p2Option2= document.createElement('option')
    p2Option2.setAttribute('value', 'O')
    p2Option2.textContent='O'
    //append symbol options to  p1 select tag
    p2Select.append(p2Option2,p2Option1)

    var pEnterBtn=document.createElement('button')
    pEnterBtn.setAttribute('id', 'pEnterBtn')
    pEnterBtn.textContent='Tic Tac Toe'
    //apped name,input, slect sym, button to p1--div
    playerDiv.append(player1Name, p1Input,player2Name, p2Input,p1SelectName,p1Select,p2SelectName,p2Select,pEnterBtn)

    

    //append to min container of the page
    mainContainer.append(playerDiv)

    p1Select.addEventListener('change',selectSym)
    p2Select.addEventListener('change',selectSym2)

    pEnterBtn.addEventListener('click', getPlayerDetails)
}

function selectSym(){

        if(event.target.value=='O'){
            p2Select.value='X'
        }else if(event.target.value=='X'){
            p2Select.value='O'
        }
    }
function selectSym2(){
    if(event.target.value=='O'){
        p1Select.value='X'
    }else if(event.target.value=='X'){
        p1Select.value='O'
    }
}


function getPlayerDetails(){
    // console.log(p1Input.value)
    var player1=p1Input.value
    var player2=p2Input.value
    var p1Sym= p1Select.value
    var p2Sym=p2Select.value

    // hide buttons
    var x=document.getElementsByClassName('mainCont')
    x[0].style.display='none';
    document.getElementById('playerDetails').style.display='none'
    // event.target.parentElement.hidden=true


    // create tic toc toe Grid
    var GameBoard=document.createElement('div')
    GameBoard.setAttribute('class', 'gameBoard')

    var board=document.createElement('div')
    board.setAttribute('id', 'board')
    var leftSide=document.createElement('div')
    leftSide.setAttribute('id', 'left')
    leftSide.innerHTML='<b>'+player1+'</b>'+'<br>'+p1Sym
    
    var rightSide=document.createElement('div')
    rightSide.setAttribute('id', 'right')
    rightSide.innerHTML='<b>'+player2+'</b>'+'<br>'+p2Sym
    
    
    for(var i=1;i<=9;i++){
        var div= document.createElement('div')
        div.setAttribute('id', 'item'+i)
        // div.textContent=i
        board.append(div)
    }

    GameBoard.append(leftSide,board,rightSide)
    document.body.append(GameBoard)
    
    var count=0, fillCell=0
    board.addEventListener('click', function(){
        if(count%2==0){
            if(event.target.textContent==''){
                event.target.textContent=p1Sym
                fillCell++
            }
            // console.log(event.target.textNode)
        }else{
            if(event.target.textContent==''){
                event.target.textContent=p2Sym
                fillCell++
            }
            console.log("odd")
        }
        count++

        //draw
        if(fillCell==9){
            alert('Tie')
            fillCell=0
            clearBoard(board)
        }

        var p2=0,p1=0,col1P1=0,col1P2=0,col2P1=0,col2P2=0,
            col3P1=0,col3P2=0,r2P2=0,r2P1=0,
            r3P2=0,r3P1=0,dia1P1=0,dia1P2=0,
            dia2P1=0,dia2P2=0
        //row1
        for(var i=0;i<3;i++){
            if(board.children[i].textContent==p2Sym){
               p2++
            }else if(board.children[i].textContent==p1Sym)
            {
                p1++
            }
            //row2
            if(board.children[i+3].textContent==p2Sym){
                r2P2++
            }else if(board.children[i+3].textContent==p1Sym)
            {
                r2P1++
            }
            // row3
            if(board.children[i+3*2].textContent==p2Sym){
                r3P2++
            }else if(board.children[i+3*2].textContent==p1Sym)
            {
                r3P1++
            }
            //col-1
            if(board.children[i*3].textContent==p2Sym){
               col1P2++
            }else if(board.children[i*3].textContent==p1Sym)
            {
                col1P1++
            }
            //col2
            if(board.children[i*3+1].textContent==p2Sym){
                col2P2++
            }else if(board.children[i*3+1].textContent==p1Sym)
            {
                col2P1++
            }
            // col3
            if(board.children[i*3+2].textContent==p2Sym){
                col3P2++
            }else if(board.children[i*3+2].textContent==p1Sym)
            {
                col3P1++
            }
            // diagonal 0 4 8
            if(board.children[i*4].textContent==p2Sym){
                dia1P2++
            }else if(board.children[i*4].textContent==p1Sym)
            {
                dia1P1++
            }
             // diagonal 2 4 6
             if(board.children[i*2+2].textContent==p2Sym){
                dia2P2++
            }else if(board.children[i*2+2].textContent==p1Sym)
            {
                dia2P1++
            }

            
        }
        
        

        if(p2==3 || col1P2==3 || col2P2==3|| col3P2==3||r2P2==3||r3P2==3||dia1P2==3||dia2P2==3){
            alert(player2+'\tWins')
            fillCell=0
           clearBoard(board)
           p2=0,col1P2=0,col2P2=0,col3P2=0,r2P2=0,r3P2=0,dia1P2=0,dia2P2=0
        }
        if(p1==3 || col1P1==3|| col2P1==3 ||col3P1==3||r2P1==3 ||r3P1==3||dia1P1==3||dia2P1==3 ){
            alert(player1+'\t Wins')
            clearBoard(board)
            fillCell=0
            p1=0,col1P1=0,col2P1=0,col3P1=0,r2P1=0,r3P1=0,dia1P1=0,dia2P1=0
        }
        
        console.log(item2.textContent)
    })
}

function clearBoard(board){
    for(var i=0; i<9; i++){
        board.children[i].innerText=''  
    }
}

