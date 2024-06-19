import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "../FirebaseAuth/firebase";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";
import { Mail, Lock, User } from "react-feather";
import "../App.css";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [seePassword, setSeePassword] = useState(false);
  const navigate = useNavigate();

  const signup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (result) => {
        console.log(result);
        try {
          const ref = doc(db, "users", result.user.uid);
          const docRef = await setDoc(ref, {
            email: email,
            userName: userName,
            uid: result.user.uid,
          });
          navigate("/marketPlace");
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <section className="breadcrumb-section p-0">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Finner-background.jpg?alt=media&token=8c27af4d-9eee-4aa4-87b8-b3fb6a0e8772"
          className="bg-img img-fluid"
          alt=""
          width="100%"
        />
        <div className="container">
          <div className="breadcrumb-content">
            <div>
              <h2>Sign up</h2>
              <nav aria-label="breadcrumb" className="theme-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Sign up
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row log-in sign-up">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 col-12">
              <div className="theme-card">
                <div className="title-3 text-start">
                  <h2>Sign up</h2>
                </div>
                <form onSubmit={signup}>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <User />
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                        name="userName"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <Mail />
                        </div>
                      </div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <Lock />
                        </div>
                      </div>
                      <input
                        type={seePassword ? "text" : "password"}
                        id="pwd-input"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <div className="input-group-apend">
                        <div
                          className="input-group-text"
                          onClick={() => setSeePassword(!seePassword)}
                        >
                          <i
                            id="pwd-icon"
                            className={
                              seePassword ? "far fa-eye" : "far fa-eye-slash"
                            }
                          ></i>
                        </div>
                      </div>
                    </div>
                    <div className="important-note">
                      password should be a minimum of 8 characters and should
                      contains letters and numbers
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="btn btn-gradient btn-pill color-2 me-sm-3 me-2"
                    >
                      Create Account
                    </button>
                    <a
                      href="/login"
                      className="btn btn-dashed btn-pill color-2"
                    >
                      Log in
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
