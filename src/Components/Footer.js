import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import Logo from "../assets/logo.png";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../FirebaseAuth/firebase";

function Footer() {
  const [email, setEmail] = useState("");

  const subscribe = async (e) => {
    e.preventDefault();
    const docRef = collection(db, "subscribers");
    try {
      const result = await addDoc(docRef, {
        email: email,
        createdAt: serverTimestamp(),
      });
      await updateDoc(doc(db, "subscribers", result.id), {
        docId: result.id,
      });
      setEmail("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div>
      {/* <!-- footer start --> */}
      <footer>
        <div className="footer footer-bg">
          <div className="container">
            <div className="row">
              <div className="col-xl-3">
                <div className="footer-details text-center">
                  <a href="/">
                    <img
                      src={Logo}
                      alt=""
                      style={{ marginBottom: "20px", marginTop: "10px" }}
                    />
                  </a>
                  <p>
                    Elegant retreat in a quiet Coral Gables setting. This home
                    provides wonderful entertaining spaces with a chef kitchen
                    opening
                  </p>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="row">
                  <div className="col-lg-3 col-md-4">
                    <div className="footer-links footer-left-space">
                      <h5 className="footer-title ">
                        Useful links
                        <span className="according-menu">
                          <i className="fas fa-chevron-down"></i>
                        </span>
                      </h5>
                      <ul className="footer-content">
                        <li>
                          <a href="/home">Home</a>
                        </li>
                        <li>
                          <a href="/marketplace">Marketplace</a>
                        </li>
                        <li>
                          <a href="/aboutus">About us</a>
                        </li>
                        {/* <li>
                          <a href="faq.html">Faq</a>
                        </li> */}
                        <li>
                          <a href="/contact">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4">
                    <div className="footer-links">
                      <h5 className="footer-title">
                        feature
                        <span className="according-menu">
                          <i className="fas fa-chevron-down"></i>
                        </span>
                      </h5>
                      <ul className="footer-content">
                        <li>
                          <a href="#">Services</a>
                        </li>
                        <li>
                          <a href="#">Agency</a>
                        </li>
                        <li>
                          <a href="#">Agents</a>
                        </li>
                        <li>
                          <a href="#">Pricing</a>
                        </li>
                        <li>
                          <a href="#">Favourites</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4">
                    <div className="footer-links">
                      <h5 className="footer-title">
                        Social
                        <span className="according-menu">
                          <i className="fas fa-chevron-down"></i>
                        </span>
                      </h5>
                      <ul className="footer-content">
                        <li>
                          <a href="https://www.facebook.com/">Facebook</a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/">Instagram</a>
                        </li>
                        <li>
                          <a href="https://twitter.com/">Twitter</a>
                        </li>
                        <li>
                          <a href="https://login.mailchimp.com/">Mail chimp</a>
                        </li>
                        <li>
                          <a href="https://accounts.google.com/">Gmail</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="footer-links">
                      <h5 className="footer-title">
                        subscribe
                        <span className="according-menu">
                          <i className="fas fa-chevron-down"></i>
                        </span>
                      </h5>
                      <div className="footer-content">
                        <p className="mb-0">
                          Real estate investing involves the purchase,
                          Improvement of realty, management and sale or rental
                          of real estate for profit.
                        </p>
                        <form>
                          <div className="input-group">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Email Address"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="input-group-apend">
                              <button
                                type="submit"
                                className="input-group-text"
                                onClick={subscribe}
                              >
                                <FaPaperPlane />
                              </button>
                            </span>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom-blog">
                  <div className="slick-between">
                    <div className="footer-slider">
                      <div>
                        <div className="media"></div>
                      </div>
                      <div></div>
                      <div>
                        <div className="media">
                          <a href="blog-detail-left-sidebar.html">
                            <div className="img-overlay">
                              <img
                                src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Ffooter%2F3.jpg?alt=media&token=1350cb4f-66ee-4b23-80c1-ac58b55dfd60"
                                alt=""
                              />
                            </div>
                          </a>
                          <div className="media-body">
                            <h6>
                              <a href="blog-detail-left-sidebar.html">
                                Estate Agents Work
                              </a>
                            </h6>
                            <p className="font-roboto">
                              <a href="blog-detail-right-sidebar.html">
                                The market of buying and selling real estate.
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="media">
                          <a href="blog-detail-left-sidebar.html">
                            <div className="img-overlay">
                              <img
                                src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Ffooter%2F4.jpg?alt=media&token=c21e0b68-5715-4e4a-8856-effbe4143d4d"
                                alt=""
                              />
                            </div>
                          </a>
                          <div className="media-body">
                            <h6>
                              <a href="blog-detail-left-sidebar.html">
                                Increase in Demand
                              </a>
                            </h6>
                            <p className="font-roboto">
                              <a href="blog-detail-right-sidebar.html">
                                The effects of an increase demand in short run.
                              </a>
                            </p>
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
        <div className="sub-footer footer-light">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-md-6">
                <div className="copy-right">
                  <p className="mb-0">
                    Copyright 2022, All Right Reserved Horizon
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-md-6 text-end">
                <ul className="sub-footer-link">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="terms-conditions.html">Terms</a>
                  </li>
                  <li>
                    <a href="privacy-policy.html">Privacy policy</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- footer end --> */}
    </div>
  );
}

export default Footer;
