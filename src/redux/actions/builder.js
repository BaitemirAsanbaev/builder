import { ADD_NOTE, REMOVE_NOTE, CLEAR_NOTE} from './types';

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