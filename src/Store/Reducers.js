import { ADD_WORD_TO_HISTORY } from "./actions";

const intialState = {
    history : [],
};
export default function rootReducer(state = intialState,action) {
    switch(action.type){
        case ADD_WORD_TO_HISTORY:
            return{...state,history:[...state.history,action.payload]};
        default : 
            return state;
    }
}