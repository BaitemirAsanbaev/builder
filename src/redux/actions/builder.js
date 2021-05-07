import { ADD_NOTE, REMOVE_NOTE, CLEAR_NOTE, LOAD_NOTE} from './types';

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

export const load = (loadedSong) => ({
    type: LOAD_NOTE,
    loadedSong: loadedSong,
});