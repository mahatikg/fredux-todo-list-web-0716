import React from 'react';
import ReactDOM from 'react-dom';


import TodoList from './components/app'
import { createStore } from './store'
import {todosReducer} from './reducers/todos_reducer'

const myStore = createStore(todosReducer)


function render(){
  ReactDOM.render(< TodoList store={myStore}/>, document.getElementById('container'));
}
render();
myStore.subscribe( render );
