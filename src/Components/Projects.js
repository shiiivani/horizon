import React from 'react'
import { FaAngleDown } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import '../styles/Project.css'

function Projects() {
    return (
        <div>
            {/* <!-- breadcrumb start --> */}
            <section className="breadcrumb-section p-0">
                <img src="https://themes.pixelstrap.com/sheltos/assets/images/inner-background.jpg" className="bg-img img-fluid" alt="" />
                <div className="container">
                    <div className="breadcrumb-content">
                        <div>
                            <h2>Left sidebar</h2>
                            <nav aria-label="breadcrumb" className="theme-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Listing</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Left sidebar</li>
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
                                                <div className="dropdown">
                                                    <span className="dropdown-toggle font-rubik"
                                                        data-bs-toggle="dropdown"><span>Investment Structure</span>
                                                        <FaAngleDown className="icon " />
                                                    </span>
                                                    <div className="dropdown-menu text-start">
                                                        <a className="dropdown-item" href="javascript:void(0)">Debt</a>
                                                        <a className="dropdown-item" href="javascript:void(0)">Equity</a>
                                                        <a className="dropdown-item" href="javascript:void(0)">Mezzanine Debt</a>
                                                        <a className="dropdown-item" href="javascript:void(0)">Portfolio</a>
                                                        <a className="dropdown-item" href="javascript:void(0)">Preferred Equity</a>
                                                        <a className="dropdown-item" href="javascript:void(0)">REIT</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="dropdown">
                                                    <span className="dropdown-toggle font-rubik"
                                                        data-bs-toggle="dropdown"><span>Investment Strategy</span>
                                                        <FaAngleDown className="icon icon2" /></span>
                                                    <div className="dropdown-menu text-start">
                                                        <a className="dropdown-item" href="javascript:void(0)">Core</a>
                                                        <a className="dropdown-item" href="javascript:void(0)">Core Plus</a>
                                                        <a className="dropdown-item" href="javascript:void(0)">Value Add</a>
                                                        <a className="dropdown-item" href="javascript:void(0)">Cottage</a>
                                                        <a className="dropdown-item" href="javascript:void(0)">Opportunistic</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="dropdown">
                                                    <span className="dropdown-toggle font-rubik"
                                                        data-bs-toggle="dropdown"><span>Property Location</span>
                                                        <FaAngleDown className="icon icon3" /></span>
                                                    <div className="dropdown-menu text-start">
                                                        <a className="dropdown-item" href="javascript:void(0)">Property Location</a>
                                                        <a className="dropdown-item" href="javascript:void(0)">Austria</a>
                                                        <a className="dropdown-item" href="javascript:void(0)">Brazil</a>
                                                        <a className="dropdown-item" href="javascript:void(0)">New york</a>
                                                        <a className="dropdown-item" href="javascript:void(0)">USA</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="dropdown">
                                                    <span className="dropdown-toggle font-rubik" data-bs-toggle="dropdown"><span>Minimun Investment
                                                    </span>
                                                        <FaAngleDown className="icon icon4" />
                                                    </span>
                                                    <div className="dropdown-menu text-start">
                                                        <a className="dropdown-item" href="javascript:void(0)">Less than 10,000</a>
                                                        <a className="dropdown-item" href="javascript:void(0)">10,000 - 25,000</a>
                                                        <a className="dropdown-item" href="javascript:void(0)">25,000 - 50,000</a>
                                                        <a className="dropdown-item" href="javascript:void(0)">More than 50,000</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="dropdown">
                                                    <span className="dropdown-toggle font-rubik"
                                                        data-bs-toggle="dropdown"><span>Minimum Hold Period</span>
                                                        <FaAngleDown className="icon icon5" />
                                                    </span>
                                                    <div className="dropdown-menu text-start">
                                                        <a className="dropdown-item" href="javascript:void(0)">0-2 years</a>
                                                        <a className="dropdown-item" href="javascript:void(0)">2-5 years</a>
                                                        <a className="dropdown-item" href="javascript:void(0)">5-10 years</a>
                                                        <a className="dropdown-item" href="javascript:void(0)">More than 10 years</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <a href="list-left-sidebar.html" className="btn btn-gradient color-2 btn-block btn-pill mt-2">Search </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="advance-card">
                                        <h6>Eligibility</h6>
                                        <div className="category-property">
                                            <ul>
                                                <li><a href="javascript:void(0)"><FaAngleRight /> Accredited Investors Only
                                                </a></li>
                                                <li><a href="javascript:void(0)"><FaAngleRight /> 1031 eligible
                                                </a></li>
                                                <li><a href="javascript:void(0)"><FaAngleRight /> Oppurtunity Zone eligible
                                                </a></li>
                                                <li><a href="javascript:void(0)"><FaAngleRight /> SD-IRA eligible
                                                </a></li>
                                                <li><a href="javascript:void(0)"><FaAngleRight /> Non-Accredited eligible
                                                </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="advance-card">
                                        <h6>Contact Info</h6>
                                        <div className="category-property">
                                            <ul>
                                                <li>
                                                    <i data-feather="map-pin" className="me-2"></i>Vasanth Nagar, Bengaluru, Karnataka
                                                </li>
                                                <li>
                                                    <i data-feather="phone-call" className="me-2"></i>+91 9902164321
                                                </li>
                                                <li>
                                                    <i data-feather="mail" className="me-2"></i>rahul05majage@gmail.com
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
                                            <li className="active" data-filter="*"><span>All Property</span></li>
                                            <li data-filter=".individualDeals"><span>Individual Deals</span></li>
                                            <li data-filter=".fundVehicles"><span>Funds & Vehicles</span></li>
                                        </ul>
                                    </div>
                                    <ul className="grid-list-filter">
                                        <li className="ms-0">
                                            <div className="dropdown">
                                                <span className="dropdown-toggle font-rubik" data-bs-toggle="dropdown"><span>Sort by
                                                    Newest</span>
                                                    <FaAngleDown />
                                                </span>
                                                <div className="dropdown-menu text-start">
                                                    <a className="dropdown-item" href="javascript:void(0)">Sort by Newest</a>
                                                    <a className="dropdown-item" href="javascript:void(0)">Sort by Oldest</a>
                                                    <a className="dropdown-item" href="javascript:void(0)">Sory by featured</a>
                                                    <a className="dropdown-item" href="javascript:void(0)">Sort by price (Low to
                                                        high)</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="property-2 row column-sm zoom-gallery property-label property-grid grid">
                                <div className="col-md-6 individualDeals grid-item wow fadeInUp" data-className="individualDeals">
                                    <div className="property-box">
                                        <div className="property-image">
                                            <img src="https://themes.pixelstrap.com/sheltos/assets/images/property/11.jpg" className="bg-img" alt="" width="500px" height="400px" />
                                            <div className="labels-left">
                                                <div>
                                                    <span className="label label-shadow">Individual Deals</span>
                                                </div>
                                            </div>
                                            <div className="seen-data">
                                                <i data-feather="camera"></i>
                                                <span>25</span>
                                            </div>
                                        </div>
                                        <div className="property-details">
                                            <a href="single-property-8.html">
                                                <h3>Allen's Across Way</h3>
                                            </a>
                                            <h6>$6558.00*</h6>
                                            <p className="font-roboto">Real estate is divided into several categories, including residential property, commercial property and industrial property.</p>                                    <div className="property-btn d-flex">
                                                <span>June 20, 2022</span>
                                                <button type="button" onclick="document.location='single-property-8.html'" className="btn btn-dashed btn-pill color-2">Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 fundVehicles grid-item wow fadeInUp" data-className="fundVehicles">
                                    <div className="property-box">
                                        <div className="property-image">
                                            <img src="https://themes.pixelstrap.com/sheltos/assets/images/property/10.jpg" className="bg-img" alt="" width="500px" height="400px" />
                                            <div className="labels-left">
                                                <div>
                                                    <span className="label label-shadow">Individual Deals</span>
                                                </div>
                                            </div>
                                            <div className="seen-data">
                                                <i data-feather="camera"></i>
                                                <span>42</span>
                                            </div>
                                        </div>
                                        <div className="property-details">
                                            <a href="single-property-8.html">
                                                <h3>Little Acorn Farm</h3>
                                            </a>
                                            <h6>$6558.00*</h6>
                                            <p className="font-roboto">The most common and most absolute type of estate, the tenant enjoys the greatest discretion over the disposal of the property.</p>
                                            <div className="property-btn d-flex">
                                                <span>August 4, 2022</span>
                                                <button type="button" onclick="document.location='single-property-8.html'" className="btn btn-dashed btn-pill color-2">Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 individualDeals grid-item wow fadeInUp" data-className="individualDeals">
                                    <div className="property-box">
                                        <div className="property-image">
                                            <img src="https://themes.pixelstrap.com/sheltos/assets/images/property/14.jpg" className="bg-img" alt="" width="500px" height="400px" />
                                            <div className="labels-left">
                                                <div>
                                                    <span className="label label-dark">no fees</span>
                                                </div>
                                                <span className="label label-success">open house</span>
                                            </div>
                                            <div className="seen-data">
                                                <i data-feather="camera"></i>
                                                <span>10</span>
                                            </div>
                                        </div>
                                        <div className="property-details">
                                            <a href="single-property-8.html">
                                                <h3>Hidden Spring Hideway</h3>
                                            </a>
                                            <h6>$9554.00*</h6>
                                            <p className="font-roboto">Real estate market in most countries are not as organize or efficient as markets for other, more liquid investment instruments.</p>
                                            <div className="property-btn d-flex">
                                                <span>July 18, 2022</span>
                                                <button type="button" onclick="document.location='single-property-8.html'" className="btn btn-dashed btn-pill color-2">Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 fundvehicles grid-item wow fadeInUp" data-className="fundvehicles">
                                    <div className="property-box">
                                        <div className="property-image">
                                            <img src="https://themes.pixelstrap.com/sheltos/assets/images/property/15.jpg" className="bg-img" alt="" width="500px" height="400px" />
                                            <div className="labels-left">
                                                <div>
                                                    <span className="label label-shadow">Individual Deals</span>
                                                </div>
                                            </div>
                                            <div className="seen-data">
                                                <i data-feather="camera"></i>
                                                <span>42</span>
                                            </div>
                                        </div>
                                        <div className="property-details">
                                            <a href="single-property-8.html">
                                                <h3>Merrick in Spring Way</h3>
                                            </a>
                                            <h6>$4513.00*</h6>
                                            <p className="font-roboto">An interior designer is someone who plans,researches,coordinates,management and manages such enhancement projects.</p>
                                            <div className="property-btn d-flex">
                                                <span>January 6, 2022</span>
                                                <button type="button" onclick="document.location='single-property-8.html'" className="btn btn-dashed btn-pill color-2">Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 individualDeals grid-item wow fadeInUp" data-className="individualDeals">
                                    <div className="property-box">
                                        <div className="property-image">
                                            <img src="https://themes.pixelstrap.com/sheltos/assets/images/property/12.jpg" className="bg-img" alt="" width="500px" height="400px" />
                                            <div className="labels-left">
                                                <div>
                                                    <span className="label label-shadow">Individual Deals</span>
                                                </div>
                                            </div>
                                            <div className="seen-data">
                                                <i data-feather="camera"></i>
                                                <span>25</span>
                                            </div>
                                        </div>
                                        <div className="property-details">
                                            <a href="single-property-8.html">
                                                <h3>Home in Merrick Way</h3>
                                            </a>
                                            <h6>$4513.00*</h6>
                                            <p className="font-roboto">Elegant retreat in a quiet Coral Gables setting. This home provides wonderful entertaining spaces with a chef
                                                kitchen opening…</p>
                                            <div className="property-btn d-flex">
                                                <span>January 6, 2022</span>
                                                <button type="button" onclick="document.location='single-property-8.html'" className="btn btn-dashed btn-pill color-2">Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 fundvehicles grid-item wow fadeInUp" data-className="fundvehicles">
                                    <div className="property-box">
                                        <div className="property-image">
                                            <img src="https://themes.pixelstrap.com/sheltos/assets/images/property/16.jpg" className="bg-img" alt="" width="500px" height="400px" />
                                            <div className="labels-left">
                                                <div>
                                                    <span className="label label-dark">no fees</span>
                                                </div>
                                                <span className="label label-success">open house</span>
                                            </div>
                                            <div className="seen-data">
                                                <i data-feather="camera"></i>
                                                <span>25</span>
                                            </div>
                                        </div>
                                        <div className="property-details">
                                            <a href="single-property-8.html">
                                                <h3>Magnolia Ranch</h3>
                                            </a>
                                            <h6>$9554.00*</h6>
                                            <p className="font-roboto">This home provides wonderful entertaining spaces with a chef
                                                kitchen opening. Elegant retreat in a quiet Coral Gables setting..</p>
                                            <div className="property-btn d-flex">
                                                <span>May 14, 2022</span>
                                                <button type="button" onclick="document.location='single-property-8.html'" className="btn btn-dashed btn-pill color-2">Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- property grid end --> */}


        </div>
    )
}

export default Projects