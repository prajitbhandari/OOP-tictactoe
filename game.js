class Game extends Board{
    leftDiagonal(board,num){
        let lcount=1;
        for(let i=0;i<num-1;i++){
            for(let j=0;j<num-1;j++){
                if(i==j){
                    if((board[i][j]==board[i+1][j+1])){
                        lcount=lcount+1;
                        if(lcount==num){
                            new Result().result(board[i][j],board,num);
                            return true;
                            break;
                        }	
                    }
                }		
                
            }												
        }
    
    }
    
    rightDiagonal(board,num){
        let rcount=1;
        for(let i=0;i<num-1;i++){
            for(let j=0;j<num;j++){
    
                if(i+j==num-1){
                    if(board[i][j]!=""){
                        if((board[i][j]==board[i+1][j-1])){
                            rcount=rcount+1;
                            if(rcount==num){
                                new Result().result(board[i][j],board,num);
                                return true;
                                break;
                            }	
                        }
                    }
                }		
                
            }
        }
    }
    
    checkRow(board,num){
        let xcount=1;
        let ycount=1;
        for(let i=0;i<num;i++){
            for(let j=0;j<num-1;j++){
                if((board[i][j]=="X" && board[i][j+1]=="X")){      
                    xcount=xcount+1;
                    console.log("Vlue of xrowcount is"+xcount);
                    if(xcount==num){
                        console.log("X le jito");
                        new Result().result(board[i][j],board,num);
                        return true;
                        break;
                    }
                }else if((board[i][j]=="O" && board[i][j+1]=="O")){  
    
                    ycount=ycount+1;
                    console.log("Vlue of yrowcount is"+ycount);
                    if(ycount==num){
                        console.log("O le jito");
                        new Result().result(board[i][j],board,num);
                        return true;
                        break;
                    }
                }
    
            }
            xcount=1;
            ycount=1;
    
        }
    }
    
    checkColumn(board,num){
        let xcount=1;
        let ycount=1;
        for(let i=0;i<num;i++){	
            for(let j=0;j<num-1;j++){
                if((board[j][i]=="X" && board[j+1][i]=="X")){    
                    xcount=xcount+1;
                    console.log("Vlue of xcoulmncount is"+xcount);
                    if(xcount==num){
                        new Result().result(board[j][i],board,num);
                        return true;
                        break;
                    }
                }
                else if((board[j][i]=="O" && board[j+1][i]=="O")){  
                    ycount=ycount+1;
                    console.log("Value of ycolumncount is"+ycount);
                    if(ycount==num){
                        new Result().result(board[j][i],board,num);
                        return true;
                        break;
                    }																								
                }
            }
            xcount=1;
            ycount=1;												
    
        }
    
    }
    
    checkDraw(board,getCounter,num){
        if(getCounter==num*num){
            if(game.leftDiagonal(board,num)!=true || game.rightDiagonal(board,num)!=true || 
            game.checkRow(board,num)!=true ||game.checkColumn(board,num)!=true){
                alert("Game is Tied");
                var p=document.getElementsByClassName('gameClick');
                for (var x=0;x<p.length;x++){
                p[x].innerHTML= "";
            }
                for(let i=0;i<num;i++){
                    board.pop();
                }
    
            }
        }
    
    }
}
 
var game=new Game();