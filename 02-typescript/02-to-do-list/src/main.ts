import { NONAME } from "dns"

const appDiv = document.getElementById('app')


if (!(appDiv instanceof HTMLDivElement)) {
  throw new Error('No element with Id "app" found')
};

type State = {
  title: string;
  done: boolean;
}[];

const toDoes: State = [
  {title: 'TypeScript', done: true},
  {title: 'ReactJS', done: true},
  {title: 'NodeJS', done: false},
  {title: 'ExpressJS', done: false},

] 

const render = () => {
  appDiv.innerHTML = "";

  const toDoUl = document.createElement('ul');
  toDoUl.setAttribute('class', 'ulStyle')
  

  for(const toDo of toDoes) {
    const toDoLi = document.createElement('li');
    toDoLi.setAttribute('class', 'listStyle')
    const p = document.createElement('p');
    p.setAttribute('class', 'pStyle')
    const span = document.createElement('span');
    toDoLi.appendChild(p)
    toDoLi.appendChild(span)
    p.textContent = toDo.title
    span.textContent = toDo.done.toString()
    toDoUl.appendChild(toDoLi)
    console.log(toDoLi);

  }
  appDiv.appendChild(toDoUl)
}; 

render();