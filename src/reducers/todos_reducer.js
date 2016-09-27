export function todosReducer(state=[], action){
  //the reducer at the beginning is an empty arry of todos
  //the user will see an empty/no list but in terms of our storage > empty array
  switch(action.type){
    //get the new todo from the input bar - the action is a JS object
    case 'ADD_TODO':
    //we can attach stuff on to that action via action.payload
    // payload is the thing attached i.e. the todo
    //state.push(action.payload) <<< this doesn't work because push is destructive and then the reducer is no longer a pure function
      return [...state, action.payload];





    case 'DELETE_TODO':
      return [...state.slice(0, action.index),
              ...state.slice(action.index +1, state.length)
            ]

    default:
      return state;
  }
}


// let action = {type: 'ADD_TODO', payload: {title: 'Buy Milk'}}
// this.props.store.dispatch({
//
// })
