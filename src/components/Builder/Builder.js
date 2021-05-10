import { Route, Switch } from "react-router";
import Auth from "../Content/Auth/Auth";
import Content from "../Content/Content";
import Orders from "../Content/Orders/Orders";
import Songs from "../Content/Songs/Songs";
import NotFound from "../UI/NotFound/NotFound";
import classes from "./Builder.module.css";


const Builder = () => {
  return (<div className={classes.Builder}>
    <Switch>
      <Route exact path="/songs" component={Songs} />
      <Route exact path="/auth" component={Auth} />
      <Route exact path="/orders" component={Orders} />
      <Route exact path="/" component={Content}/>
      <Route path="/" component={NotFound}/>
    </Switch>
  </div> );
}

export default Builder;