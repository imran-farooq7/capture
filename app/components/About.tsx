"use client";
import { Description, Hide, StyledAbout, StyledImage } from "@/styles";
import Image from "next/image";
import { motion } from "framer-motion";
import { animateImg, animateTitle, fade } from "@/animate";
import Wave from "./Wave";

const About = () => {
	return (
		<StyledAbout>
			<Description>
				<div className="title">
					<Hide>
						<motion.h2 variants={animateTitle} initial="hidden" animate="show">
							I turn your
						</motion.h2>
					</Hide>
					<Hide>
						<motion.h2 variants={animateTitle} initial="hidden" animate="show">
							<span>designs</span> into
						</motion.h2>
					</Hide>
					<Hide>
						<motion.h2 variants={animateTitle} initial="hidden" animate="show">
							reality
						</motion.h2>
					</Hide>
				</div>
				<motion.p variants={fade}>
					Contact for responsive and modern frontend developement
				</motion.p>
				<motion.button variants={fade}>Contact Me</motion.button>
			</Description>

			<StyledImage variants={animateImg} initial="hidden" animate="show">
				<Image src={"/Home1.jpg"} width={500} height={500} alt="me" />
			</StyledImage>
			<Wave />
		</StyledAbout>
	);
};

export default About;
