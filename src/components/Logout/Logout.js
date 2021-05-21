
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/auth";

export default function Logout({ history }) {
  const dispatch = useDispatch();

  useEffect(() => {
    logout(dispatch);
    history.replace("/");
  }, [dispatch, history]);

  return null;
}