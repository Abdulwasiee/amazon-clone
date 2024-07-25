import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Auth.css";
import { auth } from "../../Utility/fireBase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { contextProvider } from "../../Data/DataProvider";
import { Type } from "../../Utility/action.type";
import ClipLoader from "react-spinners/ClipLoader";

function Auth() {
  const navigate = useNavigate();
  const location = useLocation();
  const { dispatch } = useContext(contextProvider);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });

  const authHandler = async (e) => {
    e.preventDefault();
    const { name } = e.target;

    setLoading((prevState) => ({
      ...prevState,
      [name]: true,
    }));

    try {
      let userInfo;
      if (name === "signIn") {
        userInfo = await signInWithEmailAndPassword(auth, email, password);
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
        navigate(location.state?.redirect || "/");
      } else {
        userInfo = await createUserWithEmailAndPassword(auth, email, password);
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
        navigate(location.state?.redirect || "/");
      }
      setError("");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading((prevState) => ({
        ...prevState,
        [name]: false,
      }));
    }
  };

  return (
    <section className="login-form">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png"
          alt="Amazon Logo"
          className="amazon-logo"
        />
      </Link>
      <div className="form-input">
        <h1>Sign In</h1>
        {location.state?.msg && (
          <small className="attention">{location.state.msg}</small>
        )}
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-field"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button
            type="submit"
            name="signIn"
            onClick={authHandler}
            className="sign-in-button"
          >
            {loading.signIn ? (
              <ClipLoader size={15} color={"#fff"} />
            ) : (
              "Sign In"
            )}
          </button>
          <p className="terms">
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, Cookies Notice, and
            Interest-Based Ads Notice.
          </p>
          <button
            type="button"
            name="signUp"
            onClick={authHandler}
            className="sign-up-button"
          >
            {loading.signUp ? (
              <ClipLoader size={15} color={"#000"} />
            ) : (
              "Create Your Amazon Account"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Auth;
