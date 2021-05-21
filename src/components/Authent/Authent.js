import React, { useState } from "react";
import { start, auth } from "../../redux/actions/auth";
import classes from "./Authent.module.css";
import Button from "../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useLocation } from "react-router-dom";

export default function Authent () {
  const dispatch = useDispatch();
  const [ method, setMethod ] = useState("signin");
  const { loading, error, token } = useSelector(state => state.auth);
  const location = useLocation();

  const formSubmitted = (event) => {
    start(dispatch);

    const data = new FormData(event.target);
    auth(dispatch, method, data.get('email'), data.get('password'));

    event.preventDefault();
  }
  console.log(error)
  let formOutput = "Loading...";
  if (!loading) {
    formOutput = (
      <form onSubmit={formSubmitted}>
        <h1>Welcome</h1>
        <input type="email" placeholder="E-mail" name="email" required />
        <input type="password" placeholder="Password" name="password" required minLength="6" />
        <Button onClick={() => setMethod('signin')} green>Sign in</Button>
        <Button onClick={() => setMethod('signup')} red>Sign up</Button>
      </form>
    );
  }

  let errorOutput = null;
  if (error) {
    errorOutput = <h4 className={classes.error}>{error.message}</h4>;
  }

  const [,redirect] = location.search.split('?');
  let redirectOutput = null;
  if (token !== null) {
    redirectOutput = <Redirect to={"/" + redirect ? redirect : ""} />;
  }

  return (
    <div className={classes.Auth}>
      {errorOutput}
      {formOutput}
      {redirectOutput}
    </div>
  );
};