import { sendPasswordResetEmail } from 'firebase/auth';
import { useState } from 'react'
import { FaUserAlt } from 'react-icons/fa';
import { auth } from "../FirebaseAuth/firebase"

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [err, setErr] = useState("");

    const handlePassword = async (e) => {
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((err) => {
                if (err.code === "auth/user-not-found") {
                    setErr("User Not Found")
                } else {
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
                            <h2>Forgot password</h2>
                            <nav aria-label="breadcrumb" className="theme-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Forgot password</li>
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
                                    <h2>Forgot your password</h2>
                                </div>
                                <form onSubmit={handlePassword}>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <FaUserAlt />
                                                </div>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                        </div>
                                        <div style={{ color: 'red', marginBottom: "5px" }}>
                                            {err}
                                        </div>
                                    </div>
                                    <div>
                                        <button type="submit" className="btn btn-gradient btn-pill color-2 me-sm-3 me-2">Send request</button>
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

export default ForgotPassword