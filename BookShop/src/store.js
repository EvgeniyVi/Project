import { createStore } from 'redux'

function f(state=[], action) {
    switch (action.type) {
        case 'ADD_TODO' :
            return state.concat([action.text]);
        default:
            return state
    }
}

let store = createStore(f,['USE REDUX'])

store.dispatch({
        type : 'ADD_TODO',
        text : "HEllo"
})

console.log(store.getState())