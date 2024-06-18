import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FirebaseAuth/firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Lock } from "react-feather";
import "../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [seePassword, setSeePassword] = useState(false);
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          console.log("User already logged in");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      navigate("/horizon/login");
    }
  }, []);

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/horizon/marketPlace");
        if (rememberMe) {
          localStorage.setItem("email", email);
          localStorage.setItem("password", password);
        }
      })
      .catch((err) => {
        if (err.code === "auth/wrong-password") {
          setErr("Wrong Password");
        } else if (err.code === "auth/invalid-email") {
          setErr("Invalid Email");
        } else if (err.code === "auth/user-not-found") {
          setErr("User Not Found");
        } else {
          setErr(err.message);
        }
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
              <h2>Log in</h2>
              <nav aria-label="breadcrumb" className="theme-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/horizon">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Log in
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="login-wrap">
        <div className="container">
          <div className="row log-in">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 col-12">
              <div className="theme-card">
                <div className="title-3 text-start">
                  <h2>Log in</h2>
                </div>
                <form>
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
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Email"
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
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
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
                              seePassword ? "fa fa-eye" : "fa fa-eye-slash"
                            }
                          ></i>
                        </div>
                      </div>
                    </div>
                    <div className="important-note" style={{ color: "red" }}>
                      {err}
                    </div>
                  </div>
                  <div className="d-flex">
                    <label className="d-block mb-0">
                      <input
                        className="checkbox_animated color-2"
                        id="chk-ani"
                        type="checkbox"
                        checked={rememberMe}
                        onChange={handleRememberMeChange}
                      />{" "}
                      <span>Remember me</span>
                    </label>
                    <a
                      href="/horizon/forgotPassword"
                      className="font-rubik text-color-2"
                    >
                      Forgot password ?
                    </a>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="btn btn-gradient btn-pill color-2 me-sm-3 me-2"
                      style={{ cursor: "pointer" }}
                      onClick={signIn}
                    >
                      Log in
                    </button>
                    <a
                      href="/horizon/signup"
                      className="btn btn-dashed btn-pill color-2"
                    >
                      Create Account
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

export default Login;
