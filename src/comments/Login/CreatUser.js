import { Link, useNavigate } from "react-router-dom";
import "../Login/login.scss";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
export const CreatUser = () => {
	const [loading, setloading] = useState(false);
	const [loading1, setloading1] = useState(false);
	//
	const [active1, setactive1] = useState("");
	const [active2, setactive2] = useState("");
	const [active3, setactive3] = useState("");
	const [active4, setactive4] = useState("");
	//values
	const [name, setname] = useState("");
	const [email, setemail] = useState("");
	const [password, setnpassword] = useState("");
	const [confirm, setconfirm] = useState("");
	const [acount, setacount] = useState([]);
	//submit sign up
	const navigage = useNavigate();
	const handleSignup = () => {
		let user = {
			name: name,
			email: email,
			password: password,
			confirm: confirm,
		};
		if (!name) {
			setactive1("active1");
		}
		if (!email) {
			setactive2("active1");
		}
		if (!password) {
			setactive3("active1");
		}
		if (!confirm) {
			setactive4("active1");
		} else {
			if (password !== confirm) {
				toast.error("Confirm not valua!");
				setactive4("active1");
				setactive3("active1");
			} else {
				setacount([...acount, user]);
				localStorage.setItem("Acount", JSON.stringify([...acount, user]));
				toast.success("Create user success!");
				navigage("/login");
			}
		}
	};
	useEffect(() => {
		const item = JSON.parse(localStorage.getItem("Acount"));
		if (item) {
			setacount(item);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	//haclick
	const handleClickName = () => {
		setactive1("active1");
		setactive2("");
		setactive3("");
		setactive4("");
	};
	const handleClickEmail = () => {
		setactive1("");
		setactive2("active1");
		setactive3("");
		setactive4("");
	};
	const handleClickPasswor = () => {
		setactive1("");
		setactive2("");
		setactive3("active1");
		setactive4("");
	};
	const handleClickConfirm = () => {
		setactive1("");
		setactive2("");
		setactive3("");
		setactive4("active1");
	};

	return (
		<>
			<section className="sign__up">
				<div className="container">
					<div className="row">
						<div className="col-xl-6 col-lg-8 col-md-10">
							<div className="sigup_sweper">
								<div className="sigup_top">
									<div className="sigup_text">
										<h3> Register Now!</h3>
										<span>You can signup with you social account below</span>
									</div>
								</div>
								<div className="sigup_form">
									<form>
										<div className="sigup_input">
											<div className={`sigup_item ${active1}`}>
												<div className="item" onClick={handleClickName}>
													<i className="fa-regular fa-user fa_item"></i>
													<input
														type="text"
														value={name}
														onChange={(event) => setname(event.target.value)}
														name=""
														placeholder="Enter your name"
													/>
												</div>
											</div>
											<div className={`sigup_item ${active2}`}>
												<div className="item" onClick={handleClickEmail}>
													<i className="fa-regular fa-envelope fa_item"></i>
													<input
														type="email"
														value={email}
														onChange={(event) => setemail(event.target.value)}
														name=""
														placeholder="Enter your email"
													/>
												</div>
											</div>
											<div className={`sigup_item ${active3}`}>
												<div className="item" onClick={handleClickPasswor}>
													<i className="fa-solid fa-lock fa_item"></i>
													<input
														type={loading1 === false ? "password" : "text"}
														value={password}
														onChange={(event) =>
															setnpassword(event.target.value)
														}
														name=""
														placeholder="Password"
													/>
													<i
														onClick={() => setloading1(!loading1)}
														className={
															loading1 === false
																? "fa-regular fa-eye-slash fa_item2"
																: "fa-regular fa-eye fa_item2"
														}></i>
												</div>
											</div>
											<div className={`sigup_item ${active4}`}>
												<div className="item" onClick={handleClickConfirm}>
													<i className="fa-solid fa-lock fa_item"></i>
													<input
														type={loading === false ? "password" : "text"}
														value={confirm}
														onChange={(event) => setconfirm(event.target.value)}
														name=""
														placeholder="Confirm Password"
													/>
													<i
														onClick={() => setloading(!loading)}
														className={
															loading === false
																? "fa-regular fa-eye-slash fa_item2"
																: "fa-regular fa-eye fa_item2"
														}></i>
												</div>
											</div>
										</div>
									</form>
									<div className="sigup__btn" onClick={() => handleSignup()}>
										<button>Sign Up</button>
									</div>
									<div className="sigup_footer">
										<span>
											Already have an account? <Link to="/login">Log in</Link>{" "}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
