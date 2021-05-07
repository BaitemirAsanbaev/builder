  
import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = 'https://builder-a3cdc-default-rtdb.firebaseio.com';

export default instance;