class Result{

        result(player,board,num){
            document.getElementById('result').innerHTML= 'Player'+ " "+ player +" " +'wins';
            var p=document.getElementsByClassName('gameClick');
            for (var x=0;x<p.length;x++){
                p[x].innerHTML= "";
            }
            document.getElementById('player-turn').innerHTML="";
            for(let i=0;i<num;i++){
                board.pop(); 	
        }
    }
}
    


