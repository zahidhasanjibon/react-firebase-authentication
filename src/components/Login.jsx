import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import app from "../firebase/firebase.init";

const auth = getAuth(app);

export default function Login() {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [createError, setCreateError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        setUser(res.user);
        setCreateError("")
      })
      .catch((err) => {
        console.log(err);
        setCreateError(err.message);
      });
  };

  const handleForgotPassword = (e) => {
    e.preventDefault()
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsShow(false);
        alert("please chheck email");
        setCreateError("")
      })
      .catch((err) => console.log(err));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => setUser({}))
      .catch(() => console.log(err));
  };

  return (
    <div className="w-25 mx-auto mt-5">
      {isShow ? (
        <form onSubmit={handleForgotPassword}>
          <div className="form-group mt-4">
            <label>Email address</label>
            <input
              onBlur={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              className="form-control"
              required
              placeholder="Enter email"
            />
          </div>

          <button type="submit" className="btn btn-primary mt-3">
            submit
          </button>

          <button onClick={() => setIsShow(false)} type="submit" className="btn btn-primary mt-3 ms-3">
            back
          </button>
        </form>
      ) : (
        <div>
          {user?.uid ? (
            <>
              <h6>Name : {user?.displayName}</h6>
              <h6>Email : {user.email}</h6>
              <button className="btn btn-primary mt-4" onClick={handleSignOut}>
                sign out
              </button>
            </>
          ) : (
            <form onSubmit={handleLogin}>
              <div className="form-group mt-4">
                <label>Email address</label>
                <input
                  onBlur={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  className="form-control"
                  required
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  required
                  placeholder="Password"
                />
              </div>
              {<p className="text-warning">{createError}</p>}

              <button type="submit" className="btn btn-primary mt-3">
                Log in
              </button>
              <NavLink className="m-4" onClick={() => setIsShow(true)}>
                forgot password
              </NavLink>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
