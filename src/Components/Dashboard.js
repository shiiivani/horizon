import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../FirebaseAuth/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Camera } from "react-feather";
import { useAuthState } from "react-firebase-hooks/auth";
import excerptHtml from "excerpt-html";
import {
  orderBy,
  query,
  getDocs,
  collection,
  limit,
  startAfter,
  where,
  getDoc,
  doc,
} from "firebase/firestore";
import { useLoading } from "../services/LoadingContext";
import "../App.css";

function Dashboard() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [investmentList, setInvestmentList] = useState([]);
  const [propertyList, setPropertyList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(3);
  const [totalData, setTotalData] = useState(0);
  const { setLoading } = useLoading();
  const [lastDoc, setLastDoc] = useState([]);
  const [dataShown, setDataShown] = useState(0);
  const [userInfo, setUserInfo] = useState([]);
  const [currentSortDirection, setCurrentSortDirection] = useState("desc");

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
        navigate("/dashboard");
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
  }, [navigate]);

  const nPages = Math.ceil(totalData / dataPerPage);
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  useEffect(() => {
    const fetchInvestmentDetails = async () => {
      try {
        setLoading(true);
        const direction = currentSortDirection;

        const countRef = collection(
          db,
          "investedProperties",
          user?.uid,
          "investmentDetails"
        );
        const investmentDetailsRef = query(
          collection(db, "investedProperties", user?.uid, "investmentDetails"),
          orderBy("createdAt", direction),
          limit(dataPerPage)
        );
        const countSnapshot = await getDocs(countRef);
        const count = countSnapshot.size;
        setTotalData(count);
        const snapshot = await getDocs(investmentDetailsRef);

        const investments = snapshot.docs.map((doc) => ({
          ...doc.data(),
        }));
        const lastDoc = snapshot.docs[snapshot.docs.length - 1];
        const initialData = snapshot.size;
        setLastDoc(lastDoc);
        setDataShown(initialData);
        setInvestmentList((prevList) => [...prevList, ...investments]);
      } catch (error) {
        console.error("Error fetching investment details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInvestmentDetails();
  }, [currentSortDirection, dataPerPage, setLoading, user?.uid]);

  useEffect(() => {
    // console.log("counting", totalData);
  }, [totalData]);

  useEffect(() => {
    const fetchList = async () => {
      try {
        setLoading(true);

        const promises = investmentList.map(async (investmentItem) => {
          const documentId = investmentItem.property;

          const propertyDetailsRef = collection(db, "propertyDetails");
          const queryRef = query(
            propertyDetailsRef,
            where("docId", "==", documentId)
          );

          const snapshot = await getDocs(queryRef);

          const propertyData = snapshot.docs.map((doc) => ({
            ...doc.data(),
          }));

          return propertyData;
        });

        const propertyLists = await Promise.all(promises);

        // Flatten the array of arrays into a single array
        const flattenedProperties = propertyLists.flat();

        setPropertyList(flattenedProperties);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (investmentList.length > 0) {
      fetchList();
    }
  }, [investmentList, setLoading]);

  const fetchNextDocuments = async () => {
    if (currentPage * dataPerPage >= totalData) {
      return;
    } else {
      try {
        const direction = currentSortDirection;

        const investmentDetailsRef = query(
          collection(db, "investedProperties", user?.uid, "investmentDetails"),
          orderBy("createdAt", direction),
          startAfter(lastDoc),
          limit(dataPerPage)
        );

        const snapshot = await getDocs(investmentDetailsRef);

        const newInvestments = snapshot.docs.map((doc) => ({
          ...doc.data(),
        }));
        setInvestmentList((prevList) => [...prevList, ...newInvestments]);
        setDataShown(dataShown + snapshot.size);
        setCurrentPage(currentPage + 1);
        setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
      } catch (error) {
        console.error("Error fetching investment details:", error);
      }
    }
  };

  const fetchPreviousDocuments = async () => {
    if (currentPage === 1) {
      return;
    } else {
      try {
        const direction = currentSortDirection;
        const startIndex = (currentPage - 1) * dataPerPage;
        const investmentDetailsRef = query(
          collection(db, "investedProperties", user?.uid, "investmentDetails"),
          orderBy("createdAt", direction),
          limit(dataPerPage * currentPage)
        );

        const snapshot = await getDocs(investmentDetailsRef);

        const newInvestments = snapshot.docs.map((doc) => ({
          ...doc.data(),
        }));

        const filteredInvestments = newInvestments.filter(
          (_, index) => index < startIndex
        );
        setInvestmentList(filteredInvestments);
        setCurrentPage(currentPage - 1);
        setLastDoc(snapshot.docs[startIndex - 1]);
      } catch (error) {
        console.error("Error fetching investment details:", error);
      }
    }
  };

  const fetchDocuments = async (pages) => {
    try {
      const direction = currentSortDirection;

      const investmentDetailsRef = query(
        collection(db, "investedProperties", user?.uid, "investmentDetails"),
        orderBy("createdAt", direction),
        limit(dataPerPage * pages)
      );

      const snapshot = await getDocs(investmentDetailsRef);

      const newInvestments = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      setDataShown(snapshot.size);
      setInvestmentList(newInvestments);
      setCurrentPage(pages);
      setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
    } catch (error) {
      console.error("Error fetching investment details:", error);
    }
  };

  const sortHandler = (value) => {
    setCurrentSortDirection(value);
    sortQueryFirebase(value);
  };

  const sortQueryFirebase = async (direction) => {
    const investmentDetailsRef = query(
      collection(db, "investedProperties", user.uid, "investmentDetails"),
      orderBy("createdAt", direction),
      limit(3)
    );
    const querySnapshot = await getDocs(investmentDetailsRef);
    const investment = [];
    querySnapshot.forEach((doc) => {
      investment.push({ id: doc.id, ...doc.data() });
    });
    setDataShown(querySnapshot.size);
    setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
    setInvestmentList(investment);
  };

  const handleUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/userProfile");
      } else navigate("/login");
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
        />
        <div className="container">
          <div className="breadcrumb-content">
            <div>
              <h2>Dashboard</h2>
              <nav aria-label="breadcrumb" className="theme-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Dashboard
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
                          <Camera />
                        </button>
                        <input
                          className="updateimg"
                          type="file"
                          name="img"
                          // onChange="readURL(this,0)"
                        />
                      </div>
                    </div>
                    {userInfo.map((user) => {
                      return (
                        <div className="media-body">
                          <h5>{user.userName}</h5>
                          <h6 className="font-roboto">{user.email}</h6>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="dashboard-list">
                  <ul className="nav nav-tabs right-line-tab">
                    <li className="nav-item">
                      <a className="nav-link active" href="/dashboard">
                        Dashboard
                      </a>
                    </li>
                    {/* <li className="nav-item"><a className="nav-link active"
                                            href="user-listing.html">My Listing</a></li> */}
                    {/* <li className="nav-item"><a className="nav-link"
                                            href="/userProfile">create property</a></li> */}
                    <li className="nav-item">
                      <a className="nav-link" onClick={handleUser}>
                        My profile
                      </a>
                    </li>
                    {/* <li className="nav-item"><a className="nav-link" href="user-favourites.html">favourites</a></li>
                                    <li className="nav-item"><a className="nav-link" href="user-payment.html">Cards & payment</a></li>
                                    <li className="nav-item"><a className="nav-link" href="user-privacy.html">Privacy</a></li> */}
                    <li className="nav-item">
                      <a
                        // href="javascript:void(0)"
                        data-bs-toggle="modal"
                        onClick={logOut}
                        className="nav-link"
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
                <div className="tab-listing" id="listing">
                  <div className="property-section">
                    <div className="property-grid-2 ratio_63">
                      <div className="filter-panel">
                        <div className="top-panel">
                          <div>
                            <h2>Dashboard</h2>
                            <span className="show-result">
                              Showing{" "}
                              <span>
                                1-{dataShown} of {totalData}
                              </span>{" "}
                              Listings
                            </span>
                          </div>
                          <ul className="grid-list-filter">
                            <li>
                              {/* <div className="filter-bottom-title">
                                                            <h6 className="mb-0 font-roboto">Advance search <i data-feather="align-center"
                                                                    className="float-end ms-2"></i></h6>
                                                        </div> */}
                            </li>
                            <li>
                              <div className="form-group col-sm-4">
                                <select
                                  className="form-control"
                                  name="Sort"
                                  style={{
                                    width: "150px",
                                    fontSize: "0.9rem",
                                  }}
                                  onChange={(e) => sortHandler(e.target.value)}
                                >
                                  <option value="" disabled>
                                    Sort
                                  </option>
                                  <option value="desc">Sort by Newest</option>
                                  <option value="asc">Sort by Oldest</option>
                                </select>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="property-2 row column-sm zoom-gallery property-label property-grid list-view">
                        {propertyList.map((list) => {
                          return (
                            <div key={list.id} className="col-md-12">
                              <div className="property-box">
                                <div className="property-image">
                                  <div className="property-slider">
                                    <div
                                      id={`carouselExampleIndicators-${list.id}`}
                                      className="carousel slide"
                                      data-ride="carousel"
                                    >
                                      <div className="carousel-inner">
                                        <div className="carousel-item active">
                                          <img
                                            className="d-block w-200"
                                            src={list.urlarray?.[0]}
                                            alt="First slide"
                                            width="600px"
                                            height="300px"
                                          />
                                        </div>
                                        <div className="carousel-item">
                                          <img
                                            className="d-block w-200"
                                            src={list.urlarray?.[1]}
                                            alt="Second slide"
                                            width="600px"
                                            height="300px"
                                          />
                                        </div>
                                        {list.urlarray?.[2] ? (
                                          <div className="carousel-item">
                                            <img
                                              className="d-block w-200"
                                              src={list.urlarray?.[2]}
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
                                              className="d-block w-200"
                                              src={list.urlarray?.[3]}
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
                                              className="d-block w-200"
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
                                              className="d-block w-200"
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
                                        <span className="sr-only">
                                          Previous
                                        </span>
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
                                    <div style={{ marginTop: "5px" }}>
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
                                  <span className="font-roboto">
                                    {list.city}
                                  </span>
                                  <a href={`/property/${list.docId}`}>
                                    <h3>{list.propertyName}</h3>
                                  </a>
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
                                    <a href={`/property/${list.docId}`}>
                                      <button
                                        type="button"
                                        // onClick="document.place='/property'"
                                        className="btn btn-dashed btn-pill color-2"
                                      >
                                        Details
                                      </button>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                        {/* <div className="col-md-12">
                          <div className="property-box">
                            <div className="property-image">
                              <div className="property-slider">
                                <a href="javascript:void(0)">
                                  <img
                                    src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F10.jpg?alt=media&token=352f7cb1-b6ed-4344-9a00-34996ef23e9a"
                                    className="bg-img"
                                    alt=""
                                    width="500px"
                                    height=" 350px"
                                  />
                                </a>
                                <a href="javascript:void(0)">
                                  <img
                                    src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F5.jpg?alt=media&token=5b06a685-0f1c-467f-88c2-100ed2421524"
                                    className="bg-img"
                                    alt=""
                                    width="500px"
                                    height=" 350px"
                                  />
                                </a>
                                <a href="javascript:void(0)">
                                  <img
                                    src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F3.jpg?alt=media&token=9429c4ec-99d2-46c6-be3c-4fc961660a64"
                                    className="bg-img"
                                    alt=""
                                    width="500px"
                                    height=" 350px"
                                  />
                                </a>
                                <a href="javascript:void(0)">
                                  <img
                                    src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fproperties%2F4.jpg?alt=media&token=2774369b-8a80-4459-8227-c3c245627c70"
                                    className="bg-img"
                                    alt=""
                                    width="500px"
                                    height=" 350px"
                                  />
                                </a>
                              </div>
                              <div className="labels-left">
                                <div>
                                  <span className="label label-shadow">
                                    sale
                                  </span>
                                </div>
                              </div>
                              <div className="seen-data">
                                <i data-feather="camera"></i>
                                <span>42</span>
                              </div>
                               <div className="overlay-property-box">
                                                            <a href="compare.html" className="effect-round" data-bs-toggle="tooltip" data-bs-placement="left" title="Compare"> 
                                                                <i data-feather="shuffle"></i>
                                                            </a>
                                                            <a href="user-favourites.html" className="effect-round like" data-bs-toggle="tooltip" data-bs-placement="left" title="wishlist">
                                                                <i data-feather="heart"></i>                                                                               
                                                            </a>
                                                        </div> 
                            </div>

                            <div className="property-details">
                              <span className="font-roboto">New Delhi</span>
                              <div className="my-listing font-roboto">
                                Added 20 min ago
                              </div>
                              <a href="single-property-8.html">
                                <h3>Merrick in Spring Way</h3>
                              </a>
                              <h6>₹50000*</h6>
                              <p className="font-roboto">
                                Elegant retreat in a quiet Coral Gables setting.
                                This home provides wonderful entertaining spaces
                                with a chef kitchen opening…
                              </p>
                              <ul>
                                <li>
                                  <img
                                    src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fdouble-bed.svg?alt=media&token=adce4401-145c-4800-a0f3-6935bfc6578e"
                                    className="img-fluid"
                                    alt=""
                                  />
                                  Bed : 4
                                </li>
                                <li>
                                  <img
                                    src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fbathroom.svg?alt=media&token=2dd2178a-998e-4aa0-ba60-a4ca1dfe65db"
                                    className="img-fluid"
                                    alt=""
                                  />
                                  Baths : 4
                                </li>
                                <li>
                                  <img
                                    src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Fsquare-ruler-tool.svg?alt=media&token=8c121dad-da46-4f7f-b8b3-c62fe1ad2a1c"
                                    className="img-fluid ruler-tool"
                                    alt=""
                                  />
                                  Sq Ft : 5000
                                </li>
                              </ul>
                              <div className="property-btn d-flex">
                                <span>3 years investment</span>
                                <a href="/property">
                                  <button
                                    type="button"
                                    onClick="document.location='single-property-8.html'"
                                    className="btn btn-dashed btn-pill color-2"
                                  >
                                    Details
                                  </button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div> */}
                      </div>
                      <nav className="theme-pagination">
                        <ul className="pagination">
                          <li
                            className="page-item"
                            onClick={fetchPreviousDocuments}
                          >
                            <a
                              className="page-link"
                              // href="javascript:void(0)"
                              aria-label="Previous"
                            >
                              <span aria-hidden="true">«</span>
                              <span className="sr-only">Previous</span>
                            </a>
                          </li>
                          {pageNumbers.map((pages) => {
                            return (
                              <li className="page-item">
                                <a
                                  className="page-link"
                                  // href="javascript:void(0)"
                                  onClick={() => {
                                    fetchDocuments(pages);
                                  }}
                                >
                                  {pages}
                                </a>
                              </li>
                            );
                          })}

                          <li
                            className="page-item"
                            onClick={fetchNextDocuments}
                          >
                            <a
                              className="page-link"
                              // href="javascript:void(0)"
                              aria-label="Next"
                            >
                              <span aria-hidden="true">»</span>
                              <span className="sr-only">Next</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- user dashboard section end --> */}
    </div>
  );
}

export default Dashboard;
