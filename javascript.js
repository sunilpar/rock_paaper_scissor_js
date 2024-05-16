
function playerch(){
    let player_choice =  prompt("enter Rock , Paper or scissor");
    let pc=choice(player_choice);
    return pc

}
function computerch(){
    let cc=rand();
    return cc
    
}

function logic(a ,b ){
    if(a==b){
        return 't'
    }
    if(a==1 && b==2){
        return 'c'
    }else if(a==2 && b==3){
        return 'c'
    }else if(a==3 && b==1){
        return 'c'

    }else if(a==2 && b==1){
        return 'p'
    }else if(a==3 && b==2){
        return 'p'
    }else if(a==1 && b==3){
        return 'p'
    }
}




function rand() {
    return Math.floor(Math.random() * 3)+1;
  }
  
  function choice(str) {

    switch(str){
        case 'rock':
             
            return 1
         

        case 'paper':
            return 2
          
        case 'scissor': 
            return 3
         
        default : return -1

    }
   
    
  }
  function ntow(n){
    if(n==1){
        return 'rock'
    }else if (n==2){
        return 'paper'
    }else if (n==3){
      return 'scissor'}else{
        return -1
      }
  }


 function main(){
        let win_count_p=0
        let win_count_c=0
    for(let i =0; i<= 4 ; i++){

        let a=playerch();
        let b=computerch();
        let a_c= ntow(a);
        let b_c= ntow(b);

        console.log(`        your choice : ${a_c}     computer choice : ${b_c}`);
    
        let win = logic(a,b)
       
       
        if(win=='p'){
            win_count_p ++
            console.log("you win this round");
            if(win_count_p>=3){
                break
            }
        }else if(win=='c'){
            win_count_c ++
            console.log("computer wins this round");
            if(win_count_c>=3){
                break
            }
        }else if(win=='t'){
            console.log("its tie !!!");
            i--
        }

    }
    console.log(`your number of wins in five round :${win_count_c}`);
    console.log(`computer number of wins in fic round :${win_count_p}`);

    if(win_count_p>win_count_c){
        alert("you win!!!");
    }else if(win_count_p<win_count_c){
        alert("you lose!!!");
    }
     
 }

 main();
  
