import { useState, useEffect } from "react";
import { FaKey, FaHouseUser, FaBuilding } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {
  Home,
  DollarSign,
  Settings,
  Bell,
  BookOpen,
  MapPin,
} from "react-feather";
import {
  where,
  collection,
  query,
  getDocs,
  orderBy,
  limit,
  doc,
  addDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "../FirebaseAuth/firebase";
import excerptHtml from "excerpt-html";
import "../styles/HomePage.css";
import { useAuthState } from "react-firebase-hooks/auth";
import handwritten from "../assets/handwritten.png";

function HomePage() {
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [propertyList, setPropertyList] = useState([]);
  const [latestPropertyList, setLatestPropertyList] = useState([]);
  const [propertyType, setPropertyType] = useState([]);
  const [type, setType] = useState("Residential");
  const [cityList, setCityList] = useState([]);
  const [city, setCity] = useState("");
  const [successAlert, setSuccessAlert] = useState(false);
  const [err, setErr] = useState(false);
  const [email, setEmail] = useState("");
  const [user] = useAuthState(auth);

  useEffect(() => {
    const fetch = async () => {
      const q = query(
        collection(db, "propertyDetails"),
        where("featuredProperty", "==", "true")
      );
      const result = await getDocs(q);
      const list = [];
      result.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setPropertyList(list);
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetchLatestProperty = async () => {
      const q = query(
        collection(db, "propertyDetails"),
        orderBy("createdAt", "desc"),
        limit(6)
      );
      const result = await getDocs(q);
      const list = [];
      result.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setLatestPropertyList(list);
    };
    fetchLatestProperty();
  }, []);

  // const handlePropertyType = (type) => {
  //   queryPropertyType(type)
  // }
  useEffect(() => {
    const queryPropertyType = async () => {
      const q = query(
        collection(db, "propertyDetails"),
        orderBy("propertyType"),
        where("propertyType", "==", type),
        limit(3)
      );
      const result = await getDocs(q);
      const list = [];
      result.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setPropertyType(list);
    };
    queryPropertyType();
  }, [type]);

  useEffect(() => {
    const fetchCities = async () => {
      const q = collection(db, "propertyDetails");
      const result = await getDocs(q);
      const list = [];
      result.forEach((doc) => {
        list.push(doc.data().city);
      });
      const counter = [];
      list.forEach((ele) => {
        if (counter[ele]) {
          counter[ele] += 1;
        } else {
          counter[ele] = 1;
        }
      });
      setCityList(counter);
    };
    fetchCities();
  }, []);

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
      setSuccessAlert(true);
      setTimeout(() => setSuccessAlert(false), 3000);
      setEmail("");
    } catch (e) {
      console.error("Error adding document: ", e);
      setErr(
        "* There is some problem in submitting the error. Please try again."
      );
      setTimeout(() => setErr(""), 3000);
    }
  };

  return (
    <div>
      {/* <!-- home section start --> */}
      <section className="home-section layout-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-8 col-md-11">
              <div className="home-main">
                <div className="home-content">
                  <div>
                    <img src={handwritten} className="img-fluid m-0" alt="" />
                    <h6>Want to own a piece of real estate?</h6>
                    <h1>
                      You should be earning like a landlord, not working like
                      one<span className="typed"></span>
                    </h1>
                    <div className="row">
                      <div className="col-xl-8">
                        <p>
                          An easier way to build a real estate portfolio, no
                          landlording required.
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => navigate("/marketPlace")}
                      className="btn btn-lg btn-gradient btn-pill color-2"
                    >
                      explore property
                    </button>

                    <div className="looking-icons">
                      <ul>
                        <li
                          onClick={() => {
                            setData("Residential");
                          }}
                        >
                          <a
                            href={`/marketPlace?type=${data}`}
                            className="looking-icon"
                          >
                            <svg className="property-svg">
                              <FaHouseUser style={{ fontSize: "50px" }} />
                            </svg>
                            <h6>Residential</h6>
                          </a>
                        </li>
                        <li
                          onClick={() => {
                            setData("Commercial");
                          }}
                        >
                          <a
                            href={`/marketPlace?type=${data}`}
                            className="looking-icon"
                          >
                            <svg className="property-svg">
                              <FaBuilding style={{ fontSize: "50px" }} />
                            </svg>
                            <h6>Commercial</h6>
                          </a>
                        </li>
                        <li
                          onClick={() => {
                            setData("Land");
                          }}
                        >
                          <a
                            href={`/marketPlace?type=${data}`}
                            className="looking-icon"
                          >
                            <svg className="property-svg">
                              <FaKey style={{ fontSize: "50px" }} />
                            </svg>
                            <h6>Land</h6>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="decor-image">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fshape.png?alt=media&token=c2fa74a5-09a7-4f18-a59d-a242cc73c2cd"
            alt=""
            className="img-fluid"
          />
        </div>
      </section>
      {/* <!-- home section end --> */}

      {/* <!-- service section start --> */}
      <section className="service-section service-1">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="title-2">
                <h2>Property Services</h2>
                <p>
                  Real estate is already the foundation of your community. We
                  help you make it the foundation of your portfolio.
                </p>
              </div>
              <div className="row property-service column-space">
                <div className="col-xl-4 col-md-6 wow fadeInUp">
                  <div className="service-box">
                    <div className="icon-round">
                      <Home />
                    </div>
                    <h3>Property Management</h3>
                    <p>
                      Property management is the control, maintenance of real
                      estate and physical property.
                    </p>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-md-6 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="service-box">
                    <div className="icon-round">
                      <DollarSign />
                    </div>
                    <h3>Mortgage Services</h3>
                    <p>
                      Residences can be classNameified by and how they are
                      connected to neighbouring residences and land.
                    </p>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-md-6 wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="service-box">
                    <div className="icon-round">
                      <Settings />
                    </div>
                    <h3>Currency Services</h3>
                    <p>
                      A currency is standardization of money in any form when
                      use or circulation as medium of exchange.
                    </p>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-md-6 wow fadeInUp"
                  data-wow-delay="400ms"
                >
                  <div className="service-box">
                    <div className="icon-round">
                      <Bell />
                    </div>
                    <h3>Get important notifications</h3>
                    <p>
                      Residences can be classNameified by and how they are
                      connected to neighbouring residences and land.
                    </p>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-md-6 wow fadeInUp"
                  data-wow-delay="500ms"
                >
                  <div className="service-box">
                    <div className="icon-round">
                      <BookOpen />
                    </div>
                    <h3>Transparency</h3>
                    <p>
                      Apartments or flats on each floor and with shared entrance
                      stairway access found in Britain.
                    </p>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-md-6 wow fadeInUp"
                  data-wow-delay="600ms"
                >
                  <div className="service-box">
                    <div className="icon-round">
                      <MapPin />
                    </div>
                    <h3>Near by me</h3>
                    <p>
                      Residences can be classNameified by and how they are
                      connected to neighbouring residences and land.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- service section end --> */}

      {/* <!--property of the day section start --> */}
      {propertyList.map((list) => {
        return (
          <section
            key={list.id}
            className="banner-section banner-4 new-property parallax-image"
          >
            <div className="container">
              <div className="row ratio_landscape feature-section">
                <div className="col">
                  <div className="title-2 text-white">
                    <h2>Property of the day</h2>
                    <p>
                      Discover the chosen property for the day curated by our
                      experts
                    </p>
                  </div>
                  <div className="feature-wrap">
                    <div className="row">
                      <div className="col-xl-6 col-lg-5">
                        <div className="feature-image property-slider mb-0">
                          <div
                            id={`carouselExampleIndicators-${list.id}`}
                            className="carousel slide"
                            data-ride="carousel"
                          >
                            <div className="carousel-inner">
                              <div className="carousel-item active">
                                <img
                                  className="d-block w-100"
                                  src={list.urlarray?.[0]}
                                  alt="First slide"
                                  width="600px"
                                  height="600px"
                                />
                              </div>
                              <div className="carousel-item">
                                <img
                                  className="d-block w-100"
                                  src={list.urlarray?.[1]}
                                  alt="Second slide"
                                  width="600px"
                                  height="600px"
                                />
                              </div>
                              {list.urlarray?.[2] ? (
                                <div className="carousel-item">
                                  <img
                                    className="d-block w-100"
                                    src={list.urlarray?.[2]}
                                    alt="Third slide"
                                    width="600px"
                                    height="600px"
                                  />
                                </div>
                              ) : (
                                ""
                              )}
                              {list.urlarray?.[3] ? (
                                <div className="carousel-item">
                                  <img
                                    className="d-block w-100"
                                    src={list.urlarray?.[3]}
                                    alt="Fourth slide"
                                    width="600px"
                                    height="600px"
                                  />
                                </div>
                              ) : (
                                ""
                              )}
                              {list.urlarray?.[4] ? (
                                <div className="carousel-item">
                                  <img
                                    className="d-block w-100"
                                    src={list.urlarray?.[4]}
                                    alt="fifth slide"
                                    width="600px"
                                    height="600px"
                                  />
                                </div>
                              ) : (
                                ""
                              )}
                              {list.urlarray?.[5] ? (
                                <div className="carousel-item">
                                  <img
                                    className="d-block w-100"
                                    src={list.urlarray?.[5]}
                                    alt="Sixth slide"
                                    width="600px"
                                    height="600px"
                                  />
                                </div>
                              ) : (
                                ""
                              )}
                            </div>
                            <a
                              className="carousel-control-prev"
                              href={`#carouselExampleIndicators-${list.id}`}
                              role="button"
                              data-slide="prev"
                            >
                              <span
                                className="carousel-control-prev"
                                aria-hidden="true"
                              ></span>
                              <span className="sr-only">Previous</span>
                            </a>
                            <a
                              className="carousel-control-next"
                              href={`#carouselExampleIndicators-${list.id}`}
                              role="button"
                              data-slide="next"
                            >
                              <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                              ></span>
                              <span className="sr-only">Next</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-7">
                        <div className="feature-content">
                          <div className="details">
                            <h3>
                              <span>{list.propertyName} in</span> {list.city}
                            </h3>
                            <span>
                              {list.address}, {list.city}, {list.country}
                            </span>

                            <p className="font-roboto">
                              {excerptHtml(list.description, 420)}
                            </p>
                          </div>
                          <ul className="detail-list">
                            <li>
                              <div className="d-flex">
                                <span className="label label-light color-2 label-lg">
                                  <img
                                    src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fbed.png?alt=media&token=c76e7460-b4f7-487d-b71a-60da51f62925"
                                    className="img-fluid img-icon"
                                    alt=""
                                  />
                                </span>
                                <h6>Bedroom</h6>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex">
                                <span className="label label-light color-2 label-lg">
                                  <img
                                    src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fbathroom.png?alt=media&token=7df21241-c7d1-4317-82bc-bd5594cede13"
                                    className="img-fluid img-icon"
                                    alt=""
                                  />
                                </span>
                                <h6>Bathroom</h6>
                              </div>
                            </li>
                            <li>
                              <span className="label label-light color-2 label-lg">
                                {list.area} Sq Ft
                              </span>
                            </li>
                          </ul>
                          <ul className="feature-price">
                            <li>
                              <h3>₹{list.price}</h3>
                              <h6>Home For Sale</h6>
                            </li>
                            <li>
                              <Link
                                to={`/property-details/${list.docId}`}
                                className="btn btn-gradient btn-pill color-2 btn-lg"
                              >
                                View property
                              </Link>
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
        );
      })}
      {/* <!--property of the day section end --> */}

      {/* <!-- property section start --> */}
      <section className="property-section">
        <div className="container">
          <div className="row ratio_55">
            <div className="col">
              <div className="title-2">
                <h2>Latest Property Listing</h2>
                <p>Discover latest properties in the best locations</p>
              </div>
              <div className="property-2 row column-space">
                {latestPropertyList.map((list) => {
                  return (
                    <div
                      key={list.id}
                      className="col-xl-4 col-md-6 wow fadeInUp"
                    >
                      <div className="property-box">
                        <div className="property-image">
                          <div className="property-slider">
                            <div
                              id={`carouselExampleIndicators-${list.id}`}
                              className="carousel slide"
                              data-ride="carousel"
                              data-interval="false"
                            >
                              {/* <ol className="carousel-indicators">
                                                                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                                                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                                                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                                                                    </ol> */}
                              <div className="carousel-inner">
                                <div className="carousel-item active">
                                  <img
                                    className="d-block w-100"
                                    src={list.urlarray[0]}
                                    alt="First slide"
                                    width="600px"
                                    height="300px"
                                  />
                                </div>
                                <div className="carousel-item">
                                  <img
                                    className="d-block w-100"
                                    src={list.urlarray[1]}
                                    alt="Second slide"
                                    width="600px"
                                    height="300px"
                                  />
                                </div>
                                {list.urlarray?.[2] ? (
                                  <div className="carousel-item">
                                    <img
                                      className="d-block w-100"
                                      src={list.urlarray[2]}
                                      alt="Third slide"
                                      width="600px"
                                      height="300px"
                                    />
                                  </div>
                                ) : (
                                  ""
                                )}
                                {list.urlarray?.[3] ? (
                                  <div className="carousel-item">
                                    <img
                                      className="d-block w-100"
                                      src={list.urlarray[3]}
                                      alt="Fourth slide"
                                      width="600px"
                                      height="300px"
                                    />
                                  </div>
                                ) : (
                                  ""
                                )}
                                {list.urlarray?.[4] ? (
                                  <div className="carousel-item">
                                    <img
                                      className="d-block w-100"
                                      src={list.urlarray?.[4]}
                                      alt="fifth slide"
                                      width="1450px"
                                      height="700px"
                                    />
                                  </div>
                                ) : (
                                  ""
                                )}
                                {list.urlarray?.[5] ? (
                                  <div className="carousel-item">
                                    <img
                                      className="d-block w-100"
                                      src={list.urlarray?.[5]}
                                      alt="Sixth slide"
                                      width="1450px"
                                      height="700px"
                                    />
                                  </div>
                                ) : (
                                  ""
                                )}
                              </div>
                              <a
                                className="carousel-control-prev"
                                href={`#carouselExampleIndicators-${list.id}`}
                                role="button"
                                data-slide="prev"
                              >
                                <span
                                  className="carousel-control-prev"
                                  aria-hidden="true"
                                ></span>
                                <span className="sr-only">Previous</span>
                              </a>
                              <a
                                className="carousel-control-next"
                                href={`#carouselExampleIndicators-${list.id}`}
                                role="button"
                                data-slide="next"
                              >
                                <span
                                  className="carousel-control-next-icon"
                                  aria-hidden="true"
                                ></span>
                                <span className="sr-only">Next</span>
                              </a>
                            </div>
                          </div>

                          <div className="labels-left">
                            <div>
                              <span className="label label-shadow">
                                {list.propertyStatus}
                              </span>
                            </div>
                            <div>
                              <span className="label label-shadow">
                                {list.propertyType}
                              </span>
                            </div>
                          </div>
                          <div className="seen-data">
                            <i data-feather="camera"></i>
                            <span>{list.id}</span>
                          </div>
                        </div>

                        <div className="property-details">
                          <span className="font-roboto">{list.city}</span>
                          <Link to={`/property-details/${list.docId}`}>
                            <h3>{list.propertyName}</h3>
                          </Link>
                          <h6>₹{list.price}</h6>
                          <p className="font-roboto">
                            {excerptHtml(list.description, 120)}
                          </p>
                          <ul>
                            <li>
                              <img
                                src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fdouble-bed.svg?alt=media&token=adce4401-145c-4800-a0f3-6935bfc6578e"
                                className="img-fluid"
                                alt=""
                              />
                              Bed : {list.beds}
                            </li>
                            <li>
                              <img
                                src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fbathroom.svg?alt=media&token=2dd2178a-998e-4aa0-ba60-a4ca1dfe65db"
                                className="img-fluid"
                                alt=""
                              />
                              Baths : {list.baths}
                            </li>
                            <li>
                              <img
                                src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fsquare-ruler-tool.svg?alt=media&token=8c121dad-da46-4f7f-b8b3-c62fe1ad2a1c"
                                className="img-fluid ruler-tool"
                                alt=""
                              />
                              Sq Ft : {list.area}
                            </li>
                          </ul>
                          <div className="property-btn d-flex">
                            <span>
                              {list.minimumHoldPeriod} years investment
                            </span>
                            <Link
                              to={`/property-details/${list.docId}`}
                              className="btn btn-dashed btn-pill color-2"
                            >
                              Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- property section end --> */}

      {/* <!-- property section tab start --> */}
      <section className="property-section bg-comman-2">
        <div className="container">
          <div className="row ratio_55">
            <div className="col">
              <div className="title-2 text-white">
                <h2>What Are You Looking For</h2>
                <p>Find the property that best suits your need</p>
              </div>
              <ul id="tabs" className="nav nav-tabs">
                <li className="nav-item" onClick={() => setType("Residential")}>
                  <p
                    data-bs-target="#morden"
                    data-bs-toggle="tab"
                    className="nav-link active"
                  >
                    Residential
                  </p>
                </li>
                <li className="nav-item" onClick={() => setType("Commercial")}>
                  <p
                    data-bs-target="#family"
                    data-bs-toggle="tab"
                    className="nav-link"
                  >
                    Commercial
                  </p>
                </li>
                <li className="nav-item" onClick={() => setType("Land")}>
                  <p
                    data-bs-target="#town"
                    data-bs-toggle="tab"
                    className="nav-link"
                  >
                    Land
                  </p>
                </li>
                {/* <li className="nav-item">
                  <a
                    href="#"
                    data-bs-target="#appartment"
                    data-bs-toggle="tab"
                    className="nav-link"
                  >
                    Apartment
                  </a>
                </li> */}
                {/* <li className="nav-item">
                  <a
                    href="#"
                    data-bs-target="#office"
                    data-bs-toggle="tab"
                    className="nav-link"
                  >
                    Office
                  </a>
                </li> */}
              </ul>
              <div id="tabsContent" className="tab-content">
                <div id="morden" className="tab-pane fade active show">
                  <div className="property-2 row column-space zoom-gallery">
                    {propertyType.map((list) => {
                      return (
                        <div className="col-xl-4 col-md-6">
                          <div className="property-box">
                            <div className="property-image">
                              <img
                                src={list.urlarray}
                                className="bg-img"
                                alt=""
                                width="500px"
                                height="340px"
                              />

                              <div className="labels-left">
                                <div>
                                  <span className="label label-shadow">
                                    {list.propertyStatus}
                                  </span>
                                </div>
                                <div>
                                  <span className="label label-shadow">
                                    {list.propertyType}
                                  </span>
                                </div>
                              </div>
                              <div className="seen-data">
                                <i data-feather="camera"></i>
                                <span>{list.id}</span>
                              </div>
                            </div>
                            <div className="property-details">
                              <span className="font-roboto">{list.city}</span>
                              <h3>{list.propertyName}</h3>
                              <h6 className="color-2">₹{list.price}</h6>
                              <p className="font-roboto">
                                {excerptHtml(list.description, 120)}
                              </p>
                              <ul>
                                <li>
                                  <img
                                    src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fdouble-bed.svg?alt=media&token=adce4401-145c-4800-a0f3-6935bfc6578e"
                                    className="img-fluid"
                                    alt=""
                                  />
                                  Bed : {list.beds}
                                </li>
                                <li>
                                  <img
                                    src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fbathroom.svg?alt=media&token=2dd2178a-998e-4aa0-ba60-a4ca1dfe65db"
                                    className="img-fluid"
                                    alt=""
                                  />
                                  Baths : {list.baths}
                                </li>
                                <li>
                                  <img
                                    src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fsquare-ruler-tool.svg?alt=media&token=8c121dad-da46-4f7f-b8b3-c62fe1ad2a1c"
                                    className="img-fluid ruler-tool"
                                    alt=""
                                  />
                                  Sq Ft : {list.area}
                                </li>
                              </ul>
                              <div className="property-btn d-flex">
                                <span>
                                  {list.minimumHoldPeriod} years investment
                                </span>
                                <Link to={`/property-details/${list.docId}`}>
                                  <button
                                    type="button"
                                    // onClick="document.location='/property'"
                                    className="btn btn-dashed btn-pill color-2"
                                  >
                                    Details
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- property section tab end --> */}

      {/* <!-- feature section start --> */}
      <section className="feature-section bg-comman-2 slick-between">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="title-2 text-white">
                <h2>Featured Cities</h2>
                <p>
                  See why ProCity is one of the best friends for exploring the
                  city.
                </p>
              </div>

              <div className="feature-2 dot-gradient">
                <div>
                  <div className="feature-box">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Ffeatures%2F3.jpg?alt=media&token=8302ec2f-e7d6-4248-88e9-7b29e5e1b892"
                      className="img-fluid"
                      alt=""
                    />
                    <a href={`/marketPlace?city=${city}`}>
                      <div
                        className="feature-bottom"
                        onClick={() => setCity(Object.keys(cityList)[0])}
                      >
                        <h3>{Object.keys(cityList)[0]}</h3>
                        <span>{Object.values(cityList)[0]} Property</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div>
                  <div className="feature-box">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Ffeatures%2F4.jpg?alt=media&token=3b33de46-6510-4aed-af3c-3d4ba8097622"
                      className="img-fluid"
                      alt=""
                    />
                    <a href={`/marketPlace?city=${city}`}>
                      <div
                        className="feature-bottom"
                        onClick={() => setCity(Object.keys(cityList)[1])}
                      >
                        <h3>{Object.keys(cityList)[1]}</h3>
                        <span>{Object.values(cityList)[1]} Property</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div>
                  <div className="feature-box">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Ffeatures%2F5.jpg?alt=media&token=b2214706-0fe9-4ca2-8cd7-45912610703b"
                      className="img-fluid"
                      alt=""
                    />
                    <a href={`/marketPlace?city=${city}`}>
                      <div
                        className="feature-bottom"
                        onClick={() => setCity(Object.keys(cityList)[2])}
                      >
                        <h3>{Object.keys(cityList)[2]}</h3>
                        <span>{Object.values(cityList)[2]} Property</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div>
                  {Object.keys(cityList)[3] && Object.values(cityList)[3] ? (
                    <div className="feature-box">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Ffeatures%2F6.jpg?alt=media&token=a2412c71-ce6e-499f-9513-98e457ee8e3e"
                        className="img-fluid"
                        alt=""
                      />
                      <a href={`/marketPlace?city=${city}`}>
                        <div
                          className="feature-bottom"
                          onClick={() => setCity(Object.keys(cityList)[3])}
                        >
                          <h3>{Object.keys(cityList)[3]}</h3>
                          <span>{Object.values(cityList)[3]} Property</span>
                        </div>
                      </a>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  {Object.keys(cityList)[4] && Object.values(cityList)[4] ? (
                    <div className="feature-box">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Ffeatures%2F7.jpg?alt=media&token=22fbd13e-f9f3-43b9-9c51-5f04584492d1"
                        className="img-fluid"
                        alt=""
                      />
                      <a href={`/marketPlace?city=${city}`}>
                        <div
                          className="feature-bottom"
                          onClick={() => setCity(Object.keys(cityList)[4])}
                        >
                          <h3>{Object.keys(cityList)[4]}</h3>
                          <span>{Object.values(cityList)[4]} Property</span>
                        </div>
                      </a>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  {Object.keys(cityList)[5] && Object.values(cityList)[5] ? (
                    <div className="feature-box">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Ffeatures%2F5.jpg?alt=media&token=b2214706-0fe9-4ca2-8cd7-45912610703b"
                        className="img-fluid"
                        alt=""
                      />
                      <a href={`/marketPlace?city=${city}`}>
                        <div
                          className="feature-bottom"
                          onClick={() => setCity(Object.keys(cityList)[5])}
                        >
                          <h3>{Object.keys(cityList)[5]}</h3>
                          <span>{Object.values(cityList)[5]} Property</span>
                        </div>
                      </a>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- feature section end --> */}

      {/* <!-- about section start --> */}
      <section className="about-section slick-between banner-4 parallax-image">
        <div className="container">
          <div className="row ratio_asos ">
            <div className="col">
              <div className="title-3 text-start">
                <h2 className="text-white">Our Team</h2>
                <p className="font-roboto text-white">
                  Meet our team of dedicated curators and real estate experts.
                </p>
              </div>
              <div className="about-3 arrow-gradient arrow-right">
                <div>
                  <div className="about-box wow fadeInUp">
                    <div className="agent-image">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fabout%2F1.jpg?alt=media&token=34ed5412-8981-48fa-95d6-2f233d3ce309"
                        className="bg-img"
                        alt=""
                        width="500px"
                      />
                      <div className="overlay-agent">
                        <div className="agent-details">
                          <a href="agent-profile.html">
                            <h6 className="d-flex">
                              Lee A. Sun
                              <span className="label-heart color-4 ms-2">
                                <i className="fa fa-heart"></i>
                              </span>
                            </h6>
                          </a>
                          <h5>an elegant wave of the hand...</h5>
                          <p className="font-roboto">
                            Different types of housing can be used same physical
                            type.
                          </p>
                          <span className="font-roboto">
                            John@inspirythemes.com
                          </span>
                          <ul>
                            <li>
                              <a href="https://accounts.google.com/">
                                <img
                                  src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fabout%2Ficon-1.png?alt=media&token=77a7f6a1-c4f7-45aa-b7d4-308aa60090cc"
                                  alt=""
                                />
                              </a>
                            </li>
                            <li>
                              <a href="https://twitter.com/">
                                <img
                                  src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fabout%2Ficon-2.png?alt=media&token=8122aad1-6595-42c5-814e-ff3b27a1480b"
                                  alt=""
                                />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.facebook.com/">
                                <img
                                  src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fabout%2Ficon-3.png?alt=media&token=724743ee-fbad-4a0f-a447-c73be9801d8f"
                                  alt=""
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="about-box wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <div className="agent-image">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fabout%2F2.jpg?alt=media&token=ccc13150-2b6a-4b39-aa7b-e2760eea4632"
                        className="bg-img"
                        alt=""
                        width="500px"
                      />
                      <div className="overlay-agent">
                        <div className="agent-details">
                          <a href="agent-profile.html">
                            <h6 className="d-flex">
                              Peg Legge
                              <span className="label-heart color-4 ms-2">
                                <i className="fa fa-heart"></i>
                              </span>
                            </h6>
                          </a>
                          <h5>An Elegant type of profile..</h5>
                          <p className="font-roboto">
                            Apartment An individual unit in a multi-unit
                            building.
                          </p>
                          <span className="font-roboto">
                            Robot@inspirythemes.com
                          </span>
                          <ul>
                            <li>
                              <a href="https://accounts.google.com/">
                                <img
                                  src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fabout%2Ficon-1.png?alt=media&token=77a7f6a1-c4f7-45aa-b7d4-308aa60090cc"
                                  alt=""
                                />
                              </a>
                            </li>
                            <li>
                              <a href="https://twitter.com/">
                                <img
                                  src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fabout%2Ficon-2.png?alt=media&token=8122aad1-6595-42c5-814e-ff3b27a1480b"
                                  alt=""
                                />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.facebook.com/">
                                <img
                                  src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fabout%2Ficon-3.png?alt=media&token=724743ee-fbad-4a0f-a447-c73be9801d8f"
                                  alt=""
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="about-box wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    <div className="agent-image">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fabout%2F3.jpg?alt=media&token=e2c70d97-a79f-41d9-9e92-7aa3c0accbbc"
                        className="bg-img"
                        alt=""
                        width="346px"
                      />
                      <div className="overlay-agent">
                        <div className="agent-details">
                          <a href="agent-profile.html">
                            <h6 className="d-flex">
                              Anita Bath
                              <span className="label-heart color-4 ms-2">
                                <i className="fa fa-heart"></i>
                              </span>
                            </h6>
                          </a>
                          <h5>an elegant wave of the hand...</h5>
                          <p className="font-roboto">
                            Different types of housing can be used same physical
                            type.
                          </p>
                          <span className="font-roboto">
                            Eva@inspirythemes.com
                          </span>
                          <ul>
                            <li>
                              <a href="https://accounts.google.com/">
                                <img
                                  src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fabout%2Ficon-1.png?alt=media&token=77a7f6a1-c4f7-45aa-b7d4-308aa60090cc"
                                  alt=""
                                />
                              </a>
                            </li>
                            <li>
                              <a href="https://twitter.com/">
                                <img
                                  src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fabout%2Ficon-2.png?alt=media&token=8122aad1-6595-42c5-814e-ff3b27a1480b"
                                  alt=""
                                />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.facebook.com/">
                                <img
                                  src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fabout%2Ficon-3.png?alt=media&token=724743ee-fbad-4a0f-a447-c73be9801d8f"
                                  alt=""
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="about-box wow fadeInUp"
                    data-wow-delay="400ms"
                  >
                    <div className="agent-image">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fabout%2F4.jpg?alt=media&token=46c2123d-b127-4682-90a7-5d8f95923d26"
                        className="bg-img"
                        alt=""
                        width="346px"
                      />
                      <div className="overlay-agent">
                        <div className="agent-details">
                          <a href="agent-profile.html">
                            <h6 className="d-flex">
                              Dee End
                              <span className="label-heart color-4 ms-2">
                                <i className="fa fa-heart"></i>
                              </span>
                            </h6>
                          </a>
                          <h5>An Elegant type of profile..</h5>
                          <p className="font-roboto">
                            Apartment An individual unit in a multi-unit
                            building.
                          </p>
                          <span className="font-roboto">
                            Leea@inspirythemes.com
                          </span>
                          <ul>
                            <li>
                              <a href="https://accounts.google.com/">
                                <img
                                  src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fabout%2Ficon-1.png?alt=media&token=77a7f6a1-c4f7-45aa-b7d4-308aa60090cc"
                                  alt=""
                                />
                              </a>
                            </li>
                            <li>
                              <a href="https://twitter.com/">
                                <img
                                  src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fabout%2Ficon-2.png?alt=media&token=8122aad1-6595-42c5-814e-ff3b27a1480b"
                                  alt=""
                                />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.facebook.com/">
                                <img
                                  src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fabout%2Ficon-3.png?alt=media&token=724743ee-fbad-4a0f-a447-c73be9801d8f"
                                  alt=""
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="about-box wow fadeInUp"
                    data-wow-delay="500ms"
                  >
                    <div className="agent-image">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fabout%2F2.jpg?alt=media&token=ccc13150-2b6a-4b39-aa7b-e2760eea4632"
                        className="bg-img"
                        alt=""
                        width="500px"
                      />
                      <div className="overlay-agent">
                        <div className="agent-details">
                          <a href="agent-profile.html">
                            <h6 className="d-flex">
                              Willie Makit
                              <span className="label-heart color-4 ms-2">
                                <i className="fa fa-heart"></i>
                              </span>
                            </h6>
                          </a>
                          <h5>an elegant wave of the hand...</h5>
                          <p className="font-roboto">
                            Different types of housing can be used same physical
                            type.
                          </p>
                          <span className="font-roboto">
                            Peg@inspirythemes.com
                          </span>
                          <ul>
                            <li>
                              <a href="https://accounts.google.com/">
                                <img
                                  src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fabout%2Ficon-1.png?alt=media&token=77a7f6a1-c4f7-45aa-b7d4-308aa60090cc"
                                  alt=""
                                />
                              </a>
                            </li>
                            <li>
                              <a href="https://twitter.com/">
                                <img
                                  src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fabout%2Ficon-2.png?alt=media&token=8122aad1-6595-42c5-814e-ff3b27a1480b"
                                  alt=""
                                />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.facebook.com/">
                                <img
                                  src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fabout%2Ficon-3.png?alt=media&token=724743ee-fbad-4a0f-a447-c73be9801d8f"
                                  alt=""
                                />
                              </a>
                            </li>
                          </ul>
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
      {/* <!-- about section end --> */}

      {/* <!-- testimonial section start --> */}
      <section className="testimonial-style-1">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="title-2">
                <h2>What People Say</h2>
                <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
              </div>
              <div className="slick-between">
                <div className="testimonial-1 dot-gradient">
                  <div>
                    <div className="pepole-comment">
                      <div className="client-msg">
                        <span className="quote">
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Ftestimonial%2Fquote.png?alt=media&token=5bc69632-34be-4914-9685-dfef8ca1a433"
                            alt=""
                          />
                        </span>
                        <p>
                          Life before Company was very chaotic — we got a lot of
                          mistyped orders. So with Company, the ability to see
                          the order directly from the customer makes it so
                          streamlined.
                        </p>
                      </div>
                      <div className="media">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Ftestimonial%2F1.jpg?alt=media&token=a6cf07b3-1151-4f23-8047-84ba1aff030a"
                          alt=""
                        />
                        <div className="media-body">
                          <h3>Aida Bugg</h3>
                          <span>CEO of Desees</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="pepole-comment">
                      <div className="client-msg">
                        <span className="quote">
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Ftestimonial%2Fquote.png?alt=media&token=5bc69632-34be-4914-9685-dfef8ca1a433"
                            alt=""
                          />
                        </span>
                        <p>
                          It won’t be easy, but buying my own home has been a
                          lifelong dream, and knowing that I will only get out
                          of it what I put into it, I’m ready to get a little
                          sweat on my brow and realize my dream to its fullest.
                        </p>
                      </div>
                      <div className="media">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Ftestimonial%2F1.jpg?alt=media&token=a6cf07b3-1151-4f23-8047-84ba1aff030a"
                          alt=""
                        />
                        <div className="media-body">
                          <h3>Teri Dactyl</h3>
                          <span>CEO of Desees</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="pepole-comment">
                      <div className="client-msg">
                        <span className="quote">
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Ftestimonial%2Fquote.png?alt=media&token=5bc69632-34be-4914-9685-dfef8ca1a433"
                            alt=""
                          />
                        </span>
                        <p>
                          To buy a nice home is to buy a better way of life. To
                          choose a better way of life is to work toward
                          well-being, life is to work toward well-beingand isn’t
                          well-being what’s paramount.
                        </p>
                      </div>
                      <div className="media">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Ftestimonial%2F4.jpg?alt=media&token=97859f35-cb19-49dc-999d-8f4e1b196364"
                          alt=""
                        />
                        <div className="media-body">
                          <h3>Elmer Harvy</h3>
                          <span>CEO of Desees</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="pepole-comment">
                      <div className="client-msg">
                        <span className="quote">
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Ftestimonial%2Fquote.png?alt=media&token=5bc69632-34be-4914-9685-dfef8ca1a433"
                            alt=""
                          />
                        </span>
                        <p>
                          The ability to see the order directly from the
                          customer makes it so streamlined. Life before Company
                          was very chaotic — we got a lot of mistyped orders. So
                          with Company.
                        </p>
                      </div>
                      <div className="media">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Ftestimonial%2F1.jpg?alt=media&token=a6cf07b3-1151-4f23-8047-84ba1aff030a"
                          alt=""
                        />
                        <div className="media-body">
                          <h3>Elmer Harvy</h3>
                          <span>CEO of Desees</span>
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

      {/* <!-- subscribe section start --> */}
      <section className="subscribe-section">
        <div className="container">
          {successAlert ? (
            <div className="alert alert-success" role="alert">
              Subscribed Successfully!
            </div>
          ) : (
            ""
          )}

          <div className="row">
            <div className="col">
              <div className="video-details">
                <p className="mb-10" style={{ color: "red" }}>
                  {err}
                </p>
                <span className="label label-light label-flat color-4">
                  #Realestate
                </span>
                <h2>Stay Up to Date</h2>
                <p className="font-roboto">
                  Elegant retreat in a quiet Coral Gables setting. This home
                  provides wonderful entertaining spaces with a chef kitchen
                  opening Elegant retreat in a quiet Coral Gables setting.
                </p>
                <form>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Your Email Address"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-gradient color-4 btn-lg"
                    onClick={subscribe}
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- subscribe section end --> */}

      {/* <!-- brand section start --> */}
      <section className="small-section bg-light brand-wrap">
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
      {/* <!-- brand section end --> */}
    </div>
  );
}

export default HomePage;
