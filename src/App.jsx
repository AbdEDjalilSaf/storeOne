import './App.css'
import  Navbar from "./features/postList.jsx"
// import {applyMiddleware, createStore} from 'redux'
// import thunkRedux from 'redux-thunk'
// import axios from 'axios'
// import {configureStore} from "@reduxjs/toolkit"







// import {PostsList} from "./features/PostsList"
// // function App() {

// // let BUY_Cockes='BUY_Cockes';

// // function cackes(){
// //   return {
// // type: BUY_Cockes,
// // id:"first redux action"
// //   }
// // }
// // let inialesState = {
// //   numOfCakes:10
// // }
// // let reducer = (state = inialesState,action)=>{
// //   switch(action.type){
// //   case BUY_Cockes:return{
// //     ...state,
// //     numOfCakes:state.numOfCakes - 1
// //   }
// //   // default:
// //   //   return state
// //   }
// // }
// // let store = createStore(reducer)
// // // console.log("update State", store.getState())
// // let unsubscribe = store.subscribe(()=>   console.log("update State", store.getState()))
// //   // so you are exited
// // store.dispatch(cackes())
// // // store.dispatch(cackes())
// // // store.dispatch(cackes())
// // // unsubscribe()

// // // unsubscribe();
// //   return (
// //     <>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more 
// //       </p>
// //     </>
// //   )
// // }






























// function App() {

// const Fetch_To_Introdauct = "Fetch_To_Tntrodauct"
// const Fetch_To_Successful = "Fetch_To_Successful"
// const Fetch_To_Filed = "Fetch_To_Filed"

// let option_To_Introdauct = ()=>{
// return {
// type:Fetch_To_Introdauct,
// }
// }

// let option_To_Successful = (users)=>{
//   return {
//     type:Fetch_To_Successful,
//     pyload:users
//     }
// }

// let option_To_Error = (error)=>{
//   return {
//     type:Fetch_To_Filed,
//     pyload:error
//     }
// }

// let initialState = {
//   loading:false,
//   users:[],
//   error:''
// }

// let reducer = ( state = initialState,action)=>{
// switch(action.type){
// case option_To_Introdauct:
//   return{
//     ...state,
//     loading:true
//   }
//   case option_To_Successful:
//   return{
//     loading:false,
//     users:action.pyload,
//     error:''
//   }
//   case option_To_Error:
//   return{
//     loading:false,
//     users:[],
//     error:action.pyload
//   }
// }
// }

// let fitchUser = ()=>{
//   return async function(dispatch){
//     dispatch(option_To_Introdauct())
//     try {
// let response = await axios.get('https://jsonplaceholder.typicode.com/photos');
// let products = await response.data
// products.map((user)=> console.log(user.title))
// dispatch(option_To_Successful);
// console.log(response.data);
//     }catch(err){
// dispatch(option_To_Error(err.message));
// console.log(err.message);
//     }
//   }
// }

// let store = createStore(reducer,applyMiddleware(thunkRedux))
// // store.subscribe(()=>{ console.log("state now",store.getState())})

// store.dispatch(fitchUser())

// return (
//   <>
// <p className="read-the-docs">
// Click on the Vite and React logos to learn more 
// </p>
// <h2 className="read-the-once">
// Click on the Vite and React logos to learn more 
// </h2>
// </>
// )
// }
// export default App


















function App() {
  <div className='bg-red-500'>

<h2>Hello Peaple</h2>
<Navbar />
<h2>Hello Peaple</h2>
</div>



}
export default App











