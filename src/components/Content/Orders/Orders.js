import classes from "./Orders.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Order from "./Order/Order";
import { load } from "../../../redux/actions/orders";

//component
const Orders = () => {

    //dispatch and selector constants
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders);
    const {token, id} = useSelector(state => state.auth);

    //loads orders
    useEffect(() => {
      dispatch(load(token, id));
    }, [dispatch, id, token]);
    
    //contains orders into result
    const results = orders.map(order => <Order key={order.id} {...order} />);
    

    //JSX
    return (
      <div className={classes.Orders}>
        {results}
      </div>
    );
}
 
export default Orders;