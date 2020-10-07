var ele = document.createElement("div");
var dragondamage= 0;
function writeSomething(damage,attacktype){
    document.body.appendChild(ele);
  if(attacktype=="fire"){
    dragondamage = dragondamage + (damage - 1);
  }
  if(attacktype=="ice"){
    dragondamage = dragondamage + (damage + 1);
  }
  else{
    dragondamage = dragondamage + damage;
  }
  ele.innerHTML= dragondamage + " dragon's health";
  if(dragondamage>=10){
  ele.innerHTML=" user wins";
}
}

document.body.querySelector(".Fire").addEventListener("click", function(){
  writeSomething(3,"fire");
});
document.body.querySelector(".Ice").addEventListener("click", function(){
  writeSomething(1,"ice");
});
document.body.querySelector(".Poison").addEventListener("click", function(){
  writeSomething(4,"poison");
});