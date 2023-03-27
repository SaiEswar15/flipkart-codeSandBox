import "./Login.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../Store/authSlice";

import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const error = useSelector((state) => {
    return state.auth.iserror;
  });

  const login = useSelector((state) => {
    return state.auth.login;
  });

  useEffect(() => {
    // fetch(
    //   "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products"
    // )
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     dispatch(a.function1([data]));
    //   });

    if (login) {
      navigate("/navbar/dash");
    }
  }, [login, navigate]);

  function function1(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    if (
      data.get("email") === "saieswar@gmail.com" &&
      data.get("password") === "saieswar"
    ) {
      console.log("Logged in");
      dispatch(actions.function2());
    } else {
      console.log("error");
      dispatch(actions.function1());
    }
  }
  return (
    <div className="con">
      <div className="dec">
        <h1>Login</h1>
        <p>Get access to your orders, wishlist and cart</p>
      </div>
      <form onSubmit={function1}>
        <input type="text" placeholder="Enter your email" name="email" />
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
        />
        <button>Login</button>
        {error ? <p className="error">wrong password</p> : null}
      </form>
    </div>
  );
}
export default Login;
