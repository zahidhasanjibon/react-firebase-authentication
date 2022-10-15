import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signOut, updateProfile } from "firebase/auth";
import { useState } from "react";
import app from "../firebase/firebase.init";

const auth = getAuth(app);

export default function Form() {
  const [user, setUser] = useState({});
  const [userName, setUserName] = useState("");
  const [createError, setCreateError] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target
    const name = form.name.value
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
console.log(userName);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setCreateError("")
        updateProfileInfo(name)
        emailVerify()
        setUser(res.user)
        form.reset()
        console.log(res);
      })
      .catch((err) => {console.log(err)
          setCreateError(err.message)
        });
  };

    const updateProfileInfo = (name) => {

      updateProfile(auth.currentUser,{
          displayName:name
      }).then(() => {
        console.log('update profile');
      })
      .catch(err => console.log(err))

    }


  const handleSignOut = () => {
    signOut(auth).then(() => setUser({})).catch(() => console.log(err))
  }

    const emailVerify =  () => {
      sendEmailVerification(auth.currentUser)
      .then(() => {
        alert('please verify email')
      })
      .catch((err) => console.log(err))
    }


  const handleName =(e) => {
    console.log(e.target.value);
    setUserName(e.target.value)
  }

  return (
    <div className="w-25 mx-auto mt-5">
    {
      user?.uid ? (
        <>
          <h6>Name : {userName}</h6>
          <h6>Email : {user.email}</h6>
          <button className="btn btn-primary mt-4" onClick={handleSignOut}>sign out</button>
        </>
      ) : (
        <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>Name</label>
          <input
          onBlur={handleName}
            type="text"
            name="name"
            className="form-control"
            required
       
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
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
        <p className="text-warning">{createError}</p>

        <button type="submit" className="btn btn-primary mt-3">
          Register
        </button>
      </form>
      )
    }
    </div>
  );
}
