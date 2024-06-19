import React from "react";
import { Activity, DollarSign, Home } from "react-feather";
import "../App.css";

function AboutUs() {
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
              <h2>About Us</h2>
              <nav aria-label="breadcrumb" className="theme-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/horizon">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About Us
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- breadcrumb end --> */}

      {/* <!-- About us section start --> */}
      <section className="about-main ratio_36">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="title-2">
                <h2>About Us</h2>
                <p className="font-roboto">
                  Residences can be classified into different type of housing
                  tenure can used for same physical type.
                </p>
              </div>
              <div className="user-about">
                <div className="row">
                  <div className="col-xl-5 col-lg-7">
                    <div className="about-content">
                      <h3>
                        We are the <br />
                        expert of communication
                      </h3>
                      <p className="font-roboto">
                        Decoration is the furnishing of a space with decorative
                        elements, sometimes complemented by advice and practical
                        assistance. sometimes complemented by advice and
                        practical assistance.
                      </p>
                    </div>
                    <div className="about-listing">
                      <ul>
                        <li>
                          <h4>15,801</h4>
                          <p>Total property</p>
                        </li>
                        <li>
                          <h4>5792</h4>
                          <p>Agents</p>
                        </li>
                        <li>
                          <h4>3871</h4>
                          <p>Agency</p>
                        </li>
                        <li>
                          <h4>4791+</h4>
                          <p>Sold out property</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-7 map-image col-lg-5">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2FaboutUs%2Fmap.png?alt=media&token=d386df4c-7f6d-408f-b2a7-f77fca9a5221"
                      className="img-fluid bg-img"
                      alt=""
                    />
                    <div className="marker-icons">
                      <ul>
                        <li>
                          <img
                            className="img-fluid marker-1"
                            src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2FaboutUs%2Fmarker-icon.png?alt=media&token=ea27ed69-bf70-4ed0-89bd-ff9ca7ee0127"
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            className="img-fluid marker-2"
                            src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2FaboutUs%2Fmarker-icon.png?alt=media&token=ea27ed69-bf70-4ed0-89bd-ff9ca7ee0127"
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            className="img-fluid marker-3"
                            src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2FaboutUs%2Fmarker-icon.png?alt=media&token=ea27ed69-bf70-4ed0-89bd-ff9ca7ee0127"
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            className="img-fluid marker-4"
                            src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2FaboutUs%2Fmarker-icon.png?alt=media&token=ea27ed69-bf70-4ed0-89bd-ff9ca7ee0127"
                            alt=""
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- About us section end --> */}

      {/* <!-- Why choose us section start --> */}
      <section className="why-choose ratio_40 service-section service-1 bg-light">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="title-2">
                <h2>Why choose us</h2>
                <p className="font-roboto">
                  Elegant retreat in Coral Gables setting. This home provides
                  entertaining spaces with kitchen opening
                </p>
              </div>
              <div className="row property-service column-space">
                <div className="col-xl-4 col-md-6">
                  <div className="service-box">
                    <div className="icon-round">
                      <Activity />
                    </div>
                    <h3>Tax Advantage</h3>
                    <p>
                      Residences can be classified by and how they are connected
                      to neighbouring residences and land
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="service-box">
                    <div className="icon-round">
                      <Home />
                    </div>
                    <h3>Property Insurance</h3>
                    <p>
                      Residences can be classified by and how they are connected
                      to neighbouring residences and land.
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="service-box">
                    <div className="icon-round">
                      <DollarSign />
                    </div>
                    <h3>Lowest Commission</h3>
                    <p>
                      Residences can be classified by and how they are connected
                      to neighbouring residences and land.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Why choose us section end --> */}

      {/* <!-- testimonial section start --> */}
      <section className="about-testimonial">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="title-2">
                <h2>Our Happy Client</h2>
                <p className="font-roboto">
                  Residences can be classified into different type of housing
                  tenure can used for same physical type.
                </p>
              </div>
              <div className="testimonial-4">
                <div className="modern-client row">
                  <div className="col-lg-6">
                    <div className="img-testimonial">
                      <div>
                        <div className="img-left">
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2FaboutUs%2F3.jpg?alt=media&token=76a866c8-5457-4467-a3f1-9dc04b0369fc"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="img-left">
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2FaboutUs%2F3.jpg?alt=media&token=76a866c8-5457-4467-a3f1-9dc04b0369fc"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-md-9 col-sm-10">
                    <div className="right-height">
                      <div className="comment-right">
                        <div>
                          <div className="media">
                            <div className="media-body">
                              <a href="user-profile.html">
                                <h3 className="d-flex">
                                  Mark Andry{" "}
                                  <span className="label-heart color-4 ms-2">
                                    <i className="fas fa-heart"></i>
                                  </span>
                                </h3>
                              </a>
                            </div>
                            <ul className="client-rating">
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                            </ul>
                          </div>
                          <h6>an Elegant type of Profiles...</h6>
                          <p className="font-roboto">
                            Residences can be classified by and how they are
                            connected to neighbouring residences and land.
                            Different types of housing tenure can be used for
                            the same physical type.
                          </p>
                          <span className="font-roboto">
                            John@inspirythemes.com
                          </span>
                        </div>
                        <div>
                          <div className="media">
                            <div className="media-body">
                              <a href="user-profile.html">
                                <h3 className="d-flex">
                                  John David{" "}
                                  <span className="label-heart color-4 ms-2">
                                    <i className="fas fa-heart"></i>
                                  </span>
                                </h3>
                              </a>
                            </div>
                            <ul className="client-rating">
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                            </ul>
                          </div>
                          <h6>an elegant wave of the hand...</h6>
                          <p className="font-roboto">
                            Residences can be classified by and how they are
                            connected to neighbouring residences and land.
                            Different types of housing tenure can be used for
                            the same physical type.
                          </p>
                          <span className="font-roboto">
                            Robot@inspirythemes.com
                          </span>
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
      {/* <!-- testimonial section end --> */}

      {/* <!-- blog section start--> 
    <section className="ratio2_1 bg-light blog-inner">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="title-2">
                        <h2>Latest Blog</h2>
                        <p className="font-roboto">Elegant retreat in Coral Gables setting. This home provides entertaining spaces with
                            kitchen opening</p>
                    </div>
                    <div className="blog-2 blog-grid">
                        <div>
                            <div className="blog-wrap">
                                <div className="blog-image">
                                    <div>
                                        <img src="https://themes.pixelstrap.com/sheltos/assets/images/blog/1.jpg" className="bg-img img-fluid" alt=""/>
                                    </div>
                                    <div className="blog-label">
                                        <div>
                                            <h3>04</h3>
                                            <span>Aug</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-details">
                                    <span><i data-feather="map-pin"></i> Phonics ,Newyork</span>
                                    <h3><a href="blog-detail-left-sidebar.html">Twice profit than before you ever
                                        got in business.</a></h3>
                                    <p className="font-roboto">Residences can be classified by and how they are connected to neighbouring residences and land. 
                                        Different types of housing tenure can be used for the same physical type. </p>
                                    <a href="blog-detail-left-sidebar.html">read more</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="blog-wrap">
                                <div className="blog-image">
                                    <div>
                                        <img src="https://themes.pixelstrap.com/sheltos/assets/images/blog/2.jpg" className="bg-img img-fluid" alt=""/>
                                    </div>
                                    <div className="blog-label">
                                        <div>
                                            <h3>12</h3>
                                            <span>Dec</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-details">
                                    <span><i data-feather="map-pin"></i> Cambridge,England</span>
                                    <h3><a href="blog-detail-left-sidebar.html">Residences can be classified how they are connected.</a></h3>
                                    <p className="font-roboto">Luxury real estate is sometimes use as store value, especially wealthy foreigners, without any particular attempt to rent. Some luxury units in London and New York City.</p>
                                    <a href="blog-detail-left-sidebar.html">read more</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="blog-wrap">
                                <div className="blog-image">
                                    <div>
                                        <img src="https://themes.pixelstrap.com/sheltos/assets/images/blog/3.jpg" className="bg-img img-fluid" alt=""/>
                                    </div>
                                    <div className="blog-label">
                                        <div>
                                            <h3>15</h3>
                                            <span>Sept</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-details">
                                    <span><i data-feather="map-pin"></i> Barcelona,London</span>
                                    <h3><a href="blog-detail-left-sidebar.html">Different type of housing can used same physical type.</a></h3>
                                    <p className="font-roboto">Decoration is the furnishing of a space with decorative elements, sometimes complemented by advice. sometimes complemented and practical assistance. </p>
                                    <a href="blog-detail-left-sidebar.html">read more</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="blog-wrap">
                                <div className="blog-image">
                                    <div>
                                        <img src="https://themes.pixelstrap.com/sheltos/assets/images/blog/2.jpg" className="bg-img img-fluid" alt=""/>
                                    </div>
                                    <div className="blog-label">
                                        <div>
                                            <h3>05</h3>
                                            <span>nov</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-details">
                                    <span><i data-feather="map-pin"></i> Berlin,Germany</span>
                                    <h3><a href="blog-detail-left-sidebar.html">Apartment An individual unit in a multi-unit building.</a></h3>
                                    <p className="font-roboto">Sometimes complemented by advice. Decoration is the furnishing of a space with decorative elements, sometimes complemented .</p>
                                    <a href="blog-detail-left-sidebar.html">read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- blog section end--> */}

      {/* <!-- brand 1 start --> */}
      <section className="small-section brand-wrap">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="slide-2 brand-slider">
                <div>
                  <a className="logo-box">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fbrand%2F6.png?alt=media&token=c2226830-c181-4bee-ba70-338491623403"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div>
                  <a className="logo-box">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fbrand%2F7.png?alt=media&token=e91e0b5b-ed83-4e94-aa19-74449ec1bef1"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div>
                  <a className="logo-box">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fbrand%2F8.png?alt=media&token=0c3ac302-d876-4457-bfda-234debe66064"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div>
                  <a className="logo-box">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fbrand%2F9.png?alt=media&token=fd2cd083-045d-4097-99c2-f2e970a3069b"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div>
                  <a className="logo-box">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fbrand%2F10.png?alt=media&token=cebfc026-e459-456f-a4c3-0dcba58076c9"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div>
                  <a className="logo-box">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fbrand%2F11.png?alt=media&token=63d1bc4a-033f-4649-8bc1-de750c8f0c39"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div>
                  <a className="logo-box">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fbrand%2F7.png?alt=media&token=e91e0b5b-ed83-4e94-aa19-74449ec1bef1"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- brand 1 end --> */}
    </div>
  );
}

export default AboutUs;
