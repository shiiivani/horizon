import React from 'react'
import { FaUserAlt } from 'react-icons/fa';
import Logo from '../assets/logo.png'

function Navbar() {
    return (
        <div>{/* <!-- Loader start --> */}
            <div className="loader-wrapper">
                <div className="row loader-img">
                    <div className="col-12">
                        <img src="https://themes.pixelstrap.com/sheltos/assets/images/loader/loader-2.gif" className="img-fluid" alt="" />
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
                                        <img src={Logo} alt="" className="img-fluid" />
                                    </a>
                                </div>
                                <nav>
                                    <div className="main-navbar">
                                        <div id="mainnav">
                                            <div className="toggle-nav"><i className="fa fa-bars sidebar-bar"></i></div>
                                            <ul className="nav-menu">
                                                <li className="back-btn">
                                                    <div className="mobile-back text-end">
                                                        <span>Back</span>
                                                        <i aria-hidden="true" className="fa fa-angle-right ps-2"></i>
                                                    </div>
                                                </li>
                                                <li className="dropdown">
                                                    <a href="/" className="nav-link menu-title">Home</a>
                                                </li>
                                                <li className="dropdown">
                                                    <a href="/projects" className="nav-link menu-title">Projects</a>
                                                </li>
                                                <li className="dropdown">
                                                    <a href="" className="nav-link menu-title">About us</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                                <ul className="header-right">
                                    <li className="right-menu">
                                        <ul className="nav-menu">
                                            <li className="dropdown language">
                                                <a href="javascript:void(0)">
                                                    <i data-feather="globe"></i>
                                                </a>
                                                <ul className="nav-submenu">
                                                    <li><a href="javascript:void(0)">English</a></li>
                                                    <li><a href="javascript:void(0)">French</a></li>
                                                    <li><a href="javascript:void(0)">Arabic</a></li>
                                                    <li><a href="javascript:void(0)">Spanish</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <a href="user-favourites.html">
                                                    <i data-feather="heart"></i>
                                                </a>
                                            </li>
                                            <li className="dropdown cart">
                                                <a href="javascript:void(0)">
                                                    <i data-feather="shopping-cart"></i>
                                                </a>
                                                <ul className="nav-submenu">
                                                    <li>
                                                        <div className="media">
                                                            <img src="https://themes.pixelstrap.com/sheltos/assets/images/property/2.jpg" className="img-fluid" alt="" />
                                                            <div className="media-body">
                                                                <a href="single-property-8.html"><h5>Magnolia Ranch</h5></a>
                                                                <span>$120.00*</span>
                                                            </div>
                                                        </div>
                                                        <div className="close-circle">
                                                            <a href="javascript:void(0)"><i className="fa fa-times" aria-hidden="true"></i></a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="media">
                                                            <img src="https://themes.pixelstrap.com/sheltos/assets/images/property/3.jpg" className="img-fluid" alt="" />
                                                            <div className="media-body">
                                                                <a href="single-property-8.html"><h5>Magnolia Ranch</h5></a>
                                                                <span>$140.00*</span>
                                                            </div>
                                                        </div>
                                                        <div className="close-circle">
                                                            <a href="javascript:void(0)"><i className="fa fa-times" aria-hidden="true"></i></a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="total">
                                                            <h5>Subtotal :- <span className="float-end">$260.00</span></h5>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown currency">
                                                <a href="javascript:void(0)">
                                                    <i data-feather="dollar-sign"></i>
                                                </a>
                                                <ul className="nav-submenu">
                                                    <li><a href="javascript:void(0)">Dollar</a></li>
                                                    <li><a href="javascript:void(0)">Euro</a></li>
                                                    <li><a href="javascript:void(0)">Pound</a></li>
                                                    <li><a href="javascript:void(0)">Yuan</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <a href="/login">
                                                    {/* <i data-feather="user"></i> */}
                                                    <FaUserAlt />
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
            {/* <!--  header end --> */}</div>
    )
}

export default Navbar