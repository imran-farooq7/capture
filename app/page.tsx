"use client";
import { animatePage } from "@/animate";
import About from "@components/About";
import Faqs from "@components/Faqs";
import Services from "@components/Services";
import { motion } from "framer-motion";
const Home = () => {
	return (
		<motion.div variants={animatePage} initial="hidden" animate="show">
			<About />
			<Services />
			<Faqs />
		</motion.div>
	);
};

export default Home;
