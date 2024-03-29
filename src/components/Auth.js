import { authActions } from "../store/Slicer/AuthSlicer";
import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";

const Auth = () => {
  // const login = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section onSubmit={handleSubmit}>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
