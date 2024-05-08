import { useContext } from "react";
import { Product } from "../../products/product";
import "../Shop/product_sort.scss";
import { ProducContect } from "../../Context/privecontext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const Product_sort = () => {
	const { handleshoping } = useContext(ProducContect);
	const navigate = useNavigate();
	const handleAddshopping = (user) => {
		const item = JSON.parse(localStorage.getItem("cart_product"));
		if (item) {
			let check = item.findIndex((item) => item.id === user.id);
			if (check && check === -1) {
				handleshoping(user);
			} else {
				toast.warning("san pham da ton tai");
			}
		} else {
			handleshoping(user);
		}
	};
	const handleDetaile = (event) => {
		navigate("/product_detail");
		localStorage.setItem("product_detail", JSON.stringify(event));
	};
	return (
		<>
			<div className="product__sort">
				<div className="row">
					{Product &&
						Product.length > 0 &&
						Product.map((item, index) => {
							return (
								<div className="col-lg-12 col-md-6 mb-4" key={{ index }}>
									<div className="product__item row">
										<div className="product__thumb col-lg-5 col-xl-5">
											<a
												href="/product_detail"
												onClick={() => handleDetaile(item)}>
												<img src={item.imager} alt="" />
											</a>
											<div className="product_sale">
												<button className="item-1" type="">
													Sale
												</button>
												<button className="item-2" type="">
													{item.sale}
												</button>
											</div>
										</div>
										<div className="product__content col-lg-7 col-xl-7">
											<h3>{item.product_name}</h3>
											<div className="product__price">
												<div className="product__old_price">
													<del></del>
												</div>
												<div className="product__new_price">
													<span>${item.price}</span>
												</div>
											</div>
											<div className="content_item">
												<span>
													Shop Harry.com for every day low prices. Free shipping
													on orders $35+ or Pickup In-store and get
												</span>
											</div>
											<div className="product_chilldren d-flex">
												<div
													className="product_add"
													onClick={() => handleAddshopping(item)}>
													<div className="product__cart">
														<i class="fa-solid fa-cart-plus"></i>
														<h3>Add to Cart</h3>
													</div>
												</div>
												<div className="product_action">
													<button className="itme_action" type="">
														<i class="fa-regular fa-heart"></i>
													</button>
													<button className="itme_action" type="">
														<i class="fa-regular fa-eye"></i>
													</button>
													<button
														className="itme_action"
														type=""
														onClick={() => handleDetaile(item)}>
														<i class="fa-solid fa-link"></i>
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</>
	);
};
