import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../FirebaseAuth/firebase"
import { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");


    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("test1234");
                console.log(userCredential);
            })
            .catch((err) => {
                if (err.code === "auth/wrong-password") {
                    setErr("Wrong Password")
                } else if
                    (err.code === "auth/invalid-email") {
                    setErr("Invalid Email")
                } else if
                    (err.code === "auth/user-not-found") {
                    setErr("User Not Found")
                }
                else {
                    setErr(err.message)
                }
            })
    }

    return (
        <div>
            <section className="breadcrumb-section p-0">
                <img src="https://themes.pixelstrap.com/sheltos/assets/images/inner-background.jpg" className="bg-img img-fluid" alt="" />
                <div className="container">
                    <div className="breadcrumb-content">
                        <div>
                            <h2>Log in</h2>
                            <nav aria-label="breadcrumb" className="theme-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Log in</li>
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
                                <form >
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <FaUserAlt />
                                                </div>
                                            </div>
                                            <input type="text" className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <FaLock />
                                                </div>
                                            </div>
                                            <input type="password" id="pwd-input" className="form-control" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                                            <div className="input-group-apend">
                                                <div className="input-group-text">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="important-note" style={{ color: "red" }}>
                                            {err}
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <label className="d-block mb-0" for="chk-ani">
                                            <input className="checkbox_animated color-2" id="chk-ani" type="checkbox" /> <span>Remember me</span>
                                        </label>
                                        <a href="/forgotPassword" className="font-rubik text-color-2">Forgot password ?</a>
                                    </div>
                                    <div>
                                        <button type="submit" className="btn btn-gradient btn-pill color-2 me-sm-3 me-2" onClick={signIn}>Log in</button>
                                        <a href="/signup" className="btn btn-dashed btn-pill color-2">Create Account</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login