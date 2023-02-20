import Image from "next/image"

function Header() {
    return <div id="wrapper">
        <div className="w1">

            <header id="mt-header" className="style4">

                <div className="mt-bottom-bar">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-12">

                                <div className="mt-logo">
                                    <a href="#"><img src="../../assets/images/mt-logo.png" alt="schon" /></a>
                                </div>

                                <ul className="mt-icon-list">
                                    <li className="hidden-lg hidden-md">
                                        <a href="#" className="bar-opener mobile-toggle">
                                            <span className="bar"></span>
                                            <span className="bar small"></span>
                                            <span className="bar"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="icon-magnifier"></a>
                                    </li>
                                    <li className="drop">
                                        <a href="#" className="icon-heart cart-opener"><span style={{ marginBottom: "-3" }} className="num">3</span></a>

                                        <div className="mt-drop">

                                            <div className="mt-drop-sub">

                                                <div className="mt-side-widget">

                                                    <div className="cart-row">
                                                        <a href="#" className="img"><img src="http://placehold.it/75x75" alt="image" className="img-responsive" /></a>
                                                        <div className="mt-h">
                                                            <span className="mt-h-title"><a href="#">Marvelous Modern 3 Seater</a></span>
                                                            <span className="price"><i className="fa fa-eur" aria-hidden="true"></i> 599,00</span>
                                                        </div>
                                                        <a href="#" className="close fa fa-times"></a>
                                                    </div>

                                                    <div className="cart-row">
                                                        <a href="#" className="img"><img src="http://placehold.it/75x75" alt="image" className="img-responsive" /></a>
                                                        <div className="mt-h">
                                                            <span className="mt-h-title"><a href="#">Marvelous Modern 3 Seater</a></span>
                                                            <span className="price"><i className="fa fa-eur" aria-hidden="true"></i> 599,00</span>
                                                        </div>
                                                        <a href="#" className="close fa fa-times"></a>
                                                    </div>

                                                    <div className="cart-row">
                                                        <a href="#" className="img"><img src="http://placehold.it/75x75" alt="image" className="img-responsive" /></a>
                                                        <div className="mt-h">
                                                            <span className="mt-h-title"><a href="#">Marvelous Modern 3 Seater</a></span>
                                                            <span className="price"><i className="fa fa-eur" aria-hidden="true"></i> 599,00</span>
                                                        </div>
                                                        <a href="#" className="close fa fa-times"></a>
                                                    </div>

                                                    <div className="cart-row-total">
                                                        <span className="mt-total">Add them all</span>
                                                        <span className="mt-total-txt"><a href="#" className="btn-type2">add to CART</a></span>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                        <span className="mt-mdropover"></span>
                                    </li>
                                    <li className="drop">
                                        <a href="#" className="cart-opener">
                                            <span className="icon-handbag"></span>
                                            <span className="num">3</span>
                                        </a>

                                        <div className="mt-drop">

                                            <div className="mt-drop-sub">

                                                <div className="mt-side-widget">

                                                    <div className="cart-row">
                                                        <a href="#" className="img"><img src="http://placehold.it/75x75" alt="image" className="img-responsive" /></a>
                                                        <div className="mt-h">
                                                            <span className="mt-h-title"><a href="#">Marvelous Modern 3 Seater</a></span>
                                                            <span className="price"><i className="fa fa-eur" aria-hidden="true"></i> 599,00</span>
                                                            <span className="mt-h-title">Qty: 1</span>
                                                        </div>
                                                        <a href="#" className="close fa fa-times"></a>
                                                    </div>

                                                    <div className="cart-row">
                                                        <a href="#" className="img"><img src="http://placehold.it/75x75" alt="image" className="img-responsive" /></a>
                                                        <div className="mt-h">
                                                            <span className="mt-h-title"><a href="#">Marvelous Modern 3 Seater</a></span>
                                                            <span className="price"><i className="fa fa-eur" aria-hidden="true"></i> 599,00</span>
                                                            <span className="mt-h-title">Qty: 1</span>
                                                        </div>
                                                        <a href="#" className="close fa fa-times"></a>
                                                    </div>

                                                    <div className="cart-row">
                                                        <a href="#" className="img"><img src="http://placehold.it/75x75" alt="image" className="img-responsive" /></a>
                                                        <div className="mt-h">
                                                            <span className="mt-h-title"><a href="#">Marvelous Modern 3 Seater</a></span>
                                                            <span className="price"><i className="fa fa-eur" aria-hidden="true"></i> 599,00</span>
                                                            <span className="mt-h-title">Qty: 1</span>
                                                        </div>
                                                        <a href="#" className="close fa fa-times"></a>
                                                    </div>

                                                    <div className="cart-row-total">
                                                        <span className="mt-total">Sub Total</span>
                                                        <span className="mt-total-txt"><i className="fa fa-eur" aria-hidden="true"></i> 799,00</span>
                                                    </div>

                                                    <div className="cart-btn-row">
                                                        <a href="#" className="btn-type2">VIEW CART</a>
                                                        <a href="#" className="btn-type3">CHECKOUT</a>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                        <span className="mt-mdropover"></span>
                                    </li>
                                    <li>
                                        <a href="#" className="bar-opener side-opener">
                                            <span className="bar"></span>
                                            <span className="bar small"></span>
                                            <span className="bar"></span>
                                        </a>
                                    </li>
                                </ul>

                                <nav id="nav">
                                    <ul>
                                        <li>
                                            <a className="drop-link" href="homepage1.html">HOME <i className="fa fa-angle-down hidden-lg hidden-md" aria-hidden="true"></i></a>
                                            <div className="s-drop">
                                                <ul>
                                                    <li><a href="homepage1.html">Homepage1</a></li>
                                                    <li><a href="homepage2.html">homepage2</a></li>
                                                    <li><a href="homepage3.html">homepage3</a></li>
                                                    <li><a href="homepage4.html">homepage4</a></li>
                                                    <li><a href="homepage5.html">Homepage5</a></li>
                                                    <li><a href="homepage6.html">homepage6</a></li>
                                                    <li><a href="homepage7.html">homepage7</a></li>
                                                    <li><a href="homepage8.html">homepage8</a></li>
                                                    <li><a href="homepage9.html">homepage9</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="drop">
                                            <a href="product-grid-view.html">PRODUCTS <i className="fa fa-angle-down" aria-hidden="true"></i></a>

                                            <div className="mt-dropmenu text-left">

                                                <div className="mt-frame">

                                                    <div className="mt-f-box">

                                                        <div className="mt-col-3">
                                                            <div className="sub-dropcont">
                                                                <strong className="title"><a href="product-grid-view.html" className="mt-subopener">PRODUCTS</a></strong>
                                                                <div className="sub-drop">
                                                                    <ul>
                                                                        <li><a href="product-grid-view.html">Product Grid View</a></li>
                                                                        <li><a href="product-list-view.html">Product List View</a></li>
                                                                        <li><a href="product-detail.html">Product Detail</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="sub-dropcont">
                                                                <strong className="title"><a href="#" className="mt-subopener">404 Pages</a></strong>
                                                                <div className="sub-drop">
                                                                    <ul>
                                                                        <li><a href="404-page.html">404 Page</a></li>
                                                                        <li><a href="404-page2.html">404 Page2</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="mt-col-3">
                                                            <div className="sub-dropcont">
                                                                <strong className="title"><a href="#" className="mt-subopener">About US</a></strong>
                                                                <div className="sub-drop">
                                                                    <ul>
                                                                        <li><a href="about-us.html">About</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="sub-dropcont">
                                                                <strong className="title"><a href="#" className="mt-subopener">Contact US</a></strong>
                                                                <div className="sub-drop">
                                                                    <ul>
                                                                        <li><a href="contact-us.html">Contact</a></li>
                                                                        <li><a href="contact-us2.html">Contact 2</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="sub-dropcont">
                                                                <strong className="title"><a href="#" className="mt-subopener">Coming Soon</a></strong>
                                                                <div className="sub-drop">
                                                                    <ul>
                                                                        <li><a href="coming-soon.html">Coming Soon</a></li>
                                                                        <li><a href="coming-soon2.html">Coming Soon2</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="mt-col-3">
                                                            <div className="sub-dropcont">
                                                                <strong className="title"><a href="#" className="mt-subopener">KITCHEN FURNITURE</a></strong>
                                                                <div className="sub-drop">
                                                                    <ul>
                                                                        <li><a href="#">Kitchen Taps</a></li>
                                                                        <li><a href="#">Breakfast time</a></li>
                                                                        <li><a href="#">Cooking</a></li>
                                                                        <li><a href="#">Food Storage Boxes</a></li>
                                                                        <li><a href="#">Spice Jars</a></li>
                                                                        <li><a href="#">Napskins</a></li>
                                                                        <li><a href="#">Oven Gloves</a></li>
                                                                        <li><a href="#">Placemats</a></li>
                                                                        <li><a href="#">Cooking</a></li>
                                                                        <li><a href="#">Food Storage Boxes</a></li>
                                                                        <li><a href="#">Spice Jars</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="mt-col-3 promo">
                                                            <div className="mt-promobox">
                                                                <a href="#"><img src="http://placehold.it/295x320" alt="promo banner" className="img-responsive" /></a>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                            <span className="mt-mdropover"></span>
                                        </li>
                                        <li>
                                            <a className="drop-link" href="blog-right-sidebar.html">Blog <i className="fa fa-angle-down hidden-lg hidden-md" aria-hidden="true"></i></a>
                                            <div className="s-drop">
                                                <ul>
                                                    <li><a href="blog-fullwidth-page.html">Blog Fullwidth Page</a></li>
                                                    <li><a href="blog-right-sidebar2.html">blog right sidebar2</a></li>
                                                    <li><a href="blog-postlist-3-masonry.html">blog postlist masonry</a></li>
                                                    <li><a href="blog-post-detail-sidebar.html">blog post detail sidebar</a></li>
                                                    <li><a href="blog-post-detail-full-width.html">blog post detail full width</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="drop">
                                            <a href="#">PAGES <i className="fa fa-angle-down" aria-hidden="true"></i></a>

                                            <div className="mt-dropmenu text-left">

                                                <div className="mt-frame">

                                                    <div className="mt-f-box">

                                                        <div className="mt-col-3">
                                                            <div className="sub-dropcont">
                                                                <strong className="title"><a href="product-grid-view.html" className="mt-subopener">PRODUCTS</a></strong>
                                                                <div className="sub-drop">
                                                                    <ul>
                                                                        <li><a href="product-grid-view.html">Product Grid View</a></li>
                                                                        <li><a href="product-list-view.html">Product List View</a></li>
                                                                        <li><a href="product-detail.html">Product Detail</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="sub-dropcont">
                                                                <strong className="title"><a href="#" className="mt-subopener">404 Pages</a></strong>
                                                                <div className="sub-drop">
                                                                    <ul>
                                                                        <li><a href="404-page.html">404 Page</a></li>
                                                                        <li><a href="404-page2.html">404 Page2</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="mt-col-3">
                                                            <div className="sub-dropcont">
                                                                <strong className="title"><a href="#" className="mt-subopener">About US</a></strong>
                                                                <div className="sub-drop">
                                                                    <ul>
                                                                        <li><a href="about-us.html">About</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="sub-dropcont">
                                                                <strong className="title"><a href="#" className="mt-subopener">Contact US</a></strong>
                                                                <div className="sub-drop">
                                                                    <ul>
                                                                        <li><a href="contact-us.html">Contact</a></li>
                                                                        <li><a href="contact-us2.html">Contact 2</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="sub-dropcont">
                                                                <strong className="title"><a href="#" className="mt-subopener">Coming Soon</a></strong>
                                                                <div className="sub-drop">
                                                                    <ul>
                                                                        <li><a href="coming-soon.html">Coming Soon</a></li>
                                                                        <li><a href="coming-soon2.html">Coming Soon2</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="mt-col-3">
                                                            <div className="sub-dropcont">
                                                                <strong className="title"><a href="#" className="mt-subopener">KITCHEN FURNITURE</a></strong>
                                                                <div className="sub-drop">
                                                                    <ul>
                                                                        <li><a href="#">Kitchen Taps</a></li>
                                                                        <li><a href="#">Breakfast time</a></li>
                                                                        <li><a href="#">Cooking</a></li>
                                                                        <li><a href="#">Food Storage Boxes</a></li>
                                                                        <li><a href="#">Spice Jars</a></li>
                                                                        <li><a href="#">Napskins</a></li>
                                                                        <li><a href="#">Oven Gloves</a></li>
                                                                        <li><a href="#">Placemats</a></li>
                                                                        <li><a href="#">Cooking</a></li>
                                                                        <li><a href="#">Food Storage Boxes</a></li>
                                                                        <li><a href="#">Spice Jars</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="mt-col-3 promo">
                                                            <div className="mt-promobox">
                                                                <a href="#"><img src="http://placehold.it/295x320" alt="promo banner" className="img-responsive" /></a>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                            <span className="mt-mdropover"></span>
                                        </li>
                                        <li><a href="about-us.html">About</a></li>
                                        <li>
                                            <a className="drop-link" href="contact-us.html">Contact <i className="fa fa-angle-down hidden-lg hidden-md" aria-hidden="true"></i></a>
                                            <div className="s-drop">
                                                <ul>
                                                    <li><a href="contact-us.html">Contact</a></li>
                                                    <li><a href="contact-us2.html">Contact 2</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>

                            </div>
                        </div>
                    </div>
                </div>

                <span className="mt-side-over"></span>
            </header>
        </div>
    </div>
}

export default Header
