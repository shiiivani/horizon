import { useState } from "react";
import { auth, db } from "../FirebaseAuth/firebase";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { storage } from "../FirebaseAuth/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Check, Map, MapPin } from "react-feather";
import classNames from "classnames";
import "../styles/kyc.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import "../App.css";

function Kyc() {
  const [fullName, setFullName] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [panErr, setPanErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [aadErr, setAadErr] = useState(false);
  const [file, setFile] = useState([]);
  const [url, setUrl] = useState("");
  const [err, setErr] = useState(false);
  const [firstErr, setFirstErr] = useState(false);
  const [fileErr, setFileErr] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");
  const [country, setCountry] = useState("");
  const [addressSent, setAddressSent] = useState(false);
  const [fileLimit, setFileLimit] = useState(false);
  const [submitAlert, setSubmitAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  function panHandler(e) {
    setPanNumber(e.target.value);
  }

  function panValidHandler() {
    if (panNumber.length < 10) {
      setPanErr(true);
    } else {
      setPanErr(false);
    }
  }

  function phoneHandler(e) {
    setPhoneNumber(e.target.value);
  }

  function phoneValidHandler() {
    if (panNumber.length < 10) {
      setPhoneErr(true);
    } else {
      setPhoneErr(false);
    }
  }
  function aadharHandler(e) {
    setAadharNumber(e.target.value);
  }

  function aadharValidHandler() {
    if (aadharNumber.length < 10) {
      setAadErr(true);
    } else {
      setAadErr(false);
    }
  }

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (
      !fullName ||
      panNumber.length < 10 ||
      phoneNumber.length < 10 ||
      aadharNumber.length < 10 ||
      file.length === 0 ||
      !fileLimit
    ) {
      setSubmitAlert(true);
      setTimeout(() => setSubmitAlert(false), 3000);
      setIsSuccess(false);
      setFileErr("Please choose a file");
    } else {
      setIsSuccess(true);
      fileUpload();
      localStorage.setItem("fullName", fullName);
      localStorage.setItem("panNumber", panNumber);
      localStorage.setItem("phoneNumber", phoneNumber);
      localStorage.setItem("aadharNumber", aadharNumber);
    }
  };

  const fileUpload = async () => {
    for (let i = 0; i < file.length; i++) {
      const fileRef = ref(storage, `/kyc/${file[i].name}`);
      const result = await uploadBytes(fileRef, file[i])
        .then(() => {
          getDownloadURL(fileRef).then((url) => {
            setUrl(url);
            console.log("file uploaded");
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const validateFile = (e) => {
    const selectedFiles = e.target.files;

    // Assuming you want to check each file in the array
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const minFileSize = 2048; // 2 MB in kilobytes
      const fileSize = file.size / 1024; // Convert bytes to kilobytes

      if (fileSize > minFileSize) {
        setFileErr("Please upload file lesser than 2mb");
        setFileLimit(false);
        return;
      }
    }

    // If all files are within the size limit
    setFileErr("");
    setFileLimit(true);
    setFile(selectedFiles); // Update the state with the selected files
    fileUpload();
  };

  const handleAddress = (e) => {
    e.preventDefault();
    if (address && city && country && state && pin) {
      setAddressSent(true);
    } else {
      setAddressSent(false);
      setSubmitAlert(true);
      setTimeout(() => setSubmitAlert(false), 3000);
    }
  };

  const finalSubmitHandler = async (e) => {
    const docRef = doc(db, "kyc", user.uid);
    try {
      const result = await setDoc(docRef, {
        aadharNumber: aadharNumber,
        address: address,
        city: city,
        createdAt: serverTimestamp(),
        country: country,
        fullName: fullName,
        panNumber: panNumber,
        phoneNumber: phoneNumber,
        pincode: pin,
        state: state,
        url: { url },
        uid: user.uid,
      });
      setSuccessAlert(true);
      setTimeout(() => setSuccessAlert(false), navigate("/userProfile"), 3000);
    } catch (e) {
      console.error("Error adding document: ", e);
      setErr("* There is some problem in submitting the details.");
      setTimeout(() => setErr(""), 3000);
    }
  };

  const prevBtnHandler = () => {
    setIsSuccess(!isSuccess);
  };

  const secondPrevBtnHandler = () => {
    setAddressSent(false);
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
              <h2>KYC</h2>
              <nav aria-label="breadcrumb" className="theme-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    KYC
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- breadcrumb end --> */}

      {/* <!-- sign up section start --> */}
      <section className="property-wizard horizontal-wizard">
        <p className="mb-10" style={{ color: "red", marginLeft: "26%" }}>
          {err}
        </p>
        {submitAlert ? (
          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
            style={{
              width: "700px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <strong>Please fill all fields!</strong>
          </div>
        ) : (
          ""
        )}
        {successAlert ? (
          <div className="alert alert-success" role="alert">
            Details Successfully Submitted!
          </div>
        ) : (
          ""
        )}
        <div className="container">
          <div className="row wizard-box">
            <div className="col-lg-8 col-sm-10">
              <div className="wizard-step-container theme-card">
                <ul className="wizard-steps">
                  <li
                    className={
                      isSuccess
                        ? "step-container step-1 active disabled"
                        : "step-container step-1 active"
                    }
                  >
                    <div className="media">
                      <div className="step-icon">
                        <Check />
                        <span>1</span>
                      </div>
                      <div className="media-body">
                        <h5>Get started</h5>
                        <h6>Personal information</h6>
                      </div>
                    </div>
                  </li>
                  <li
                    className={classNames(
                      "step-container step-2",
                      isSuccess && "active",
                      addressSent && "disabled"
                    )}
                  >
                    <div className="media">
                      <div className="step-icon">
                        <Check />
                        <span>2</span>
                      </div>
                      <div className="media-body">
                        <h5>Location</h5>
                        <h6>Set your address</h6>
                      </div>
                    </div>
                  </li>
                  <li
                    className={
                      addressSent
                        ? "step-container step-3 active"
                        : "step-container step-3"
                    }
                  >
                    <div className="media">
                      <div className="step-icon">
                        <Check />
                        <span>3</span>
                      </div>
                      <div className="media-body">
                        <h5>Complete</h5>
                        <h6>Successfully submitted</h6>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="wizard-form-details log-in">
                  <div
                    className={
                      isSuccess
                        ? "wizard-step-1 d-none"
                        : "wizard-step-1 d-block"
                    }
                  >
                    <div className="title-3 text-start">
                      <h2>Get started</h2>
                    </div>
                    <p style={{ color: "red", fontSize: "13px" }}>{firstErr}</p>
                    <form
                      className="row needs-validation"
                      id="needs-validation"
                      noValidate=""
                      onSubmit={(e) => SubmitHandler(e)}
                    >
                      <div className="form-group col-md-12">
                        <div className="input-group">
                          <div className="input-group-text">
                            <i data-feather="user"></i>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="first-name"
                            name="fullname"
                            placeholder="Enter your Full Name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required=""
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <div className="input-group">
                          <div className="input-group-text">
                            <i data-feather="phone"></i>
                          </div>
                          <input
                            className="form-control"
                            name="mobnumber"
                            id="tbNumbers"
                            // oninput="maxLengthCheck(this)"
                            type="tel"
                            // onkeypress="javascript:return isNumber(event)"
                            maxLength="10"
                            placeholder="Enter your phone number"
                            value={phoneNumber}
                            onChange={(e) => {
                              phoneValidHandler(e);
                              phoneHandler(e);
                            }}
                            required=""
                          />
                        </div>
                        {phoneErr ? (
                          <span style={{ fontSize: "10px", color: "red" }}>
                            Please Enter Valid Phone Number
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="form-group col-md-6">
                        <div className="input-group">
                          <div className="input-group-text">
                            {/* <Mail/> */}
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="panNumber"
                            maxLength="10"
                            placeholder="Pan Number"
                            onChange={(e) => {
                              panValidHandler(e);
                              panHandler(e);
                            }}
                            value={panNumber}
                            required=""
                          />
                        </div>
                        {panErr ? (
                          <span style={{ fontSize: "10px", color: "red" }}>
                            Please Enter Valid Pan Number
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="form-group col-sm-12">
                        {aadErr ? (
                          <span style={{ fontSize: "10px", color: "red" }}>
                            Please Enter Valid Aadhar Number
                          </span>
                        ) : (
                          ""
                        )}
                        <div className="input-group">
                          <div className="input-group-text">
                            <i data-feather="lock"></i>
                          </div>
                          <input
                            type="text"
                            id="pwd-input"
                            className="form-control"
                            placeholder="Aadhar Number"
                            maxLength="12"
                            value={aadharNumber}
                            onChange={(e) => {
                              aadharValidHandler(e);
                              aadharHandler(e);
                            }}
                            required=""
                          />

                          {/* <div className="input-group-text ">

                                                        {/* <i id="pwd-icon" className="far fa-eye-slash"></i> 
                                                    </div> */}
                        </div>
                        {/* <div className="important-note mb-4">
                                            password should be a minimum of 8 characters and should contains letters and numbers
                                        </div>
                                        <div className="text-end">
                                            <p>Alerady have an account ? 
                                                <a href="login.html" className="btn btn-dashed btn-pill color-2">Log in</a>
                                            </p>
                                        </div> */}

                        <div
                          className="dropzone pt-40"
                          id="multiFileUpload"
                          style={{ position: "relative" }}
                          onChange={(e) => {
                            validateFile(e);
                          }}
                        >
                          <input
                            type="file"
                            multiple
                            style={{
                              width: "100%",
                              height: "100%",
                              position: "absolute",
                              zIndex: "0",
                              cursor: "pointer",
                              opacity: "0",
                            }}
                          />
                          <div className="dz-message needsclick">
                            <i className="fas fa-cloud-upload-alt"></i>
                            <h6>Click to upload.</h6>
                          </div>
                        </div>
                        <span style={{ color: "red", fontSize: "12px" }}>
                          {fileErr}
                        </span>
                      </div>
                      <div className="next-btn text-end col-sm-12">
                        <button
                          type="Submit"
                          className="btn btn-gradient color-2 next1 btn-pill"
                          // onClick={() => {
                          //   fileUpload();
                          //   validateFile();
                          // }}
                        >
                          Next <i className="fas fa-arrow-right ms-2"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                  <div
                    className={`wizard-step-2-d ${
                      addressSent ? "d-none" : isSuccess ? "d-block" : ""
                    }`}
                  >
                    <div className="title-3 text-start">
                      <h2>Add your Location</h2>
                    </div>
                    <form className="row" id="needs-validation1" noValidate="">
                      <div className="form-group col-md-12">
                        <div className="input-group">
                          <div className="input-group-text">
                            <MapPin />
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="address"
                            name="address"
                            placeholder="Enter your Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required=""
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <div className="input-group">
                          <div className="input-group-text">
                            <MapPin />
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="city_name"
                            name="city"
                            placeholder="Enter your city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required=""
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <div className="input-group">
                          <div className="input-group-text">
                            <MapPin />
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="state_name"
                            name="state"
                            placeholder="Enter your state"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            required=""
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <div className="input-group">
                          <div className="input-group-text">
                            <Map />
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="country_name"
                            placeholder="Enter your country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required=""
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <div className="input-group">
                          <div className="input-group-text">
                            <MapPin />
                          </div>
                          <input
                            type="number"
                            className="form-control"
                            id="pin_code"
                            name="pin"
                            placeholder="Enter your pin code"
                            value={pin}
                            onChange={(e) => setPin(e.target.value)}
                            required=""
                          />
                        </div>
                      </div>
                      <div className="next-btn d-flex col-sm-12">
                        <button
                          type="button"
                          className="btn btn-dashed color-2 prev1 btn-pill"
                          onClick={prevBtnHandler}
                        >
                          <i className="fas fa-arrow-left me-2"></i> Previous
                        </button>
                        <button
                          type="submit"
                          className="btn btn-gradient color-2 next2 btn-pill"
                          onClick={handleAddress}
                        >
                          Next <i className="fas fa-arrow-right ms-2"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                  <div
                    className={
                      addressSent
                        ? "wizard-step-3 d-block"
                        : "wizard-step-3 d-none"
                    }
                  >
                    <div className="title-3 text-start">
                      <h2>complete details</h2>
                    </div>
                    <form>
                      <div className="input-data">
                        <div className="account-content">
                          <h3>Account information</h3>
                          <ul>
                            <li>
                              Name :{" "}
                              <span className="first_name">
                                {localStorage.getItem("fullName")}
                              </span>
                            </li>
                            <li>
                              phone number :{" "}
                              <span className="phone_number">
                                {localStorage.getItem("phoneNumber")}
                              </span>
                            </li>
                            <li>
                              Pan Number :{" "}
                              <span className="email_add">
                                {localStorage.getItem("panNumber")}
                              </span>
                            </li>
                            <li>
                              Aadhar Number :{" "}
                              <span className="email_add">
                                {localStorage.getItem("aadharNumber")}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="account-content">
                          <h3>Location Details</h3>
                          <ul>
                            <li>
                              Address :{" "}
                              <span className="address-type">{address}</span>
                            </li>
                            <li>
                              city : <span className="city-name">{city}</span>
                            </li>
                            <li>
                              state :{" "}
                              <span className="state-name">{state}</span>
                            </li>
                            <li>
                              country :{" "}
                              <span className="country-name">{country}</span>
                            </li>
                            <li>
                              pincode : <span className="pin-code">{pin}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="next-btn d-flex">
                        <button
                          type="button"
                          className="btn btn-dashed color-2 prev2 btn-pill"
                          onClick={secondPrevBtnHandler}
                        >
                          <i className="fas fa-arrow-left me-2"></i> Previous
                        </button>
                        <button
                          type="button"
                          className="btn btn-gradient color-2 next3 btn-pill"
                          onClick={() => {
                            finalSubmitHandler();
                          }}
                        >
                          submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- sign up section end --> */}
    </div>
  );
}

export default Kyc;
