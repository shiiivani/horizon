import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../FirebaseAuth/firebase";
import { User } from "react-feather";
import { useState, useEffect } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  const handleUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/userProfile");
      } else navigate("/login");
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setShowNavLinks(true);
      } else {
        setShowNavLinks(false);
      }
    });
  }, []);

  return (
    <div>
      {/* <!-- Loader start --> */}
      <div className="loader-wrapper">
        <div className="row loader-img">
          <div className="col-12">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Floader-2.gif?alt=media&token=88f706ef-427c-4fc3-ab28-f5fd4dd50e72"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* <!-- Loader end --> */}

      {/* <!-- header start --> */}
      <header className="inner-page">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="menu">
                <div className="brand-logo">
                  <a href="/">
                    <img src={Logo} alt="" className="img-fluid " />
                  </a>
                </div>
                <nav>
                  <div className="main-navbar">
                    <div id="mainnav">
                      <div
                        className="toggle-nav"
                        onClick={() => setSideBar(!sideBar)}
                      >
                        <i className="fa fa-bars sidebar-bar"></i>
                      </div>
                      <ul className={sideBar ? "nav-menu open" : "nav-menu"}>
                        <li className="back-btn">
                          <div
                            className="mobile-back text-end"
                            onClick={() => setSideBar(!sideBar)}
                          >
                            <span>Back</span>
                            <i
                              aria-hidden="true"
                              className="fa fa-angle-right ps-2"
                            ></i>
                          </div>
                        </li>
                        <li className="dropdown">
                          <a href="/" className="nav-link menu-title">
                            Home
                          </a>
                        </li>
                        <li className="dropdown">
                          <a
                            href="/marketPlace"
                            className="nav-link menu-title"
                          >
                            MarketPlace
                          </a>
                        </li>
                        <li
                          className={
                            showNavLinks ? "dropdown" : "dropdown dashboard"
                          }
                        >
                          <a href="/dashboard" className="nav-link menu-title">
                            Dashboard
                          </a>
                        </li>
                        <li className="dropdown">
                          <a href="/aboutus" className="nav-link menu-title">
                            About us
                          </a>
                        </li>
                        <li className="dropdown">
                          <a href="/contact" className="nav-link menu-title">
                            Contact
                          </a>
                        </li>
                        <li
                          className={showNavLinks ? "dropdown" : "dropdown kyc"}
                        >
                          <a href="/kyc" className="nav-link menu-title">
                            KYC
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
                <ul className="header-right">
                  <li className="right-menu">
                    <ul className="nav-menu">
                      {/* <li className="dropdown language">
                        <a href="javascript:void(0)">
                          <i data-feather="globe"></i>
                        </a>
                        <ul className="nav-submenu">
                          <li>
                            <a href="javascript:void(0)">English</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">French</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">Arabic</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">Spanish</a>
                          </li>
                        </ul>
                      </li> */}
                      {/* <li className="dropdown">
                        <a href="user-favourites.html">
                          <i data-feather="heart"></i>
                        </a>
                      </li> */}
                      {/* <li className="dropdown cart">
                        <a href="javascript:void(0)">
                          <i data-feather="shopping-cart"></i>
                        </a>
                        <ul className="nav-submenu">
                          <li>
                            <div className="media">
                              <img
                                src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F2.jpg?alt=media&token=02d59161-229e-415a-8e8a-7f6f69aa0b5e"
                                className="img-fluid"
                                alt=""
                              />
                              <div className="media-body">
                                <a href="single-property-8.html">
                                  <h5>Magnolia Ranch</h5>
                                </a>
                                <span>$120.00*</span>
                              </div>
                            </div>
                            <div className="close-circle">
                              <a href="javascript:void(0)">
                                <i
                                  className="fa fa-times"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="media">
                              <img
                                src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F3.jpg?alt=media&token=9429c4ec-99d2-46c6-be3c-4fc961660a64"
                                className="img-fluid"
                                alt=""
                              />
                              <div className="media-body">
                                <a href="single-property-8.html">
                                  <h5>Magnolia Ranch</h5>
                                </a>
                                <span>$140.00*</span>
                              </div>
                            </div>
                            <div className="close-circle">
                              <a href="javascript:void(0)">
                                <i
                                  className="fa fa-times"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="total">
                              <h5>
                                Subtotal :-{" "}
                                <span className="float-end">$260.00</span>
                              </h5>
                            </div>
                          </li>
                        </ul>
                      </li> */}
                      {/* <li className="dropdown currency">
                        <a href="javascript:void(0)">
                          <i data-feather="dollar-sign"></i>
                        </a>
                        <ul className="nav-submenu">
                          <li>
                            <a href="javascript:void(0)">Dollar</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">Euro</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">Pound</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">Yuan</a>
                          </li>
                        </ul>
                      </li> */}
                      <li className="dropdown" style={{ cursor: "pointer" }}>
                        <a onClick={handleUser}>
                          <User />
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!--  header end --> */}
    </div>
  );
}

export default Navbar;
