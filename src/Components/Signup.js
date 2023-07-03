import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db, auth } from '../FirebaseAuth/firebase';
import { FaUserAlt } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { addDoc, collection } from "firebase/firestore";



const Signup = () => {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const signup = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (result) => {
                console.log(result);
                try {
                    const docRef = await addDoc(collection(db, "SignedUpUser"), {
                        Email: email,
                        Username: userName,
                        userId: `${result.user.uid}`,
                    });

                    alert("Welcome new User create successfully")
                    console.log("Document written with ID: ", docRef.id);

                } catch (e) {
                    console.error("Error adding document: ", e);
                }
            }).catch((error) => {
                console.log(error);
            })
            setUserName("")
            setPassword("")
            setEmail("")
    }


    return (
        <div>
            <section class="breadcrumb-section p-0">
                <img src="https://themes.pixelstrap.com/sheltos/assets/images/inner-background.jpg" class="bg-img img-fluid" alt="" />
                <div class="container">
                    <div class="breadcrumb-content">
                        <div>
                            <h2>Sign up</h2>
                            <nav aria-label="breadcrumb" class="theme-breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Sign up</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>



            <section>
                <div class="container">
                    <div class="row log-in sign-up">
                        <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10 col-12">
                            <div class="theme-card">
                                <div class="title-3 text-start">
                                    <h2>Sign up</h2>
                                </div>
                                <form onSubmit={signup}>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    <FaUserAlt />
                                                </div>
                                            </div>
                                            <input type="text" class="form-control" placeholder="Enter your name" name="userName" value={userName} onChange={(e) => setUserName(e.target.value)} required />
                                        </div>
                                    </div>
                                    <div class="form-group" >
                                        <div class="input-group" >
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    <FaEnvelope />
                                                </div>
                                            </div>
                                            <input type="email" class="form-control" placeholder="Enter email address" value={email} onChange={(e) => setEmail(e.target.value)} name="email" required />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    <FaLock />
                                                </div>
                                            </div>
                                            <input type="password" id="pwd-input" class="form-control" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                            <div class="input-group-apend">
                                                <div class="input-group-text">
                                                    <i id="pwd-icon" class="far fa-eye-slash"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="important-note">
                                            password should be a minimum of 8 characters and should contains letters and numbers
                                        </div>
                                    </div>
                                    <div>
                                        <button type="submit" class="btn btn-gradient btn-pill color-2 me-sm-3 me-2">Create Account</button>
                                        <a href="/login" class="btn btn-dashed btn-pill color-2">Log in</a>
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

export default Signup