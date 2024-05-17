const phch = document.querySelector(".phch");
const coch = document.querySelector(".coch");
const rk = document.querySelector(".rk");
const ppr = document.querySelector(".ppr");
const sisr = document.querySelector(".sisr");

function playerChoiceDisplayRk(){
    
    phch.appendChild(rk.cloneNode(true));
   

    
}
function playerChoiceDisplayPPR(){
    
    phch.appendChild(ppr.cloneNode(true));

    
}
function playerChoiceDisplaySISR(){
    
    phch.appendChild(sisr.cloneNode(true));

    
}



function computerChoiceDisplayRK(){
    coch.appendChild(rk.cloneNode(true));
}
function computerChoiceDisplayPPR(){
    coch.appendChild(ppr.cloneNode(true));
}
function computerChoiceDisplaySISR(){
    coch.appendChild(sisr.cloneNode(true));
}

function swwitch(x,y){
    switch(x){
        case 1 : playerChoiceDisplayRk();
        break
        case 2 : playerChoiceDisplayPPR();
        break
        case 3 : playerChoiceDisplaySISR();
        break
        
    }
    
    switch(y){
        case 1 : computerChoiceDisplayRK();
        break
        case 2 : computerChoiceDisplayPPR();
        break
        case 3 : computerChoiceDisplaySISR();
        break

    }

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
  function computerch(){
    let cc=Math.floor(Math.random() * 3)+1;;
    return cc
    
  }
  
  
  
  
  let ph=0,ch=0,ti =0;
  function winneer(w){
      const wintext= document.querySelector(".wintext");
      if (w=='p'){
          ph++
          wintext.textContent="player win +1";
    }else if(w=='c'){
        ch++
        wintext.textContent="computer win +1";
    }else if(w=='t'){
        ti++
        wintext.textContent="tie !!!";}

    if(ch>=3){
        wintext.textContent="computer wins !!!!!!!";
        alert("computer wins !!!!!!!");
        window.location.reload();
    }else if(ph>=3){
        wintext.textContent="player wins !!!!!!!";
        alert("player wins !!!!!!!");
        
        window.location.reload();
    }else if(ti>=3){
        wintext.textContent="tie !!!!!!";
        alert("tie !!!!!!");
            window.location.reload();}

  }
  
  
  function test(a){

      let b =computerch();
      let winner= logic(a,b)
      swwitch(a,b);
      console.log(`player ${a}   computer  ${b}  `)
      console.log(winner);
      winneer(winner);
      
    }
    
    const btnInput = document.querySelectorAll("button");
    


  btnInput.forEach((button) => {
    button.addEventListener("click", () => {
      let x=button.className
      switch(x){
        case "rk": test(1);
        break
        case "ppr": test(2);
        break
        case "sisr": test(3); 
        break
      }
      
    });
  });


  






