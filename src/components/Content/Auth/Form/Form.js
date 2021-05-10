import classes from "./Form.module.css";
import Button from "../../../UI/Button/Button"

const Form = ({cancel, submit}) => {

    return ( <form onSubmit={submit}>

        <div className={classes.formdiv}>
            <label htmlFor="">Composition name</label>
            <input type="text" name="compName" id="compName" required/>
            <label htmlFor="">Name</label>
            <input type="text" name="name" id="name" required/>
            <label htmlFor="">Phone</label>
            <input type="phone" name="phone" id="phone" required pattern="0[0-9]{9}"/>
            <label htmlFor="">Address</label>
            <input type="text" name="address" id="address" required/>

            <div className={classes.btndiv}>
                <Button green="true" mt = 'true'>Checkout</Button>
                <Button onClick={cancel} red="true" mt = 'true'>Cancel</Button>
            </div>
        </div>

    </form> );
}
 
export default Form;