import { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
	const { pathname } = Fragment();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}
