const todo = document.getElementById("todo");

todo.addEventListener('click', ()=>{
    todo.style.textDecoration = "line-through";
    todo.style.backgroundColor = 'green';
    alert("Task completed")
})