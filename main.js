menuListArray = ["Pizza Vegetariana",
"Pizza de Calabresa",
"Pizza de Margerita",
"Pizza de Mussarela",
"pizza de 4 Queijo"];

function getMenu(){
var htmldata ="";
menuListArray.sort();
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+ menuListArray[i] + '<br>'
}
document.getElementById("displayMenu").innerHTML = htmldata;
}

function addItem(){
var htmldata;
var imgtags= '<img id="im1" src="Freddy.webp"/>'
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata='';
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+imgtags+ menuListArray[i]+'<br>';
}
document.getElementById("displayAddedMenu").innerHTML=htmldata;
}

function AddIngredientes(){
var item=document.getElementById("addItem").value;
menuListArray.push(item);
document.getElementById("addItem").value = "";
addItem();
}