/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import "../container/nabar.scss";
import shape from "../images/offcanvas-shape-1.webp";
import { Shopping_cart } from "./shopping_cart";
import { useContext, useEffect } from "react";
import { ProducContect } from "../../Context/privecontext";
import { toast } from "react-toastify";
import ScrollToTop from "react-scroll-to-top";

export const Navbar = () => {
	const { cart_product, logoutContext, user } = useContext(ProducContect);
	const handleLogout = () => {
		logoutContext();
		toast.success("logout success !");
	};
	const handleHome = () => {
		window.scrollTo(0, 0);
	};
	useEffect(() => {
		window.scrollTo(0, 0);
	});
	return (
		<>
			<header>
				<div className="container-fluid">
					<div className="row">
						<div className="col-xxl-1 col-xl-2 col-lg-4 col-md-4 col-sm-5 col-8 left-header">
							<div className="logo">
								<a href="">Trung</a>
								<span>Shop</span>
							</div>
						</div>
						<div className="col-xxl-6 col-xl-7 d-none d-xl-block conten-header">
							<div className="main-menu">
								<div className="mobile-menu-3">
									<div className="navbar">
										<ul className="navbar-conten">
											<li onClick={handleHome} className="item">
												<Link to="/">Home</Link>
											</li>
											<li onClick={handleHome} className="item">
												<Link to="/about">About Us</Link>
											</li>
											<li onClick={handleHome} className="item">
												<Link to="/shop">Shop</Link>
											</li>
											<li className="item active">
												<Link to="/about">Pages</Link>
												<ul className="submenu">
													<li onClick={handleHome} className="sub-item">
														<Link href="/">Pages</Link>
													</li>
													<li onClick={handleHome} className="sub-item">
														<Link to="/shop">Product</Link>
													</li>
													<li onClick={handleHome} className="sub-item">
														<Link to="/">Setting</Link>
													</li>
													<li onClick={handleHome} className="sub-item">
														<Link to="/login">Login</Link>
													</li>
													<li onClick={handleHome} className="sub-item">
														<Link to="/cart">My Cart</Link>
													</li>
													<li onClick={handleHome} className="sub-item">
														<Link to="/">you user</Link>
													</li>
												</ul>
											</li>
											<li onClick={handleHome} className="item">
												<Link to="/contact#">Contact us</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xxl-5 col-xl-3 col-lg-8 col-md-8 col-sm-7 col-4 rigth-header">
							<div className="header__bottom-right-13 d-flex justify-content-end align-items-center pl-30"></div>
							<div className="header__search-13 d-none d-md-block">
								<ul className="header-content">
									<li className="item">
										<Link to="/sign_up">
											<i className="fa-solid fa-magnifying-glass"></i>
										</Link>
									</li>
									{user && user.uath === true ? (
										<li className="item" onClick={handleLogout}>
											<Link to="/login">
												<i className="fa-solid fa-user-ninja"></i>
											</Link>
										</li>
									) : (
										<li className="item">
											<Link to="/login">
												<i className="fa-solid fa-user-ninja"></i>
											</Link>
										</li>
									)}

									<li className="item">
										<Link href="" className="cart_chill">
											<i className="fa-regular fa-heart "></i>
											<small>1</small>
										</Link>
									</li>
									<li
										className="item"
										data-bs-toggle="offcanvas"
										data-bs-target="#offcanvasRight1"
										aria-controls="offcanvasRight">
										<Link className="cart_chill">
											<i className="fa-solid fa-cart-arrow-down "></i>
											<small>{cart_product.length}</small>
										</Link>
									</li>
								</ul>
								{user && user.uath === true && (
									<div
										style={{
											textAlign: "center",
											position: "absolute",
											left: "100px",
										}}>
										<small style={{ fontSize: "12px", color: "#03041c" }}>
											{user.email}
										</small>
									</div>
								)}
							</div>
							<div className="header__action-13 d-block d-xl-none">
								<div
									className="bar"
									data-bs-toggle="offcanvas"
									data-bs-target="#offcanvasRight"
									aria-controls="offcanvasRight">
									<i className="fa-solid fa-bars"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			<Shopping_cart />
			<div
				className="offcanvas offcanvas-end"
				tabindex="-1"
				id="offcanvasRight"
				aria-labelledby="offcanvasRightLabel">
				<div className="offcanvas-header">
					<h5 className="offcanvas-title" id="offcanvasRightLabel">
						<div className="logo">
							<a href="">Trung</a>
							<span>Shop</span>
						</div>
						{user && user.uath === true && (
							<div>
								<small>
									<b>User : </b>
									{user.email}
								</small>
							</div>
						)}
					</h5>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="offcanvas"
						aria-label="Close"></button>
				</div>
				<div className="offcanvas-img">
					<img src={shape} alt="" />
				</div>
				<div className="offcanvas-body">
					<div className="offcanvas__content">
						<div className="navbar">
							<ul className="navbar-conten">
								<li onClick={handleHome} className="item">
									<Link to="/" href={"/#"}>
										Home
									</Link>
								</li>
								<li onClick={handleHome} className="item">
									<Link to="/about">About Us</Link>
								</li>
								<li onClick={handleHome} className="item">
									<Link to="/shop">Shop</Link>
								</li>
								<li onClick={handleHome} className="item active">
									<Link to="/about">Pages</Link>
									<ul className="submenu">
										<li onClick={handleHome} className="sub-item">
											<Link to="/about" href="#">
												Pages
											</Link>
										</li>
										<li onClick={handleHome} className="sub-item">
											<Link to="/shop">Product</Link>
										</li>
										<li onClick={handleHome} className="sub-item">
											<Link to="/">Setting</Link>
										</li>
										<li onClick={handleHome} className="sub-item">
											<Link to="/login">Login</Link>
										</li>
										<li onClick={handleHome} className="sub-item">
											<Link to="/cart">My Cart</Link>
										</li>
										<li onClick={handleHome} className="sub-item">
											<Link to="/">you user</Link>
										</li>
									</ul>
								</li>
								<li onClick={handleHome} className="item">
									<Link to="/contact">Contact us</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="offcanvas__btn">
						<button type="" className="btn__getting">
							<a href="">Getting Started</a>
						</button>
					</div>
					<div className="offcanvas__">
						<div className="offcanvas-chill">
							<span>Follow :</span>
							<div className="item-icons">
								<div>
									<i class="fa-brands fa-facebook"></i>
								</div>
								<div>
									<i class="fa-brands fa-twitter"></i>
								</div>
								<div>
									<i class="fa-brands fa-linkedin-in"></i>
								</div>
								<div>
									<i class="fa-brands fa-youtube"></i>
								</div>
							</div>
						</div>
					</div>
					<div className="offcanvas__contact">
						<div className="offcanvas_phone">
							<span>+84 379422402</span>
							<div>
								<p>t142ayun@gmail.com</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ScrollToTop smooth />
		</>
	);
};
