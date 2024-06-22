import { useState, useEffect } from "react";
import "../styles/Marketplace.css";
import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
  limit,
  getCountFromServer,
} from "firebase/firestore";
import { db } from "../FirebaseAuth/firebase";
import excerptHtml from "excerpt-html";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

function Projects() {
  const defaultFilters = {
    listingStatus: {
      value: "Active",
      comparator: "==",
      type: "filter",
    },
    city: {
      value: "",
      comparator: "==",
      type: "filter",
    },
    propertyType: {
      value: "",
      comparator: "==",
      type: "filter",
    },
    minPeriod: {
      value: "",
      comparator: ">=",
      type: "filter",
    },
    maxPeriod: {
      value: "",
      comparator: "<=",
      type: "filter",
    },
    priceMin: {
      value: "",
      comparator: ">=",
      type: "filter",
    },
    priceMax: {
      value: "",
      comparator: "<=",
      type: "filter",
    },
    sortBy: {
      value: "createdAt",
      comparator: "DESC",
      type: "sort",
    },
  };
  const [propertyList, setPropertyList] = useState([]);
  const [place, setPlace] = useState("");
  const [minInvestment, setMinInvestment] = useState("");
  const [minHoldPeriod, setMinHoldPeriod] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [totalData, setTotalData] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [filters, setFilters] = useState(defaultFilters);
  const [dataPerPage] = useState(6);
  const [params, setParams] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const Data = queryParams.get("type");
  const City = queryParams.get("city");

  useEffect(() => {
    const fetchList = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "propertyDetails"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setPropertyList(list);
      } catch (error) {
        console.log(error);
      }
    };
    fetchList();
  }, []);

  const activeStatusHandler = (value) => {
    filters.listingStatus.value = value;
    setFilters({ ...filters });
  };

  const sortHandler = (value) => {
    sortQueryFirebase("createdAt", value);
  };

  useEffect(() => {
    queryFirebase();
  }, [currentPage]);

  const queryFirebase = async () => {
    const constraints = [];
    for (var key in filters) {
      if (filters.hasOwnProperty(key) && filters[key] && filters[key].value) {
        if (filters[key].type === "filter") {
          if (key === "minPeriod" || key === "maxPeriod") {
          } else if (key === "priceMin" || key === "priceMax") {
            constraints.push(
              where("price", filters[key].comparator, filters[key].value)
            );
          } else {
            constraints.push(
              where(key, filters[key].comparator, filters[key].value)
            );
          }
        }
        // else if (filters[key].type === 'sort' && !filters['priceMin'].value && !filters['priceMax'].value) {
        //   constraints.push(orderBy(filters[key].value, filters[key].comparator))
        // }
      }
    }
    const q = query(
      collection(db, "propertyDetails"),
      ...constraints,
      limit(currentPage + 6)
    );
    const results = await getDocs(q);
    const list = [];
    results.forEach((doc) => {
      list.push({ id: doc.id, ...doc.data() });
    });

    setPropertyList(list);
    updateCount(constraints);
  };

  const handleMinimumHoldPeriod = async (a, b) => {
    await periodQuery(a, b);
  };

  const periodQuery = async (min, max) => {
    const queryConstraints = [];

    if (min || min == 0) {
      queryConstraints.push(
        where("minimumHoldPeriod", filters.minPeriod.comparator, min)
      );
    }

    if (max) {
      queryConstraints.push(
        where("minimumHoldPeriod", filters.maxPeriod.comparator, max)
      );
    }

    const q = query(collection(db, "propertyDetails"), ...queryConstraints);
    const queryResults = await getDocs(q);
    const reuslts = [];
    queryResults.forEach((doc) => {
      reuslts.push({ id: doc.id, ...doc.data() });
    });

    setPropertyList(reuslts);
    updateCount(queryConstraints);
  };

  const updateCount = async (constraints) => {
    const countQuery = await getCountFromServer(
      query(collection(db, "propertyDetails"), ...constraints)
    );
    const count = countQuery.data().count;
    setTotalData(count);
  };

  const sortQueryFirebase = async (sortBy, direction) => {
    const q = query(
      collection(db, "propertyDetails"),
      orderBy(sortBy, direction),
      limit(currentPage + 6)
    );
    const results = await getDocs(q);
    const list = [];
    results.forEach((doc) => {
      list.push({ id: doc.id, ...doc.data() });
    });
    setPropertyList([...list]);
  };

  const searchHandler = async () => {
    filters.city.value = place;
    filters.propertyType.value = propertyType;
    switch (minInvestment) {
      case "0":
        filters.priceMin.value = 0;
        filters.priceMax.value = 10000;
        break;
      case "10000":
        filters.priceMin.value = 10000;
        filters.priceMax.value = 25000;
        break;
      case "25000":
        filters.priceMin.value = 25000;
        filters.priceMax.value = 50000;
        break;
      case "50000":
        filters.priceMin.value = 50000;
        filters.priceMax.value = undefined;
        break;
      default:
        filters.priceMin.value = "";
        filters.priceMax.value = "";
        break;
    }
    switch (minHoldPeriod) {
      case "0":
        filters.minPeriod.value = 0;
        filters.maxPeriod.value = 2;
        break;
      case "2":
        filters.minPeriod.value = 2;
        filters.maxPeriod.value = 5;
        break;
      case "5":
        filters.minPeriod.value = 5;
        filters.maxPeriod.value = 10;
        break;
      case "10":
        filters.minPeriod.value = 10;
        filters.maxPeriod.value = undefined;
        break;
      default:
        filters.minPeriod.value = "";
        filters.maxPeriod.value = "";
        break;
    }
    setFilters({ ...filters });
  };

  useEffect(() => {
    queryFirebase();
  }, [filters]);

  const nPages = Math.ceil(totalData / dataPerPage);
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const handlePagination = (value) => {
    setCurrentPage(value);
  };

  const queryPropertyType = async () => {
    const q = query(
      collection(db, "propertyDetails"),
      orderBy("propertyType"),
      where("propertyType", "==", Data)
    );
    const result = await getDocs(q);
    const list = [];
    result.forEach((doc) => {
      list.push({ id: doc.id, ...doc.data() });
    });
    setPropertyList([...list]);
  };

  const queryCity = async () => {
    const q = query(
      collection(db, "propertyDetails"),
      orderBy("city"),
      where("city", "==", City)
    );
    const result = await getDocs(q);
    const list = [];
    result.forEach((doc) => {
      list.push({ id: doc.id, ...doc.data() });
    });
    setPropertyList([...list]);
  };

  useEffect(() => {
    if (Data) {
      queryPropertyType();
    } else if (City) {
      queryCity();
    } else {
      queryFirebase();
    }
  }, []);

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
              <h2>Marketplace</h2>
              <nav aria-label="breadcrumb" className="theme-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Marketplace
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- breadcrumb end --> */}

      {/* <!-- property grid start --> */}
      <section className="property-section">
        <div className="container">
          <div className="row ratio_55">
            <div className="col-xl-3 col-lg-4">
              <div className="left-sidebar single-sidebar left-tablayout">
                <div className="filter-cards">
                  <div className="advance-card">
                    <h5 className="mb-0 advance-title">Advance search </h5>
                  </div>
                  <div className="advance-card">
                    <h6>filter</h6>
                    <div className="row gx-2">
                      <div className="col-12">
                        <div className="form-group col-sm-4 filter">
                          <select
                            className="form-control"
                            name="Sort"
                            style={{
                              fontSize: "0.85rem",
                            }}
                            onChange={(e) => setPlace(e.target.value)}
                          >
                            <option value="">Property Location</option>
                            <option value="New Delhi">New Delhi</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Lucknow">Lucknow</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group col-sm-4 filter">
                          <select
                            className="form-control"
                            name="Sort"
                            style={{
                              fontSize: "0.85rem",
                            }}
                            onChange={(e) => setPropertyType(e.target.value)}
                          >
                            <option value="">Property Type</option>
                            <option value="Residential">Residential</option>
                            <option value="Commercial">Commercial</option>
                            <option value="Land">Land</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group col-sm-4 filter">
                          <select
                            className="form-control"
                            name="Sort"
                            style={{
                              fontSize: "0.85rem",
                            }}
                            onChange={(e) => setMinInvestment(e.target.value)}
                          >
                            <option value="">Minimum Investment</option>
                            <option value="0">Less than 10,000</option>
                            <option value="10000">10,000 - 25,000</option>
                            <option value="25000">25,000 - 50,000</option>
                            <option value="50000">More than 50,000</option>
                          </select>
                        </div>
                      </div>
                      {/* <div className="col-12">
                        <div className="form-group col-sm-4">
                          <select
                            className="form-control"
                            name="Sort"
                            style={{
                              width: "190px",
                              fontSize: "0.85rem",
                              height: "37px",
                              position: "relative",
                              left: "-18px",
                            }}
                            onChange={(e) => setMinHoldPeriod(e.target.value)}
                          >
                            <option value="" >
                              Minimum Hold Period
                            </option>
                            <option value="0">0-2 years</option>
                            <option value="2">2-5 years</option>
                            <option value="5">5-10 years</option>
                            <option value="10">More than 10 years</option>
                          </select>
                        </div>
                      </div> */}
                      <button
                        type="button"
                        className="btn btn-gradient btn-pill color-2 me-sm-3 me-2"
                        style={{ cursor: "pointer" }}
                        onClick={searchHandler}
                      >
                        Search
                      </button>
                    </div>
                  </div>
                  <div className="advance-card">
                    <h6>Minimum Holding Period</h6>
                    <div className="category-property">
                      <ul>
                        <li>
                          <a
                            href="javascript:void(0)"
                            onClick={() => handleMinimumHoldPeriod(0, 2)}
                          >
                            <i className="fas fa-arrow-right me-2"></i>0-2 years{" "}
                            <span className="float-end"></span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0)"
                            onClick={() => handleMinimumHoldPeriod(2, 5)}
                          >
                            <i className="fas fa-arrow-right me-2"></i>2-5 years{" "}
                            <span className="float-end"></span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0)"
                            onClick={() => handleMinimumHoldPeriod(5, 10)}
                          >
                            <i className="fas fa-arrow-right me-2"></i>5-10
                            years <span className="float-end"></span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0)"
                            onClick={() =>
                              handleMinimumHoldPeriod(10, undefined)
                            }
                          >
                            <i className="fas fa-arrow-right me-2"></i>More than
                            10 years <span className="float-end"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="advance-card">
                    <h6>Contact Info</h6>
                    <div className="category-property">
                      <ul>
                        <li style={{ fontSize: "0.71rem" }}>
                          <i data-feather="map-pin" className="me-2"></i>
                          Koramangala , Bengaluru, Karnataka
                        </li>
                        <li style={{ fontSize: "0.71rem" }}>
                          <i data-feather="phone-call" className="me-2"></i>+91
                          9483647889
                        </li>
                        <li style={{ fontSize: "0.71rem" }}>
                          <i data-feather="mail" className="me-2"></i>
                          horizon@gmail.com
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 property-grid-2">
              <div className="filter-panel tab-top-panel">
                <div className="top-panel">
                  <div className="filters respon-filter-content filter-button-group">
                    <ul>
                      <li
                        className={
                          filters.listingStatus.value == "Active"
                            ? "active"
                            : ""
                        }
                        data-filter=".individualDeals"
                        onClick={() => activeStatusHandler("Active")}
                      >
                        <span>Active Offering</span>
                      </li>
                      <li
                        className={
                          filters.listingStatus.value == "Closed"
                            ? "active"
                            : ""
                        }
                        onClick={() => activeStatusHandler("Closed")}
                        data-filter=".fundVehicles"
                      >
                        <span>Closed Offerings</span>
                      </li>
                    </ul>
                  </div>
                  <div className="form-group col-sm-4">
                    <select
                      className="form-control"
                      name="Sort"
                      style={{
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
                </div>
              </div>
              <div className="property-2 row column-sm zoom-gallery property-label property-grid grid">
                {propertyList.map((list) => {
                  return (
                    <div
                      key={list.id}
                      className="col-md-6 individualDeals grid-item wow fadeInUp"
                      // data-className="individualDeals"
                    >
                      <div className="property-box">
                        <div className="property-image">
                          <div className="property-slider">
                            <div
                              // id="carouselExampleIndicators"
                              id={`carouselExampleIndicators-${list.id}`}
                              className="carousel slide"
                              data-ride="carousel"
                              data-interval="false"
                            >
                              <div className="carousel-inner">
                                <div className="carousel-item active">
                                  <img
                                    className="d-block w-100"
                                    src={list.urlarray?.[0]}
                                    alt="First slide"
                                    width="600px"
                                    height="300px"
                                  />
                                </div>
                                <div className="carousel-item">
                                  <img
                                    className="d-block w-100"
                                    src={list.urlarray?.[1]}
                                    alt="Second slide"
                                    width="600px"
                                    height="300px"
                                  />
                                </div>
                                {list.urlarray?.[2] ? (
                                  <div className="carousel-item">
                                    <img
                                      className="d-block w-100"
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
                                      className="d-block w-100"
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
                                // href="#carouselExampleIndicators"
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
                            <Link to={`/property-details/${list.docId}`}>
                              <button
                                type="button"
                                // onClick="document.place='/property'"
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
                <nav className="theme-pagination">
                  <ul className="pagination">
                    <li
                      className="page-item"
                      onClick={() => {
                        if (currentPage > 0) {
                          // setPageCount(pageCount - 1);
                          // handlePagination(pageCount - 1);
                          setCurrentPage(currentPage - 1);
                        }
                      }}
                    >
                      <a className="page-link" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    {pageNumbers.map((pages) => {
                      return (
                        <li className="page-item">
                          <a
                            className="page-link"
                            onClick={() => {
                              handlePagination(pages);
                            }}
                          >
                            {pages}
                          </a>
                        </li>
                      );
                    })}

                    <li
                      className="page-item"
                      onClick={() => {
                        setPageCount(pageCount + 1);
                        handlePagination(pageCount + 3);
                      }}
                    >
                      <a className="page-link" aria-label="Next">
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
      </section>
      {/* <!-- property grid end --> */}
    </div>
  );
}

export default Projects;
