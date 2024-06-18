import React, { useState } from "react";
import { auth, db } from "../FirebaseAuth/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  setDoc,
  doc,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import "../App.css";

function Contact() {
  const [details, setDetails] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const [user] = useAuthState(auth);
  const [successAlert, setSuccessAlert] = useState(false);

  const onChangeHandler = (event) => {
    setDetails(() => ({
      ...details,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const docRef = doc(db, "contactInfo", user.uid);
    try {
      await setDoc(docRef, {
        name: details.name,
        phoneNumber: details.phoneNumber,
        email: details.email,
        message: details.message,
        createdAt: serverTimestamp(),
        uid: user.uid,
      });
      setSuccessAlert(true);
      setTimeout(() => setSuccessAlert(false), 3000);
      setDetails({
        name: "",
        phoneNumber: "",
        email: "",
        message: "",
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div>
      {/* <!-- breadcrumb start --> */}
      <section className="breadcrumb-section p-0">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Finner-background.jpg?alt=media&token=8c27af4d-9eee-4aa4-87b8-b3fb6a0e8772"
          className="bg-img img-fluid"
          alt=""
        />
        <div className="container">
          <div className="breadcrumb-content">
            <div>
              <h2>Contact us</h2>
              <nav aria-label="breadcrumb" className="theme-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/horizon">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Contact us
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- breadcrumb end --> */}

      {/* <!-- Get in touch section start --> */}
      <section className="small-section get-in-touch">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 contact-img">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fcontact%2F1.png?alt=media&token=ac340275-eb25-41d4-bd75-4e9896e4bb02"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-6">
              {successAlert ? (
                <div className="alert alert-success" role="alert">
                  Message Sent Successfully!
                </div>
              ) : (
                ""
              )}
              <div className="log-in">
                <div className="mb-4 text-start">
                  <h2>Let's Get In Touch</h2>
                </div>
                <form className="row gx-3" onSubmit={submitHandler}>
                  <div className="form-group col-md-12">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i data-feather="user"></i>
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Name"
                        name="name"
                        value={details.name}
                        onChange={onChangeHandler}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group col-md-6">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i data-feather="phone"></i>
                        </div>
                      </div>
                      <input
                        placeholder="phone number"
                        className="form-control"
                        name="phoneNumber"
                        id="tbNumbers"
                        // oninput="maxLengthCheck(this)"
                        type="tel"
                        // onkeypress="javascript:return isNumber(event)"
                        maxLength="10"
                        value={details.phoneNumber}
                        onChange={onChangeHandler}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group col-md-6">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i data-feather="mail"></i>
                        </div>
                      </div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="email address"
                        name="email"
                        value={details.email}
                        onChange={onChangeHandler}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group col-md-12">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="6"
                      name="message"
                      placeholder="Write here something"
                      value={details.message}
                      onChange={onChangeHandler}
                    >
                      Write here something
                    </textarea>
                  </div>
                  <div className="col-md-12 submit-btn">
                    <button
                      className="btn btn-gradient color-2 btn-pill"
                      type="submit"
                    >
                      Send Your Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Get in touch section end --> */}

      {/* <!-- contact details section start --> */}
      <section className="small-section contact_section pt-0 contact_bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="contact_wrap">
                <i data-feather="map-pin"></i>
                <h4>Where ?</h4>
                <p className="font-roboto">
                  Koramangala, <br />
                  Bengaluru, KA 560034 <br />
                  +91 9483647889
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="contact_wrap">
                <i data-feather="map-pin"></i>
                <h4>Second branch</h4>
                <p className="font-roboto">
                  Koramangala,
                  <br />
                  Bengaluru, KA 560034 <br />
                  +91 9483647889
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="contact_wrap">
                <i data-feather="mail"></i>
                <h4>Online service</h4>
                <ul>
                  <li>Inquiries: info@horizon.in</li>
                  <li>Support: help@horizon.in</li>
                  <li>+86 113 - 421 - 7491</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- contact details section end --> */}
    </div>
  );
}

export default Contact;
