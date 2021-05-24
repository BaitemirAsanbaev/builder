import classes from "./Auth.module.css";
import Form from "./Form/Form";
import { useHistory } from "react-router-dom";
import axios from "../../../axios";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../../../redux/actions/notes";

//component
const Auth = () => {


  const {token, id} = useSelector(state => state.auth)
  //dispatch and selector constants
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes)

  //uses history
  const history = useHistory()

  //cancel function
  function cancelCallback() {
    history.replace('/');
  }

  //submit function
  function submitCallback(event) {
    const data = new FormData(event.target);
    axios.post('/orders.json?auth=' + token, Object.assign({
      name: data.get('name'),
      address: data.get('address'),
      phone: data.get('phone'),
      composition_name: data.get('compName'),
      notes: notes,
      userID: id
    })
    ).then(() => {
      history.replace('/');
      dispatch(clear());
    });

    //clear url
    event.preventDefault();
  }

  //JSX
  return (<div className={classes.Auth}>
    <Form cancel={cancelCallback} submit={submitCallback} />
  </div>);
  
}

export default Auth;