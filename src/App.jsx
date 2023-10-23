import { useState } from 'react'
import './App.css'
import {createStore} from 'redux'
import {thunkRedux} from 'redux-thunk'



// function App() {

// let BUY_Cockes='BUY_Cockes';

// function cackes(){
//   return {
// type: BUY_Cockes,
// id:"first redux action"
//   }
// }
// let inialesState = {
//   numOfCakes:10
// }
// let reducer = (state = inialesState,action)=>{
//   switch(action.type){
//   case BUY_Cockes:return{
//     ...state,
//     numOfCakes:state.numOfCakes - 1
//   }
//   // default:
//   //   return state
//   }
// }
// let store = createStore(reducer)
// // console.log("update State", store.getState())
// let unsubscribe = store.subscribe(()=>   console.log("update State", store.getState()))
//   // so you are exited
// store.dispatch(cackes())
// // store.dispatch(cackes())
// // store.dispatch(cackes())
// // unsubscribe()

// // unsubscribe();
//   return (
//     <>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more 
//       </p>
//     </>
//   )
// }






























function App() {

const Fetch_To_Introdauct = "Fetch_To_Tntrodauct"
const Fetch_To_Successful = "Fetch_To_Successful"
const Fetch_To_Filed = "Fetch_To_Filed"

let option_To_Introdauct = ()=>{
return {
type:Fetch_To_Introdauct,
}
}

let option_To_Successful = (users)=>{
  return {
    type:Fetch_To_Successful,
    pyload:users
    }
}

let option_To_Error = (error)=>{
  return {
    type:Fetch_To_Filed,
    pyload:error
    }
}

let initialState = {
  loading:false,
  users:[],
  error:''
}

return (
<p className="read-the-docs">
Click on the Vite and React logos to learn more 
</p>

)
}
export default App
