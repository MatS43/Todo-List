import "./styles.css";
import {todo,project,createTodo,todoArray} from "./logic.js";



let addTodo = document.querySelector(".addTodo");
const modalTodo = document.querySelector("[data-modal-todo]")
const closeModalTodo = document.querySelector("[data-modal-todo-close]")
const addProject = document.querySelector(".addProject")
const modalProject = document.querySelector("[data-modal-project]")
const closeModalProject = document.querySelector("[data-modal-project-close]")
addTodo.addEventListener("click", ()=>{
    modalTodo.showModal()
})
closeModalTodo.addEventListener("click", ()=>{
    event.preventDefault()
    modalTodo.close();
})
addProject.addEventListener("click", ()=>{
    modalProject.showModal();
})
closeModalProject.addEventListener("click", ()=>{
    event.preventDefault()
    modalProject.close();
})
const submitTodo =document.querySelector("#submitTodo");
submitTodo.addEventListener("click",()=>{
    event.preventDefault();
    let Todotitle=document.querySelector("#Todotitle");
    let Tododescription= document.querySelector("#Tododescription");
    let Tododate=document.querySelector("#Tododate");
    let Todoradio=document.querySelector('input[name="Todoradio"]:checked');
    createTodo(Todotitle.value,Tododescription.value,Tododate.value,Todoradio.value);
    console.log(todoArray);
    modalTodo.close();
})