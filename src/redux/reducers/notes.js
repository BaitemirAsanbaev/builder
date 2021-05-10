
import { ADD_NOTE, REMOVE_NOTE, CLEAR_NOTE, SET_NOTE} from '../actions/types'

const initialState = [];

const addNote = (state, action) => {
  const newState = [...state];
  newState.push(action.note);
  return newState;
}

const removeNote = (state) => {
  const newState = [...state];
  if (newState.length !== -1) {
    newState.splice(-1, 1);
  }
  return newState;
}

const clearNote = (state) => {
  let newState = [...state];
  newState = []
  return newState;
}


const notes = (state = initialState, action) => {
  let newState = [...state]
  switch (action.type) {

    case ADD_NOTE:
      return addNote(state, action);

    case REMOVE_NOTE:
      return removeNote(state);

    case CLEAR_NOTE:
      return clearNote(state);

    case SET_NOTE:
      newState = (action.data);
      return newState
    default:
      break;
  }

  return newState;
}

export default notes;