import classes from "./Auth.module.css";
import Form from "./Form/Form";
import { useHistory } from "react-router-dom";
import axios from "../../../axios";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../../../redux/actions/notes";
const Auth = () => {
    const dispatch = useDispatch();
    const notes = useSelector(state => state.notes)
    const history = useHistory()
    function cancelCallback() {
        history.replace('/');
    }
    function submitCallback(event) {
        const data = new FormData(event.target);
        axios.post('/orders.json', Object.assign({
            name: data.get('name'),
            address: data.get('address'),
            phone: data.get('phone'),
            composition_name: data.get('compName'),
            notes: notes})
        ).then(response => {
            history.replace('/');
            dispatch(clear());
        });
        
        event.preventDefault();
    }
    return (<div className={classes.Auth}>
        <Form cancel={cancelCallback} submit={submitCallback} />
    </div>);
}

export default Auth;