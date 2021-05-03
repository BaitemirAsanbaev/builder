import classes from "./Auth.module.css";
import Form from "./Form/Form";
import { useHistory } from "react-router-dom";
const Auth = () => {
        let history = useHistory()
        function cancelCallback() {
        history.replace('/');
        }
    return ( <div className={classes.Auth}>
        <Form cancel = {cancelCallback}/>
    </div> );
}
 
export default Auth;