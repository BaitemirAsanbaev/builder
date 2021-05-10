import classes from "./Orders.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Order from "./Order/Order";
import { load } from "../../../redux/actions/orders";
const Orders = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders);
  
    useEffect(() => {
      dispatch(load());
    }, []);
  
    const results = orders.map(order => <Order key={order.id} {...order} />);
  
    return (
      <div className={classes.Orders}>
        {results}
      </div>
    );
}
 
export default Orders;