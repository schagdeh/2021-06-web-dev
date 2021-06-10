import { NONAME } from "dns"

const appDiv = document.getElementById('app')


if (!(appDiv instanceof HTMLDivElement)) {
  throw new Error('No element with Id "app" found')
};

type State = {
  title: string;
  done: boolean;
}[];

const checkboxInput = document.createElement('input');
checkboxInput.setAttribute('type', 'checkbox');
const boolCheckboxInput = checkboxInput.checked

const toDoes: State = [
  {title: 'TypeScript', done: false},
  {title: 'ReactJS', done: false},
  {title: 'NodeJS', done: false},
  {title: 'ExpressJS', done: false},
] 

const render = () => {
  appDiv.innerHTML = "";

  const toDoUl = document.createElement('ul');
  toDoUl.setAttribute('class', 'ulStyle');

  
  const checkboxInput = document.createElement('input');
checkboxInput.setAttribute('type', 'checkbox');

const todoInput = document.createElement('input');
  todoInput.setAttribute('type', 'text');

  const btn = document.createElement('button');
  btn.textContent = "Button"

  btn.onclick = () => {
    const userInput = todoInput.value
    toDoes.push({
      title: userInput,
      done: false
    })
    render()
  }

  

  

  for(const toDo of toDoes) {
    const toDoLi = document.createElement('li');
    toDoLi.setAttribute('class', 'listStyle')
    const p = document.createElement('p');
    p.setAttribute('class', 'pStyle')
    const span = document.createElement('input');
    span.setAttribute('type', 'checkbox');
    toDoLi.appendChild(p)
    toDoLi.appendChild(span)
    p.textContent = toDo.title
    span.textContent = toDo.done.toString()
    toDoUl.appendChild(toDoLi)
    console.log(toDoLi);

  }
  appDiv.appendChild(toDoUl)
  appDiv.appendChild(todoInput)
  appDiv.appendChild(btn)

}; 

render();