var itemlist = document.querySelector('.items');
var additems = document.querySelector('.add');
var checklist = document.querySelector('.unknown_Area');

class Item{
    constructor(name){
        this.create(name);
    }
    create(name){
        var li = document.createElement('div');
        li.classList.add('item');
        var input = document.createElement('input');
        input.classList.add('item_input');
        input.type = "text";
        input.disabled = true;
        input.value = name;
        var remove = document.createElement('button');
        remove.classList.add('remove');
        remove.innerHTML= '<i class = "fas fa-trash"></i>';
        remove.addEventListener('click',() => this.remove(li));

        checklist.appendChild(li);
        li.appendChild(input);
        li.appendChild(remove);
 }
     remove(li){
         checklist.removeChild(li);
     }
}

additems.addEventListener("click",check);

window.addEventListener("keydown",(e) => {

if(e.which == 13){
    check();
}
} );

function check(){

if(itemlist.value != ""){
    new Item(itemlist.value);
    itemlist.value = "";
   }
}
function removeAll(){

    checklist.innerHTML= "";
}










