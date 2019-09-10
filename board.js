    class Board{ 
        constructor(){
            this.current_player="X";
        }
        
        setCurrentPlayer(cp){
            this.current_player=cp;
        }
        
        getCurrentPlayer(){
            return this.current_player;
        }
        
        load(){
            var btn = document.getElementById('btn-submit');
            var reset = document.getElementById('game-reset');
            var that = this;
            if(btn){
                btn.addEventListener('click',function(e){ 
                    e.preventDefault();    
                    return that.validateForm();
                    
                });
            }
            
            if(reset){
                reset.addEventListener('click',function(){
                    window.location.reload(true);
                });
            }
        }
        
        validateForm() {
            var a = document.forms["input-form"]["myInput"].value;
            if (a == "") {
                alert("Name must be filled out");
                document.forms["input-form"]["myInput"].focus(); 
                return false;
            }else {
                var numbers = /^[0-9]+$/;
                if(!a.match(numbers))
                {
                    alert('Enter Numeric Values Only'); 
                    document.forms["input-form"]["myInput"].focus(); 
                    return false;
                }else{
                    
                    var num=parseInt(a);   
                    var board=[];
                    for(let i=0;i<num;i++){
                        board.push(["",""]);
                    }
                    
                    document.getElementById('game-reset').style.visibility="visible";
                    document.getElementById('result').innerHTML="";
                    document.getElementById('player-info').innerHTML="You are Player:"+"X";
                    document.getElementById('player-turn').innerHTML="Player Turn:" +"X";
                    this.setCurrentPlayer("X");
                    Board.prototype.setCounter(0);
                    
                    var table = document.getElementById('grid-table');
                    table.innerHTML="";
                    for (let i = 0; i <num;i++) {
                        let row = document.createElement("tr");	
                        for(let j=0;j<num;j++){
                            var cell=document.createElement("td");
                            cell.setAttribute("data-x",i);
                            cell.setAttribute("data-y",j);
                            cell.setAttribute("class","gameClick");
                            cell.addEventListener("click",function(event){
                                b.gameCheck(event,num,board);
                            });
                            row.appendChild(cell);
                        }
                        table.appendChild(row);
                    }
                    return false;
                }
            }
        } 
        
        gameCheck(event,num,board){
            var c = event.target;
            if(c.innerHTML!=""){
                return false;
            }
            
            if(b.getCurrentPlayer()=="X"){
                c.innerHTML=b.getCurrentPlayer();
                b.setCurrentPlayer("O");
                document.getElementById('player-turn').innerHTML="Then =>"+"Player"+ " "+b.getCurrentPlayer(); +" "+ "Turn";
                
            }else if(b.getCurrentPlayer()=="O"){
                c.innerHTML=b.getCurrentPlayer();
                b.setCurrentPlayer("X");
                document.getElementById('player-turn').innerHTML="Next =>"+"Player"+ " "+b.getCurrentPlayer(); +" "+ "Turn";
            }
            
            let xPos=c.getAttribute("data-x");
            let yPos=c.getAttribute("data-y");
            
            let xCor=parseInt(xPos);
            let yCor=parseInt(yPos);
            
            
            board[xCor][yCor]= c.innerHTML;
            var counterFunc=Board.prototype.getCounter();
            game = new Game();
            
            ( game.leftDiagonal(board,num)|| game.rightDiagonal(board,num)||
            game.checkRow(board,num)||game.checkColumn(board,num)||
            game.checkDraw(board,counterFunc,num)
            );
            
            Board.prototype.setCounter(counterFunc);
            
        } 
        
    }
    
    window.onload = function(){
        var b= new Board();
        b.load();
        
    };
    
    Board.prototype.setCounter = function (count) {    
        Board.counter=count+1;
    };
    Board.prototype.getCounter = function () {    
        return Board.counter;
    };
    
    Board.counter =1;
    
    
    
    
    
    
    