const input = document.getElementById("new-task-description");
const btn = document.getElementById("btn");
const ul = document.getElementById("tasks");
const li = document.createElement("li");

btn.addEventListener("click",function(e){
e.preventDefault()
const li = document.createElement("li");
li.innerHTML = input.value;
ul.append(li);
})