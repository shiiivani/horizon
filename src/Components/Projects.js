import React from 'react'

function Projects() {
  return (
    <div>
    {/* <!-- Loader start --> */}
    <div className="loader-wrapper">
        <div className="row loader-img">
            <div className="col-12">
                <img src="https://themes.pixelstrap.com/sheltos/assets/images/loader/loader-2.gif" className="img-fluid" alt=""/>
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
                            {/* <a href="https://themes.pixelstrap.com/sheltos/index.html">
                                <img src="https://themes.pixelstrap.com/sheltos/assets/images/logo/2.png" alt="" className="img-fluid"/>
                            </a> */}
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
                                            <a href="javascript:void(0)" className="nav-link menu-title">Home</a>
                                            {/* <ul className="nav-submenu menu-content">
                                                <li><a href="layout-1.html">Slider filter search</a>
                                                </li>
                                                <li><a href="layout-2.html">Corporate</a>
                                                </li>
                                                <li><a href="layout-3.html">Enterprise</a>
                                                </li>
                                                <li><a href="layout-4.html">Classic <span className="label">New</span></a>
                                                </li>
                                                <li><a href="layout-5.html">Image with content</a>
                                                </li>
                                                <li><a href="layout-6.html">Modern <span className="label">New</span></a>
                                                </li>
                                                <li><a href="layout-7.html">Parallax image</a>
                                                </li>
                                                <li><a href="layout-8.html">Search tab</a>
                                                </li>
                                                <li><a href="layout-9.html">Typed image</a>
                                                </li>
                                                <li><a href="layout-10.html">Morden video</a>
                                                </li>
                                                <li><a href="layout-11.html">Map with v-search</a>
                                                </li>
                                                <li><a href="layout-12.html">Map with h-search</a>
                                                </li>
                                            </ul> */}
                                        </li>
                                        <li className="dropdown">
                                            <a href="javascript:void(0)" className="nav-link menu-title">Projects</a>
                                            {/* <ul className="nav-submenu menu-content">
                                                <li>
                                                    <a href="javascript:void(0)" className="menu-title-level1">Grid view</a>
                                                    <ul className="nav-sub-childmenu level1">
                                                        <li>
                                                            <a href="javascript:void(0)" className="submenu-title">2 Grid</a>
                                                            <ul className="nav-sub-childmenu submenu-content level2">
                                                                <li><a href="grid-2.html">Left Sidebar</a>
                                                                </li>
                                                                <li><a href="grid-right-sidebar.html">Right Sidebar</a>
                                                                </li>
                                                                <li><a href="grid-2-no-sidebar.html">No Sidebar</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)" className="submenu-title">3 Grid</a>
                                                            <ul className="nav-sub-childmenu submenu-content level2">
                                                                <li><a href="grid-left-sidebar.html">Left Sidebar</a>
                                                                </li>
                                                                <li><a href="grid-3-right-sidebar.html">Right Sidebar</a>
                                                                </li>
                                                                <li><a href="grid-3.html">No Sidebar</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="grid-slider.html">Slider</a></li>
                                                        <li>
                                                            <a href="javascript:void(0)" className="submenu-title">map</a>
                                                            <ul className="nav-sub-childmenu submenu-content level2">
                                                                <li><a href="google-map.html">google map</a></li>
                                                                <li><a href="leaflet-map.html">leaflet map</a></li>
                                                                <li><a href="here-map.html">here map</a></li>
                                                                <li><a href="bing-map.html">bing map</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)" className="submenu-title">map modal</a>
                                                            <ul className="nav-sub-childmenu submenu-content level2">
                                                                <li><a href="google-map-modal.html">google map</a></li>
                                                                <li><a href="leaflet-map-modal.html">leaflet map</a>
                                                                </li>
                                                                <li><a href="here-map-modal.html">here map</a></li>
                                                                <li><a href="bing-map-modal.html">bing map</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)" className="submenu-title">Left side map</a>
                                                            <ul className="nav-sub-childmenu submenu-content level2">
                                                                <li><a href="google-leftmap.html">google map</a></li>
                                                                <li><a href="leaflet-leftmap.html">leaflet map</a></li>
                                                                <li><a href="here-leftmap.html">here map</a></li>
                                                                <li><a href="bing-leftmap.html">bing map</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)" className="submenu-title">onclick map</a>
                                                            <ul className="nav-sub-childmenu submenu-content level2">
                                                                <li><a href="google-clickmap.html">google map</a></li>
                                                                <li><a href="leaflet-clickmap.html">leaflet map</a></li>
                                                                <li><a href="here-clickmap.html">here map</a></li>
                                                                <li><a href="bing-clickmap.html">bing map</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)" className="submenu-title">map header</a>
                                                            <ul className="nav-sub-childmenu submenu-content level2">
                                                                <li><a href="google-header.html">google map</a></li>
                                                                <li><a href="leaflet-header.html">leaflet map</a></li>
                                                                <li><a href="here-header.html">here map</a></li>
                                                                <li><a href="bing-header.html">bing map</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="menu-title-level1">List view</a>
                                                    <ul className="nav-sub-childmenu level1">
                                                        <li>
                                                            <a href="javascript:void(0)" className="submenu-title">Listing</a>
                                                            <ul className="nav-sub-childmenu submenu-content level2">
                                                                <li><a href="list-left-sidebar.html">Left Sidebar</a>
                                                                </li>
                                                                <li><a href="list-right-sidebar.html">Right Sidebar</a>
                                                                </li>
                                                                <li><a href="list-no-sidebar.html">No Sidebar</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)" className="submenu-title">Map</a>
                                                            <ul className="nav-sub-childmenu submenu-content level2">
                                                                <li><a href="google-list-map.html">google map</a></li>
                                                                <li><a href="leaflet-list-map.html">leaflet map</a></li>
                                                                <li><a href="here-list-map.html">here map</a></li>
                                                                <li><a href="bing-list-map.html">bing map</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="list-slider.html">Slider</a>
                                                        </li>
                                                        <li><a href="thumbnail-list.html">Thumbnail image</a></li>
                                                        <li><a href="thumbnail-list-video.html">Video</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="menu-title-level1">Tab layout</a>
                                                    <ul className="nav-sub-childmenu level1">
                                                        <li><a href="tab-layout.html">Tab full width</a></li>
                                                        <li><a href="tablayout-left-sidebar.html">Tab left sidebar</a>
                                                        </li>
                                                        <li><a href="tablayout-right-sidebar.html">Tab right sidebar</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul> */}
                                        </li>
                                        <li className="dropdown">
                                            <a href="javascript:void(0)" className="nav-link menu-title">About us</a>
                                            {/* <ul className="nav-submenu menu-content">
                                                <li><a href="single-property-1.html">sticky tab or classic</a></li>
                                                <li><a href="single-property-2.html">360 view</a></li>
                                                <li><a href="single-property-3.html">Without top</a></li>
                                                <li><a href="single-property-4.html">Left sidebar</a></li>
                                                <li><a href="single-property-5.html">Info tab</a></li>
                                                <li><a href="single-property-6.html">Image slider</a></li>
                                                <li><a href="single-property-7.html">thumbnail image</a></li>
                                                <li><a href="single-property-8.html">image box</a></li>
                                                <li><a href="single-property-9.html">Template breadcrumb</a></li>
                                                <li><a href="single-property-10.html">modal details <span className="icon-trend label"><i className="fas fa-bolt"></i></span></a></li>
                                            </ul> */}
                                        </li>
                                        {/* <li className="mega-menu">
                                            <a href="javascript:void(0)" className="nav-link menu-title">
                                                pages
                                            </a>
                                            <div className="mega-menu-container menu-content">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col mega-box">
                                                            <div className="link-section">
                                                                <div className="submenu-title">
                                                                    <h5>Portfolio</h5>
                                                                </div>
                                                                <div className="submenu-content opensubmegamenu">
                                                                    <ul className="list">
                                                                        <li><a href="portfolio-grid-2.html">2 grid</a>
                                                                        </li>
                                                                        <li><a href="portfolio-grid-3.html">3 grid</a>
                                                                        </li>
                                                                        <li><a href="portfolio-grid-4.html">4 grid</a>
                                                                        </li>
                                                                        <li><a href="portfolio-grid-title-2.html">2 grid
                                                                                title</a></li>
                                                                        <li><a href="portfolio-grid-title-3.html">3 grid
                                                                                title</a></li>
                                                                        <li><a href="portfolio-grid-title-4.html">4 grid
                                                                                title</a></li>
                                                                        <li><a href="masonry-grid-3.html">3 masonry</a>
                                                                        </li>
                                                                        <li><a href="masonry-grid-4.html">4 masonry</a>
                                                                        </li>
                                                                        <li><a
                                                                                href="portfolio-parallax.html">parallax</a>
                                                                        </li>
                                                                        <li><a href="portfolio-center-slide.html">center
                                                                                slides</a></li>
                                                                        <li><a href="portfolio-creative-1.html">creative
                                                                                1</a></li>
                                                                        <li><a href="portfolio-creative-2.html">creative
                                                                                2</a></li>
                                                                        <li><a href="portfolio-creative-3.html">creative
                                                                                3 <span className="icon-trend label"><i className="fas fa-bolt"></i></span></a></li>
                                                                        <li><a href="portfolio-creative-4.html">creative
                                                                                4</a></li>
                                                                        <li><a href="portfolio-details.html">details</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col mega-box">
                                                            <div className="link-section">
                                                                <div className="submenu-title">
                                                                    <h5>Blog page</h5>
                                                                </div>
                                                                <div className="submenu-content opensubmegamenu">
                                                                    <ul className="list">
                                                                        <li><a href="blog-left-sidebar.html">left
                                                                                sidebar</a></li>
                                                                        <li><a href="blog-right-sidebar.html">right
                                                                                sidebar</a></li>
                                                                        <li><a href="blog-no-sidebar.html">no
                                                                                sidebar</a></li>
                                                                        <li><a href="blog-creative-left-sidebar.html">creative
                                                                                left sidebar</a></li>
                                                                        <li><a href="blog-creative-right-sidebar.html">creative
                                                                                right sidebar</a></li>
                                                                        <li><a href="blog-creative-no-sidebar.html">creative
                                                                                no sidebar</a></li>
                                                                        <li><a href="blog-list-left-sidebar.html">list
                                                                                left sidebar</a></li>
                                                                        <li><a href="blog-list-right-sidebar.html">list
                                                                                right sidebar</a></li>
                                                                        <li><a href="blog-list-no-sidebar.html">list no
                                                                                sidebar</a></li>
                                                                        <li><a href="blog-masonry-left-sidebar.html">Masonry
                                                                                left sidebar</a></li>
                                                                        <li><a href="blog-masonry-right-sidebar.html">Masonry
                                                                                right sidebar</a></li>
                                                                        <li><a href="blog-masonry-no-sidebar.html">Masonry
                                                                                no sidebar</a></li>
                                                                        <li><a href="blog-list-mix-left-sidebar.html">Mix
                                                                                list left sidebar</a></li>
                                                                        <li><a href="blog-list-mix-right-sidebar.html">Mix
                                                                                list right sidebar</a></li>
                                                                        <li><a href="blog-grid-mix-left-sidebar.html">Mix
                                                                                grid left sidebar</a></li>
                                                                        <li><a href="blog-grid-mix-right-sidebar.html">Mix
                                                                                grid right sidebar</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col mega-box">
                                                            <div className="link-section">
                                                                <div className="submenu-title">
                                                                    <h5>blog detail pages</h5>
                                                                </div>
                                                                <div className="submenu-content opensubmegamenu">
                                                                    <ul className="list">
                                                                        <li><a href="blog-detail-left-sidebar.html">left
                                                                                sidebar</a></li>
                                                                        <li><a href="blog-detail-right-sidebar.html">right
                                                                                sidebar</a></li>
                                                                        <li><a href="blog-detail-no-sidebar.html">no
                                                                                sidebar</a></li>
                                                                        <li><a href="blog-detail-gallery.html">detail
                                                                                with gallery</a></li>
                                                                        <li><a href="blog-detail-video.html">detail with
                                                                                video</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="link-section">
                                                                <div className="submenu-title">
                                                                    <h5>elements - breadcrumb</h5>
                                                                </div>
                                                                <div className="submenu-content opensubmegamenu">
                                                                    <ul className="list">
                                                                        <li><a href="grid-2.html">basic</a></li>
                                                                        <li><a href="breadcrumb-with-effect.html">image
                                                                                with effect <span className="label">New</span></a></li>
                                                                        <li><a href="breadcrumb-right.html">right
                                                                                content</a></li>
                                                                        <li><a href="single-property-1.html">only
                                                                                image</a></li>
                                                                        <li><a href="here-list-map.html">Small</a></li>
                                                                        <li><a href="bing-list-map.html">gradient</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col mega-box">
                                                            <div className="link-section">
                                                                <div className="submenu-title">
                                                                    <h5>Agency</h5>
                                                                </div>
                                                                <div className="submenu-content opensubmegamenu">
                                                                    <ul className="list">
                                                                        <li><a href="agency-profile.html">Agency Profile</a></li>
                                                                        <li><a href="agency-grid.html">Agency Grid</a></li>
                                                                        <li><a href="agency-list.html">Agency List</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="link-section">
                                                                <div className="submenu-title">
                                                                    <h5>Email template</h5>
                                                                </div>
                                                                <div className="submenu-content opensubmegamenu">
                                                                    <ul className="list">
                                                                        <li><a href="https://themes.pixelstrap.com/sheltos/email-template/offer.html">Offer</a></li>
                                                                        <li><a href="https://themes.pixelstrap.com/sheltos/email-template/confirmation.html">Confirmation</a></li>
                                                                        <li><a href="https://themes.pixelstrap.com/sheltos/email-template/thankyou.html">Thank you</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="link-section">
                                                                <div className="submenu-title">
                                                                    <h5>User panel</h5>
                                                                </div>
                                                                <div className="submenu-content opensubmegamenu">
                                                                    <ul className="list">
                                                                        <li><a href="user-dashboard.html">user dashboard <span className="icon-trend label"><i className="fas fa-bolt"></i></span></a></li>
                                                                        <li><a href="user-listing.html">My Listing</a></li>
                                                                        <li><a href="user-create.html">Create property</a></li>
                                                                        <li><a href="user-profile.html">My profile</a></li>
                                                                        <li><a href="user-favourites.html">Favourites</a></li>
                                                                        <li><a href="compare.html">Compare Property</a></li>
                                                                        <li><a href="user-payment.html">Cards & payment</a></li>
                                                                        <li><a href="user-privacy.html">Privacy</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col mega-box">
                                                            <div className="link-section">
                                                                <div className="submenu-title">
                                                                    <h5>other pages</h5>
                                                                </div>
                                                                <div className="submenu-content opensubmegamenu">
                                                                    <ul className="list">
                                                                        <li><a href="about-us.html">About us 1</a></li>
                                                                        <li><a href="about-us-2.html">About us 2</a></li>
                                                                        <li><a href="services.html">Services</a></li>
                                                                        <li><a href="pricing.html">Pricing</a></li>
                                                                        <li><a href="coming-soon-1.html">Coming Soon 1</a></li>
                                                                        <li><a href="coming-soon-2.html">Coming Soon 2</a></li>
                                                                        <li><a href="coming-soon-3.html">Coming Soon 3</a></li>
                                                                        <li><a href="404.html">404</a></li>
                                                                        <li><a href="faq.html">FAQ</a></li>
                                                                        <li><a href="login.html">log in</a></li>
                                                                        <li><a href="signup.html">sign up</a></li>
                                                                        <li><a href="signup-wizard.html">sign up wizard <span className="icon-trend label"><i className="fas fa-bolt"></i></span></a></li>
                                                                        <li><a href="forgot-password.html">forgot password</a></li>
                                                                        <li><a href="terms-conditions.html">terms & conditions</a></li>
                                                                        <li><a href="privacy-policy.html">privacy policy</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dropdown">
                                            <a href="javascript:void(0)" className="nav-link menu-title">Modules</a>
                                            <ul className="nav-submenu menu-content">
                                                <li><a href="button-element.html">Button</a>
                                                </li>
                                                <li><a href="label-element.html">Label</a>
                                                </li>
                                                <li><a href="title-element.html">Title</a>
                                                </li>
                                                <li><a href="image-ratio-element.html">Image ratio <span className="icon-trend label"><i className="fas fa-bolt"></i></span></a>
                                                </li>
                                                <li><a href="footer-element.html">footer</a>
                                                </li>
                                                <li><a href="blog-element.html">blog</a>
                                                </li>
                                                <li><a href="brand-element.html">brand</a>
                                                </li>
                                                <li><a href="testimonial-element.html">testimonial</a>
                                                </li>
                                                <li><a href="full-banner-element.html">full banner</a>
                                                </li>
                                                <li><a href="about-element.html">about</a>
                                                </li>
                                                <li><a href="service-element.html">service</a>
                                                </li>
                                                <li><a href="property-element.html">property</a>
                                                </li>
                                                <li><a href="feature-element.html">feature</a>
                                                </li>
                                                <li><a href="other-element.html">others</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <a href="javascript:void(0)" className="nav-link menu-title">agent</a>
                                            <ul className="nav-submenu menu-content">
                                                <li><a href="agent-profile.html">Agent Profile</a></li>
                                                <li><a href="agent-grid.html">Agent Grid</a></li>
                                                <li><a href="agent-list.html">Agent List</a></li>
                                                <li><a href="submit-property.html">Submit property <span className="label">New</span></a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <a href="javascript:void(0)" className="nav-link menu-title">Contact</a>
                                            <ul className="nav-submenu menu-content">
                                                <li><a href="contact-1.html">Contact us 1</a></li>
                                                <li><a href="contact-2.html">Contact us 2</a></li>
                                                <li><a href="contact-3.html">Contact us 3</a></li>
                                            </ul>
                                        </li>*/}
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
                                                    <img src="https://themes.pixelstrap.com/sheltos/assets/images/property/2.jpg" className="img-fluid" alt=""/>
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
                                                    <img src="https://themes.pixelstrap.com/sheltos/assets/images/property/3.jpg" className="img-fluid" alt=""/>
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
                                        <a href="login.html">
                                            <i data-feather="user"></i>
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


    {/* <!-- breadcrumb start --> */}
    <section className="breadcrumb-section p-0">
        <img src="https://themes.pixelstrap.com/sheltos/assets/images/inner-background.jpg" className="bg-img img-fluid" alt=""/>
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
                                                data-bs-toggle="dropdown"><span>Investment Structure</span> <i
                                                    className="fas fa-angle-down"></i></span>
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
                                                data-bs-toggle="dropdown"><span>Investment Strategy</span> <i
                                                    className="fas fa-angle-down"></i></span>
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
                                                data-bs-toggle="dropdown"><span>Property Location</span> <i
                                                    className="fas fa-angle-down"></i></span>
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
                                                   </span> <i className="fas fa-angle-down"></i></span>
                                            <div className="dropdown-menu text-start">
                                                <a className="dropdown-item" href="javascript:void(0)">Less than 10,000</a>
                                                <a className="dropdown-item" href="javascript:void(0)">10,000 - 25,000</a>
                                                <a className="dropdown-item" href="javascript:void(0)">25,000 - 50,000</a>
                                                <a className="dropdown-item" href="javascript:void(0)">More than 50,000</a>
                                                {/* <a className="dropdown-item" href="javascript:void(0)">4</a>
                                                <a className="dropdown-item" href="javascript:void(0)">5</a>
                                                <a className="dropdown-item" href="javascript:void(0)">6</a> */}
                                            </div>
                                        </div>
                                    </div> 
                                     {/* <div className="col-sm-6">
                                        <div className="dropdown">
                                            <span className="dropdown-toggle font-rubik"
                                                data-bs-toggle="dropdown"><span>Bed</span> <i
                                                    className="fas fa-angle-down"></i></span>
                                            <div className="dropdown-menu text-start">
                                                <a className="dropdown-item" href="javascript:void(0)">Bed</a>
                                                <a className="dropdown-item" href="javascript:void(0)">1</a>
                                                <a className="dropdown-item" href="javascript:void(0)">2</a>
                                                <a className="dropdown-item" href="javascript:void(0)">3</a>
                                                <a className="dropdown-item" href="javascript:void(0)">4</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="dropdown">
                                            <span className="dropdown-toggle font-rubik"
                                                data-bs-toggle="dropdown"><span>Bath</span> <i
                                                    className="fas fa-angle-down"></i></span>
                                            <div className="dropdown-menu text-start">
                                                <a className="dropdown-item" href="javascript:void(0)">Bath</a>
                                                <a className="dropdown-item" href="javascript:void(0)">1</a>
                                                <a className="dropdown-item" href="javascript:void(0)">2</a>
                                                <a className="dropdown-item" href="javascript:void(0)">3</a>
                                                <a className="dropdown-item" href="javascript:void(0)">4</a>
                                            </div>
                                        </div>
                                    </div>  */}
                                    <div className="col-12">
                                        <div className="dropdown">
                                            <span className="dropdown-toggle font-rubik"
                                                data-bs-toggle="dropdown"><span>Minimum Hold Period</span> <i
                                                    className="fas fa-angle-down"></i></span>
                                            <div className="dropdown-menu text-start">
                                                <a className="dropdown-item" href="javascript:void(0)">0-2 years</a>
                                                <a className="dropdown-item" href="javascript:void(0)">2-5 years</a>
                                                <a className="dropdown-item" href="javascript:void(0)">5-10 years</a>
                                                <a className="dropdown-item" href="javascript:void(0)">More than 10 years</a>
                                                {/* <a className="dropdown-item" href="javascript:void(0)">Non-Accredited Eligible</a> */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="col-12">
                                        <div className="price-range">
                                            <label for="amount">Price : </label>
                                            <input type="text" id="amount" readonly/>
                                            <div id="slider-range" className="theme-range-2"></div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="price-range">
                                            <label for="amount">Area : </label>
                                            <input type="text" id="amount1" readonly/>
                                            <div id="slider-range1" className="theme-range-2"></div>
                                        </div>
                                    </div> */}
                                    <div className="col-12">
                                        <a href="list-left-sidebar.html" className="btn btn-gradient color-2 btn-block btn-pill mt-2">Search </a>
                                    </div>
                                </div>
                            </div>
                            <div className="advance-card">
                                <h6>Eligibility</h6>
                                <div className="category-property">
                                    <ul>
                                        <li><a href="javascript:void(0)"><i className="fas fa-arrow-right me-2"></i>Accredited Investors Only 
                                        {/* <span className="float-end">(15)</span> */}
                                        </a></li>
                                        <li><a href="javascript:void(0)"><i className="fas fa-arrow-right me-2"></i>1031 eligible
                                        {/* <span className="float-end">(10)</span> */}
                                        </a></li>
                                        <li><a href="javascript:void(0)"><i className="fas fa-arrow-right me-2"></i>Oppurtunity Zone eligible
                                        {/* <span className="float-end">(8)</span> */}
                                        </a></li>
                                        <li><a href="javascript:void(0)"><i className="fas fa-arrow-right me-2"></i>SD-IRA eligible
                                        {/* <span className="float-end">(5)</span> */}
                                        </a></li>
                                        <li><a href="javascript:void(0)"><i className="fas fa-arrow-right me-2"></i>Non-Accredited eligible 
                                        {/* <span className="float-end">(12)</span> */}
                                        </a></li>
                                        {/* <li><a href="javascript:void(0)"><i className="fas fa-arrow-right me-2"></i>Duplexes <span
                                                    className="float-end">(3)</span></a></li> */}
                                    </ul>
                                </div>
                            </div>
                            <div className="advance-card">
                                <h6>Contact Info</h6>
                                <div className="category-property">
                                    <ul>
                                        <li>
                                            <i data-feather="map-pin" className="me-2"></i>A-32, Albany, Newyork.
                                        </li>
                                        <li>
                                            <i data-feather="phone-call" className="me-2"></i>(+066) 518 - 457 - 5181
                                        </li>
                                        <li>
                                            <i data-feather="mail" className="me-2"></i>Contact@gmail.com
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <div className="advance-card">
                                <h6>Recently Added</h6>
                                <div className="recent-property">
                                    <ul>
                                        <li>
                                            <div className="media">
                                                <img src="https://themes.pixelstrap.com/sheltos/assets/images/property/9.jpg" className="img-fluid" alt=""/>
                                                <div className="media-body">
                                                    <h5>Sea Breezes</h5>
                                                    <span>$9800 / <span>Month</span></span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="media">
                                                <img src="https://themes.pixelstrap.com/sheltos/assets/images/property/10.jpg" className="img-fluid" alt=""/>
                                                <div className="media-body">
                                                    <h5>Orchard House</h5>
                                                    <span>$7500 / <span>Month</span></span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="media">
                                                <img src="https://themes.pixelstrap.com/sheltos/assets/images/property/11.jpg" className="img-fluid" alt=""/>
                                                <div className="media-body">
                                                    <h5>Neverland</h5>
                                                    <span>$5000 / <span>Month</span></span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
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
                                                Newest</span> <i className="fas fa-angle-down ms-lg-3 ms-2"></i></span>
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
                                    <img src="https://themes.pixelstrap.com/sheltos/assets/images/property/11.jpg" className="bg-img" alt=""   width="500px" height="400px"/>
                                    <div className="labels-left">
                                        <div>
                                            <span className="label label-shadow">Individual Deals</span>
                                        </div>
                                    </div>
                                    <div className="seen-data">
                                        <i data-feather="camera"></i>
                                        <span>25</span>
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
                                    <span className="font-roboto">France</span>
                                    <a href="single-property-8.html">
                                        <h3>Allen's Across Way</h3>
                                    </a>
                                    <h6>$6558.00*</h6>
                                    <p className="font-roboto">Real estate is divided into several categories, including residential property, commercial property and industrial property.</p>
                                    {/* <ul>
                                        <li><img src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/double-bed.svg" className="img-fluid" alt=""/>Bed : 4</li>
                                        <li><img src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/bathroom.svg" className="img-fluid" alt=""/>Baths : 4</li>
                                        <li><img src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/square-ruler-tool.svg" className="img-fluid ruler-tool" alt=""/>Sq Ft : 5000</li>
                                    </ul> */}
                                    <div className="property-btn d-flex">
                                        <span>June 20, 2022</span>
                                        <button type="button"  onclick="document.location='single-property-8.html'" className="btn btn-dashed btn-pill color-2">Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 fundVehicles grid-item wow fadeInUp" data-className="fundVehicles">
                            <div className="property-box">
                                <div className="property-image">
                                    <img src="https://themes.pixelstrap.com/sheltos/assets/images/property/10.jpg" className="bg-img" alt=""  width="500px" height="400px"/>
                                    <div className="labels-left">
                                        <div>
                                            <span className="label label-shadow">Individual Deals</span>
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
                                    <span className="font-roboto">France</span>
                                    <a href="single-property-8.html">
                                        <h3>Little Acorn Farm</h3>
                                    </a>
                                    <h6>$6558.00*</h6>
                                    <p className="font-roboto">The most common and most absolute type of estate, the tenant enjoys the greatest discretion over the disposal of the property.</p>
                                    {/* <ul>
                                        <li><img src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/double-bed.svg" className="img-fluid" alt=""/>Bed : 4</li>
                                        <li><img src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/bathroom.svg" className="img-fluid" alt=""/>Baths : 4</li>
                                        <li><img src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/square-ruler-tool.svg" className="img-fluid ruler-tool" alt=""/>Sq Ft : 5000</li>
                                    </ul> */}
                                    <div className="property-btn d-flex">
                                        <span>August 4, 2022</span>
                                        <button type="button"  onclick="document.location='single-property-8.html'" className="btn btn-dashed btn-pill color-2">Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 individualDeals grid-item wow fadeInUp" data-className="individualDeals">
                            <div className="property-box">
                                <div className="property-image">
                                    <img src="https://themes.pixelstrap.com/sheltos/assets/images/property/14.jpg" className="bg-img" alt=""  width="500px" height="400px"/>
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
                                    <span className="font-roboto">brazil</span>
                                    <a href="single-property-8.html">
                                        <h3>Hidden Spring Hideway</h3>
                                    </a>
                                    <h6>$9554.00*</h6>
                                    <p className="font-roboto">Real estate market in most countries are not as organize or efficient as markets for other, more liquid investment instruments.</p>
                                    {/* <ul>
                                        <li><img src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/double-bed.svg" className="img-fluid" alt=""/>Bed : 4</li>
                                        <li><img src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/bathroom.svg" className="img-fluid" alt=""/>Baths : 4</li>
                                        <li><img src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/square-ruler-tool.svg" className="img-fluid ruler-tool" alt=""/>Sq Ft : 5000</li>
                                    </ul> */}
                                    <div className="property-btn d-flex">
                                        <span>July 18, 2022</span>
                                        <button type="button"  onclick="document.location='single-property-8.html'" className="btn btn-dashed btn-pill color-2">Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 fundvehicles grid-item wow fadeInUp" data-className="fundvehicles">
                            <div className="property-box">
                                <div className="property-image">
                                    <img src="https://themes.pixelstrap.com/sheltos/assets/images/property/15.jpg" className="bg-img" alt=""  width="500px" height="400px"/>
                                    <div className="labels-left">
                                        <div>
                                            <span className="label label-shadow">Individual Deals</span>
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
                                    <span className="font-roboto">usa</span>
                                    <a href="single-property-8.html">
                                        <h3>Merrick in Spring Way</h3>
                                    </a>
                                    <h6>$4513.00*</h6>
                                    <p className="font-roboto">An interior designer is someone who plans,researches,coordinates,management and manages such enhancement projects.</p>
                                    {/* <ul>
                                        <li><img src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/double-bed.svg" className="img-fluid" alt=""/>Bed : 4</li>
                                        <li><img src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/bathroom.svg" className="img-fluid" alt=""/>Baths : 4</li>
                                        <li><img src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/square-ruler-tool.svg" className="img-fluid ruler-tool" alt=""/>Sq Ft : 5000</li>
                                    </ul> */}
                                    <div className="property-btn d-flex">
                                        <span>January 6, 2022</span>
                                        <button type="button"  onclick="document.location='single-property-8.html'" className="btn btn-dashed btn-pill color-2">Details</button>
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
                                    <span className="font-roboto">usa</span>
                                    <a href="single-property-8.html">
                                        <h3>Home in Merrick Way</h3>
                                    </a>
                                    <h6>$4513.00*</h6>
                                    <p className="font-roboto">Elegant retreat in a quiet Coral Gables setting. This home provides wonderful entertaining spaces with a chef
                                        kitchen opening…</p>
                                    {/* <ul>
                                        <li><img src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/double-bed.svg" className="img-fluid" alt=""/>Bed : 4</li>
                                        <li><img src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/bathroom.svg" className="img-fluid" alt=""/>Baths : 4</li>
                                        <li><img src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/square-ruler-tool.svg" className="img-fluid ruler-tool" alt=""/>Sq Ft : 5000</li>
                                    </ul> */}
                                    <div className="property-btn d-flex">
                                        <span>January 6, 2022</span>
                                        <button type="button"  onclick="document.location='single-property-8.html'" className="btn btn-dashed btn-pill color-2">Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 fundvehicles grid-item wow fadeInUp" data-className="fundvehicles">
                            <div className="property-box">
                                <div className="property-image">
                                    <img src="https://themes.pixelstrap.com/sheltos/assets/images/property/16.jpg" className="bg-img" alt="" width="500px" height="400px"/>
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
                                    <span className="font-roboto">brazil</span>
                                    <a href="single-property-8.html">
                                        <h3>Magnolia Ranch</h3>
                                    </a>
                                    <h6>$9554.00*</h6>
                                    <p className="font-roboto">This home provides wonderful entertaining spaces with a chef
                                        kitchen opening. Elegant retreat in a quiet Coral Gables setting..</p>
                                    {/* <ul>
                                        <li><img src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/double-bed.svg" className="img-fluid" alt=""/>Bed : 4</li>
                                        <li><img src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/bathroom.svg" className="img-fluid" alt=""/>Baths : 4</li>
                                        <li><img src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/square-ruler-tool.svg" className="img-fluid ruler-tool" alt=""/>Sq Ft : 5000</li>
                                    </ul> */}
                                    <div className="property-btn d-flex">
                                        <span>May 14, 2022</span>
                                        <button type="button"  onclick="document.location='single-property-8.html'" className="btn btn-dashed btn-pill color-2">Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <nav className="theme-pagination">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="javascript:void(0)" aria-label="Previous">
                                    <span aria-hidden="true">«</span>
                                    <span className="sr-only">Previous</span>
                                </a>
                            </li>
                            <li className="page-item active"><a className="page-link" href="javascript:void(0)">1</a></li>
                            <li className="page-item"><a className="page-link" href="javascript:void(0)">2</a></li>
                            <li className="page-item"><a className="page-link" href="javascript:void(0)">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="javascript:void(0)" aria-label="Next">
                                    <span aria-hidden="true">»</span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav> */}
                </div>
            </div>
        </div>
    </section>
    {/* <!-- property grid end --> */}

    {/* <!-- footer start --> */}
    <footer>
        <div className="footer footer-bg">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3">
                        <div className="footer-details text-center">
                            {/* <a href="https://themes.pixelstrap.com/sheltos/index.html">
                                <img src="https://themes.pixelstrap.com/sheltos/assets/images/logo/footer-logo.png" alt=""/>
                            </a> */}
                            <p>Elegant retreat in a quiet Coral Gables setting. This home provides
                                wonderful entertaining spaces with a chef kitchen opening
                            </p>
                            {/* <h6>Contact us</h6>
                            <ul className="icon-list">
                                <li><a href="contact-3.html"><i className="fas fa-map-marker-alt"></i></a></li>
                                <li><a href="contact-3.html"><i className="fas fa-phone-alt"></i></a></li>
                                <li><a href="signup.html"><i className="fas fa-envelope"></i></a></li>
                                <li><a href="contact-3.html"><i className="fas fa-globe"></i></a></li>
                                <li><a href="contact-3.html"><i className="fas fa-wifi"></i></a></li>
                            </ul> */}
                        </div>
                    </div>
                    <div className="col-xl-9">
                        <div className="row">
                            <div className="col-lg-3 col-md-4">
                                <div className="footer-links footer-left-space">
                                    <h5 className="footer-title ">Useful links
                                        <span className="according-menu"><i className="fas fa-chevron-down"></i></span>
                                    </h5>
                                    <ul className="footer-content">
                                        <li>
                                            <a href="about-us-2.html">About us</a>
                                        </li>
                                        <li>
                                            <a href="grid-2.html">New Arrivals</a>
                                        </li>
                                        <li>
                                            <a href="agency-grid.html">Agency</a>
                                        </li>
                                        <li>
                                            <a href="faq.html">Faq</a>
                                        </li>
                                        <li>
                                            <a href="contact-2.html">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4">
                                <div className="footer-links">
                                    <h5 className="footer-title">feature
                                        <span className="according-menu"><i className="fas fa-chevron-down"></i></span>
                                    </h5>
                                    <ul className="footer-content">
                                        <li>
                                            <a href="services.html">Services</a>
                                        </li>
                                        <li>
                                            <a href="agency-list.html">Agency</a>
                                        </li>
                                        <li>
                                            <a href="agent-grid.html">Agents</a>
                                        </li>
                                        <li>
                                            <a href="pricing.html">Pricing</a>
                                        </li>
                                        <li>
                                            <a href="user-favourites.html">Favourites</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4">
                                <div className="footer-links">
                                    <h5 className="footer-title">Social
                                        <span className="according-menu"><i className="fas fa-chevron-down"></i></span>
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
                                    <h5 className="footer-title">subscribe
                                        <span className="according-menu"><i className="fas fa-chevron-down"></i></span>
                                    </h5>
                                    <div className="footer-content">
                                        <p className="mb-0">
                                            Real estate investing involves the purchase, Improvement of realty, management and sale or rental of real estate for profit.
                                        </p>
                                        <form>
                                            <div className="input-group">
                                                <input type="email" className="form-control" placeholder="Email Address" required/>
                                                <span className="input-group-apend">
                                                    <button type="submit" className="input-group-text" id="basic-addon2"><i
                                                        className="fas fa-paper-plane"></i></button>
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
                                        <div className="media">
                                            {/* <a href="blog-detail-left-sidebar.html">
                                                <div className="img-overlay">
                                                        <img src="https://themes.pixelstrap.com/sheltos/assets/images/footer/1.jpg" alt=""/>
                                                </div>
                                            </a> */}
                                            {/* <div className="media-body">
                                               <h6><a href="blog-detail-left-sidebar.html">Real Estate Industry</a></h6>
                                                <p className="font-roboto"><a href="blog-detail-right-sidebar.html">An Electronic version of the real estate industry.</a></p>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div>
                                        {/* <div className="media">
                                            <a href="blog-detail-left-sidebar.html">
                                                <div className="img-overlay">
                                                        <img src="https://themes.pixelstrap.com/sheltos/assets/images/footer/2.jpg" alt=""/>
                                                </div>
                                            </a>
                                            <div className="media-body">
                                                <h6><a href="blog-detail-left-sidebar.html">Entertaining Spaces</a></h6>
                                                <p className="font-roboto"><a href="blog-detail-right-sidebar.html">This home provides
                                                    wonderful entertaining spaces.</a></p>
                                            </div>
                                        </div> */}
                                    </div>
                                    <div>
                                        <div className="media">
                                            <a href="blog-detail-left-sidebar.html">
                                                <div className="img-overlay">
                                                        <img src="https://themes.pixelstrap.com/sheltos/assets/images/footer/3.jpg" alt=""/>
                                                </div>
                                            </a>
                                            <div className="media-body">
                                               <h6><a href="blog-detail-left-sidebar.html">Estate Agents Work</a></h6>
                                                <p className="font-roboto"><a href="blog-detail-right-sidebar.html">The market of buying and selling real estate.</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="media">
                                            <a href="blog-detail-left-sidebar.html">
                                                <div className="img-overlay">
                                                        <img src="https://themes.pixelstrap.com/sheltos/assets/images/footer/4.jpg" alt=""/>
                                                </div>
                                            </a>
                                            <div className="media-body">
                                                <h6><a href="blog-detail-left-sidebar.html">Increase in Demand</a></h6>
                                                <p className="font-roboto"><a href="blog-detail-right-sidebar.html">The effects of an increase demand in short run.</a></p>
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
                            <p className="mb-0">Copyright 2022, All Right Reserved Sheltos</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6 text-end">
                        <ul className="sub-footer-link">
                            <li><a href="layout-2.html">Home</a></li>
                            <li><a href="terms-conditions.html">Terms</a></li>
                            <li><a href="privacy-policy.html">Privacy policy</a></li>
                            <li><a href="contact-2.html">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- footer end --> */}

     {/* <!-- tap to top start --> 
    <div className="tap-top">
        <div>
            <i className="fas fa-arrow-up"></i>
        </div>
    </div>
     {/* <!-- tap to top end --> */}

    {/* <!-- customizer start --> 
    <div className="customizer-wrap">
        <div className="customizer-links">
            <i data-feather="settings"></i>
        </div>
        <div className="customizer-contain custom-scrollbar">
            <div className="setting-back">
                <i data-feather="x"></i>
            </div>
            <div className="layouts-settings">
                <div className="customizer-title">
                    <h6 className="color-2">Layout type</h6>
                </div>
                <div className="option-setting">
                    <span>Light</span>
                    <label className="switch">
                        <input type="checkbox" name="chk1" value="option" className="setting-check"/><span className="switch-state"></span>
                    </label>
                    <span>Dark</span>
                </div>
            </div>
            <div className="layouts-settings">
                <div className="customizer-title">
                    <h6 className="color-2">Layout Direction</h6>
                </div>
                <div className="option-setting">
                    <span>LTR</span>
                    <label className="switch">
                        <input type="checkbox" name="chk2" value="option" className="setting-check1"/><span className="switch-state"></span>
                    </label>
                    <span>RTL</span>
                </div>
            </div>
            <div className="layouts-settings">
                <div className="customizer-title">
                    <h6 className="color-2">Unlimited Color</h6>
                </div>
                <div className="option-setting unlimited-color-layout">
                    <div className="form-group">
                        <label for="ColorPicker3">color 3</label>
                        <input id="ColorPicker3" type="color" value="#ff5c41" name="Default"/>
                    </div> 
                    <div className="form-group">
                        <label for="ColorPicker4">color 4</label>
                        <input id="ColorPicker4" type="color" value="#ff8c41" name="Default"/>
                    </div> 
                </div>
            </div>
        </div>
    </div>*/}
                                    </div> 
  )
}

export default Projects