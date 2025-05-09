import "./styles.css";
import {todo} from "./logic.js";
import {project} from "./logic.js";

let todoArray = [];
let addTodo = document.querySelector(".addTodo");
const modalTodo = document.querySelector("[data-modal-todo]")
const closeModalTodo = document.querySelector("[data-modal-todo-close]")
const addProject = document.querySelector(".addProject")
const modalProject = document.querySelector("[data-modal-project]")
const closeModalProject = document.querySelector("[data-modal-project-close]")
addTodo.addEventListener("click", ()=>{
    modalTodo.showModal()
    let newTodo = new todo("title", "description", "dueDate", "priority");
    todoArray.push(newTodo);
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