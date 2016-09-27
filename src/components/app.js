import React from 'react';
import ReactDOM from 'react-dom';


export default class TodoList extends React.Component{

  onSubmit(event){ //
    event.preventDefault()
    // debugger
    let action = {type: 'ADD_TODO', payload:{title: event.target.firstChild.value}
    }
    this.props.store.dispatch(action)
    event.target.firstChild.value = ''
  }

  onDelete(index){ //
    // debugger
    let action = {type: 'DELETE_TODO', index: index}
    this.props.store.dispatch(action)
  }

  render(){
  // debugger
    return(
      <div>
        <ul>
          {this.props.store.getState().map( (todo, index) => {
            return <li id={index}>{todo.title}
                      <button onClick= { () => {this.onDelete(index)}}> X </button>
                  </li>
            })
          }
        </ul>

        <form onSubmit={this.onSubmit.bind(this)}>
        <input type ='text'/>
        </form>
      </div>
    )
  }

}
