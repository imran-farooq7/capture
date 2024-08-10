import { useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const useScroll = () => {
	const control = useAnimation();
	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView) {
			control.start("show");
		} else {
			control.start("hidden");
		}
	}, [control, inView]);
	return { ref: ref, control: control };
};

export default useScroll;
