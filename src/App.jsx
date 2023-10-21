import { useState } from 'react'
import './App.css'
import {createStore} from 'redux'
function App() {

let BUY_Cockes='BUY_Cockes';

function cackes(){
  return {
type: BUY_Cockes,
id:"first redux action"
  }
}
let inialesState = {
  numOfCakes:10
}
let reducer = (state = inialesState,action)=>{
  switch(action.type){
  case BUY_Cockes:return{
    ...state,
    numOfCakes:state.numOfCakes - 1
  }
  default:return state
  }
}
let store = createStore(reducer)

let unsubscribe = store.subscribe(()=>   console.log("update State", store.getState()))
  // so you are exited
store.dispatch(cackes())
store.dispatch(cackes())

unsubscribe();
  return (
    <>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more 
      </p>
    </>
  )
}

export default App
