import Layout from "./components/Layout/Layout";
import "./App.css"
import Builder from "./components/Builder/Builder";
import Authent from "./components/Authent/Authent";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router";
import { restore } from "./redux/actions/auth";
import Logout from "./components/Logout/Logout";
function App() {

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.token !== null);

  useEffect(() => restore(dispatch), [dispatch]);

  let routesOutput = (
    <Switch>
      <Route path="/" exact component={Builder} />
      <Route path="/authent" component={Authent} />
      <Redirect to="/" />
    </Switch>
  );
  if (isAuthenticated) {
    routesOutput = (
      <Switch>
        <Route path="/" exact component={Builder} />
        <Route path="/authent" component={Authent} />
        <Route path="/logout" component={Logout} />
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
