import { ADD_NOTE, REMOVE_NOTE, CLEAR_NOTE, LOAD_NOTE} from '../actions/types'

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
const loadNote = (action) => {
  const newState = [...action.loadedSong];
  return newState;
}


const builderReducer = (state = initialState, action) => {
  
  switch (action.type) {

    case ADD_NOTE:
      return addNote(state, action);

    case REMOVE_NOTE:
      return removeNote(state);

    case CLEAR_NOTE:
      return clearNote(state);

    case LOAD_NOTE:
      return loadNote(action);
  
    default:
      break;
  }

  return state;
}

export default builderReducer;