import {
  EmailAuthProvider,
  onAuthStateChanged,
  reauthenticateWithCredential,
  signOut,
  updatePassword,
} from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../FirebaseAuth/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, getDoc } from "@firebase/firestore";
import "../App.css";

function UserProfile() {
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [err, setErr] = useState("");
  const [kycInfo, setKycInfo] = useState({});
  const [user] = useAuthState(auth);
  const [userInfo, setUserInfo] = useState([]);
  const [successAlert, setSuccessAlert] = useState(false);

  const logOut = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    signOut(auth)
      .then(() => {
        console.log("User Signed Out");
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/login");
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        navigate("/userProfile");
        try {
          const userDocsRef = doc(db, "users", user.uid);
          const userDocsSnapshot = await getDoc(userDocsRef);
          if (userDocsSnapshot.exists()) {
            const userData = userDocsSnapshot.data();
            setUserInfo([userData]); // Wrap the user data in an array if needed
          }
        } catch (error) {
          console.error("Error fetching user documents:", error);
        }
      } else {
        navigate("/login");
      }
    });
  }, []);

  useEffect(() => {
    if (user) {
      const docRef = doc(db, `kyc/${user.uid}`);
      getDoc(docRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            setKycInfo({ ...snapshot.data() });
          } else {
            // Handle the case where the document doesn't exist
            console.log("Document does not exist");
          }
        })
        .catch((error) => {
          // Handle errors during document retrieval
          console.error("Error getting document:", error);
        });
    }
  }, []);

  const reauthenticate = (currentPassword) => {
    const user = auth.currentUser;
    const cred = EmailAuthProvider.credential(user.email, currentPassword);
    return reauthenticateWithCredential(user, cred);
  };

  const enableClick = newPassword === confirmPassword;

  const handlePassword = () => {
    reauthenticate(currentPassword)
      .then(() => {
        updatePassword(auth.currentUser, newPassword)
          .then(() => {
            setSuccessAlert(true);
            setTimeout(() => setSuccessAlert(false), 3000);
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((err) => {
        if (err.code === "auth/wrong-password") {
          setErr("Wrong Password");
        } else {
          setErr(err.message);
        }
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      });
  };

  return (
    <div>
      {/* <!-- breadcrumb start --> */}
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
              <h2>My Profile</h2>
              <nav aria-label="breadcrumb" className="theme-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    My profile
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- breadcrumb end --> */}

      {/* <!-- user dashboard section start --> */}
      <section className="user-dashboard small-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="sidebar-user sticky-cls">
                <div className="user-profile">
                  <div className="media">
                    <div className="change-pic">
                      {/* <img
                        src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2FuserProfile%2F3.jpg?alt=media&token=8d577ff4-968e-489b-b658-cbe98cee89b0"
                        className="img-fluid update_img"
                        alt=""
                      /> */}
                      <div className="change-hover">
                        <button type="button" className="btn">
                          <i data-feather="camera"></i>
                        </button>
                        <input
                          className="updateimg"
                          type="file"
                          name="img"
                          // onchange="readURL(this,0)"
                        />
                      </div>
                    </div>

                    <div className="media-body">
                      {userInfo.map((user) => {
                        return (
                          <>
                            <h5>{user.userName}</h5>
                            <h6 className="font-roboto">{user.email}</h6>
                          </>
                        );
                      })}
                      <h6 className="font-roboto mb-0">
                        {kycInfo.phoneNumber}
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="dashboard-list">
                  <ul className="nav nav-tabs right-line-tab">
                    <li className="nav-item">
                      <a className="nav-link" href="/dashboard">
                        Dashboard
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="/userProfile">
                        My profile
                      </a>
                    </li>
                    <li className="nav-item" style={{ cursor: "pointer" }}>
                      <a
                        // href="/"
                        // data-bs-toggle="modal"
                        // data-bs-target="#logout"
                        className="nav-link"
                        onClick={logOut}
                      >
                        Log out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="dashboard-content">
                <div className="my-profile" id="profile">
                  <div className="profile-info">
                    <div className="common-card">
                      <div className="row">
                        <div className="col-xxl-6 col-xl-7">
                          <div className="information-detail">
                            <div className="common-header">
                              <h5>About</h5>
                            </div>
                            <div className="information">
                              <ul>
                                {/* <li>
                                  <span>Birthday :</span>
                                  <p>20/11/1995</p>
                                </li> */}
                                <li>
                                  <span>Phone number :</span>
                                  <a href="#">{kycInfo.phoneNumber}</a>
                                </li>
                                <li>
                                  <span>Address :</span>
                                  <p>
                                    {kycInfo.address} <br /> {kycInfo.city}
                                  </p>
                                  {/* <p>{kycInfo.city}</p> */}
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="information-detail">
                            <div className="common-header">
                              <h5>Login Details</h5>
                            </div>
                            <div className="information">
                              <ul>
                                <li>
                                  <span>Email :</span>
                                  <a href="#">
                                    {user && user.email ? user.email : ""}
                                  </a>
                                </li>
                                <li>
                                  <span>Password :</span>
                                  <a href="#">
                                    &#9679;&#9679;&#9679;&#9679;&#9679;&#9679;
                                  </a>
                                  <span
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit-password"
                                    className="label label-light label-flat color-4"
                                  >
                                    Edit
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="information-detail">
                            <div className="common-header">
                              <h5>KYC</h5>
                            </div>
                            <div className="information">
                              <ul>
                                <li>
                                  <span>Full Name :</span>
                                  <p>{kycInfo.fullName}</p>
                                </li>
                                <li>
                                  <span>Phone number :</span>
                                  <a href="#">{kycInfo.phoneNumber}</a>
                                </li>
                                <li>
                                  <span>Pan Number :</span>
                                  <p>{kycInfo.panNumber}</p>
                                </li>
                                <li>
                                  <span>Aadhaar Number :</span>
                                  <p>
                                    {kycInfo && kycInfo.aadharNumber
                                      ? `********${kycInfo.aadharNumber.slice(
                                          -4
                                        )}`
                                      : ""}
                                  </p>
                                </li>
                                <li>
                                  <span>Address :</span>
                                  <p>{kycInfo.address}</p>
                                </li>
                                <li>
                                  <span>City :</span>
                                  <p>{kycInfo.city}</p>
                                </li>
                                <li>
                                  <span>State :</span>
                                  <p>{kycInfo.state}</p>
                                </li>
                                <li>
                                  <span>Country :</span>
                                  <p>{kycInfo.country}</p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-5 offset-xxl-1 col-xl-5 offset-xl-0">
                          <div className="about-img d-xl-block d-none">
                            <img
                              src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2FuserProfile%2F2.png?alt=media&token=b4f19cbd-ad63-40ad-bbdf-4a7d6a22d00a"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- user dashboard section end --> */}

      {/* <!-- edit password modal start --> */}
      <div className="modal fade edit-profile-modal" id="edit-password">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Change password</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {/* <span style={{color: "green"}}>Password Changed Successfully</span> */}
              <form>
                <div className="row gx-3">
                  {successAlert ? (
                    <div className="alert alert-success" role="alert">
                      Password Updated Successfully!
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="form-group col-12">
                    <label>current password</label>
                    <input
                      type="password"
                      className="form-control"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      placeholder="Password"
                      id="p-o"
                    />
                    <span style={{ color: "red", fontSize: "13px" }}>
                      {err}
                    </span>
                  </div>
                  <div className="form-group col-12">
                    <label>enter new password</label>
                    <input
                      type="password"
                      className="form-control"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Password"
                      id="p-n"
                    />
                  </div>
                  <div className="form-group col-12">
                    <label>confirm your password</label>
                    <input
                      type="password"
                      className="form-control"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Password"
                      id="p-c"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dashed color-2 btn-pill"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-gradient color-2 btn-pill"
                onClick={enableClick ? handlePassword : null}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- edit password modal start --> */}
    </div>
  );
}

export default UserProfile;
