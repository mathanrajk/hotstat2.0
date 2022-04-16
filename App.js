import React from "react";
import MaterialTab from "./navigation";
import { createStore } from "redux";
import { Provider } from "react-redux";

const reducer = (state = {
  menu: "close",
  log: ""


}, action) => {

  switch (action.type) {
      case "OPENMENU":
          {
              return {...state, menu: "open" }
          }
      case "CLOSEMENU":
          {
              return {...state, menu: "close" }
          }

        case "LOG":{
return {...state, log :action.email}

        }
        case "OPENLOGIN" :{
          return { ...state,menu: "openlogin" }
        } 
        case "CLOSELOGIN" :{
          return {...state, menu: "closelogin" }
        } 

      default:
          return state;





  }


}
const database = createStore(reducer);


 export default class App extends React.Component {
   render() {
     return(
      <Provider store = { database }>
      <MaterialTab/>
      </Provider>
     );
   }
 }