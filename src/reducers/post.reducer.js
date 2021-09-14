import {FETCH_POSTS, NEW_POST} from "../actions/types";

const initialState = {
  items: [],
  item: {}
}

export default function postReducer (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
      case FETCH_POSTS:
        return {
          ...state,
          items: action.payload
        };
      
      case NEW_POST:
        return {...state, 
          items: [...state.items, payload]
        };
      
  
      default:
          return state;
  }
}