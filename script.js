const addToDoForm = document.querySelector('.add');
const ul = document.querySelector('.list-group');

//ADDING TODO'S TO THE UNORDERED LIST

function addToDo(todo){
   todo = addToDoForm.add.value ; 
   todo.toLowerCase();
   if  (todo.length){
    todo.trim();
    const html = `  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`

  
ul.innerHTML += html ; }

}

addToDoForm.addEventListener('submit' , function(element){


   element.preventDefault();
    addToDo();
    addToDoForm.reset(); 
    
})

//DELETING THE TODOS WHEN DELETE IS CLICKED

ul.addEventListener('click' , function(element){
if (element.target.classList.contains('delete')){
 
  element.target.parentElement.remove();
 
}
})

// SEARCHING FOR TODOS
const search = document.querySelector('.search');

function onkeyup(value){
value = search.search.value ;

Array.from(ul.children).filter(function(everylistitem){
return !everylistitem.textContent.toLowerCase().includes(value)
}).forEach(function(item){
item.classList.add('filtered'); 
})

Array.from(ul.children).filter(function(everylistitem){
  return everylistitem.textContent.toLowerCase().includes(value)
  }).forEach(function(item){
  item.classList.remove('filtered');
  }) 
}
search.addEventListener('keyup' , function(element){
onkeyup();
})

