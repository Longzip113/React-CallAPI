import * as types from "../constants/ActionStyle";
import { findIndex } from "lodash";

var initialState = [];

const myReducer = (State = initialState, action) => {
    switch(action.type){
      case types.FETCH_PRODUCT:
        State = action.product;
        return [...State];
      case types.ADD_PRODUCT:
        State.push(action.product);
        return [...State];
      case types.DELETE_PRODUCT:
        var index = findIndex(State, (item) => {
          return item.id === action.id;
        })
        State.splice(index, 1);
        return [...State];
      default: 
        return [...State];
    }
}

export default myReducer;


