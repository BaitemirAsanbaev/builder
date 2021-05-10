import axios from '../../axios';
import { ADD_NOTE, REMOVE_NOTE, CLEAR_NOTE, SET_NOTE} from './types';

export const add = (note) => ({
    type: ADD_NOTE,
    note: note,
});

export const remove = () => ({
    type: REMOVE_NOTE,
});

export const clear = () => ({
    type: CLEAR_NOTE,
});

export const set = (data) => ({
    type: SET_NOTE,
    data: data
  });
  
export const load = (song) => {
    return (dispatch) => axios.get("/examples.json")
      .then(response =>{
          switch (song) {
            case 'deathnote':
                dispatch(
                  set(response.data.deathnote))
              break;

            case 'happybday':
                dispatch(
                  set(response.data.happybday))
              break;
              
            case 'harrypotter':
                dispatch(
                  set(response.data.harrypotter))
              break;

            case 'cancan':
                dispatch(
                  set(response.data.cancan))
              break;
        
            case 'wellerman':
                dispatch(
                  set(response.data.wellerman))
              break;
          
              default:
                break;
          }}
      )
      
  };