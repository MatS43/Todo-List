export class todo {
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}
export class project {
    constructor(title, description,){
        this.title = title;
        this.description = description;
    }
}
export let todoArray = [];
export function createTodo(title,description,dueDate,priority){
    let newTodo = new todo(title, description, dueDate, priority);
    todoArray.push(newTodo);
}

