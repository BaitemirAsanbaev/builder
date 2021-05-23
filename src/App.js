import Layout from "./components/Layout/Layout";
import "./App.css"
import Authent from "./components/Authent/Authent";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router";
import { restore } from "./redux/actions/auth";
import Logout from "./components/Logout/Logout";
import Songs from "./components/Content/Songs/Songs"
import Auth from "./components/Content/Auth/Auth"
import Orders from "./components/Content/Orders/Orders"
import NotFound from "./components/UI/NotFound/NotFound"
import Content from "./components/Content/Content"

function App() {

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.token !== null);

  useEffect(() => restore(dispatch), [dispatch]);

  let routesOutput = (
    <Switch>
      <Route path="/" exact component={Content} />
      <Route path="/authent" component={Authent} />
      <Redirect to="/" />
    </Switch>
  );
  if (isAuthenticated) {
    routesOutput = (
      <Switch>
        <Route path="/authent" component={Authent} />
        <Route path="/logout" component={Logout} />
        <Route exact path="/songs" component={Songs} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/" component={Content}/>
        <Route path="/" component={NotFound}/>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    
    <div className="App">
      <Layout>
        {routesOutput}
      </Layout>
    </div>
  );
}

export default App;
