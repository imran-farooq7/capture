import { useState } from "react";
import { motion } from "framer-motion";

const Toggle = ({
	children,
	title,
}: {
	children: React.ReactNode;
	title: string;
}) => {
	const [toggle, setToggle] = useState(false);
	return (
		<motion.div layout onClick={() => setToggle(!toggle)}>
			<motion.h4 layout style={{ cursor: "pointer" }}>
				{title}
			</motion.h4>
			{toggle ? children : ""}
			<motion.div
				layout
				transition={{ duration: 0.3 }}
				className="faq-line"
			></motion.div>
		</motion.div>
	);
};

export default Toggle;
