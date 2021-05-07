import axios from '../../axios';
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


const loadNote = (state, action) => {
  let newState = [...state]
  axios.get('/examples.json').then(response =>{
    switch (action.loadedSong) {
      case 'deathnote':
        newState = (response.data.deathnote)
        break;
      case 'happybday':
        newState = (response.data.happybday)
        break;
      case 'harrypotter':
        newState = (response.data.harrypotter)
        break;
      case 'cancan':
        newState = (response.data.cancan)
        break;
      case 'wellerman':
        newState = (response.data.wellerman)
        break;
        
      default:
        break;
    }
  })
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
      
      return loadNote(state, action);
  
    default:
      break;
  }

  return state;
}

export default builderReducer;