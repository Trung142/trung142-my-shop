import { toast } from "react-toastify";
import { createContext, useEffect, useState } from "react";
const ProducContect = createContext({});
const ProductProvider = ({ children }) => {
	//add to cart shopping
	const [product_Detail, setproduct_Detail] = useState([]);
	const [cart_product, setCart_product] = useState([]);
	const [user, setUser] = useState({ email: "", uath: false });
	let handleshoping = (user) => {
		setCart_product([...cart_product, user]);
		localStorage.setItem(
			"cart_product",
			JSON.stringify([...cart_product, user])
		);
		toast.success(user.product_name + " to cart Success!");
	};
	//product
	// delete to cart
	let handleDeleteshopping = (user) => {
		const item = JSON.parse(localStorage.getItem("cart_product"));
		let listData = [...item];
		listData = item.filter((item) => item.id !== user.id);
		localStorage.setItem("cart_product", JSON.stringify(listData));
		setCart_product(listData);
	};
	// quantity + 1
	let handlequantity = (event) => {
		const item = JSON.parse(localStorage.getItem("cart_product"));
		let listData = [...item];
		let index = item.findIndex((item) => item.id === event.id);
		listData[index].product_Details.quantity =
			event.product_Details.quantity < 1
				? (event.product_Details.quantity = 1)
				: event.product_Details.quantity + 1;
		localStorage.setItem("cart_product", JSON.stringify(listData));
		setCart_product(listData);
	};
	// quantity -1
	let handlequantitys__1 = (event) => {
		const item = JSON.parse(localStorage.getItem("cart_product"));
		const listData = [...item];
		let index = item.findIndex((item) => item.id === event.id);
		listData[index].product_Details.quantity =
			event.product_Details.quantity < 2
				? (event.product_Details.quantity = 1)
				: event.product_Details.quantity - 1;
		localStorage.setItem("cart_product", JSON.stringify(listData));
		setCart_product(listData);
	};

	useEffect(() => {
		const item = JSON.parse(localStorage.getItem("cart_product"));
		if (item) {
			setCart_product(item);
		}
	}, []);

	//login
	const loginContext = (email) => {
		setUser((user) => ({
			email: email,
			uath: true,
		}));

		localStorage.setItem("email", email);
	};

	// logout
	const logoutContext = () => {
		setUser((user) => ({
			email: "",
			uath: false,
		}));
		localStorage.removeItem("email");
	};
	return (
		<ProducContect.Provider
			value={{
				handleshoping,
				cart_product,
				product_Detail,
				setproduct_Detail,
				handleDeleteshopping,
				handlequantity,
				handlequantitys__1,
				loginContext,
				user,
				logoutContext,
			}}>
			{children}
		</ProducContect.Provider>
	);
};
export { ProducContect, ProductProvider };
