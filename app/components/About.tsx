"use client";
import { Description, Hide, StyledAbout, StyledImage } from "@/styles";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
	return (
		<StyledAbout>
			<Description>
				<div className="title">
					<Hide>
						<motion.h2>I turn your</motion.h2>
					</Hide>
					<Hide>
						<h2>
							<span>designs</span> into
						</h2>
					</Hide>
					<Hide>
						<h2>reality</h2>
					</Hide>
				</div>
				<p>Contact me for any type frontend developement</p>
				<button>Contact Me</button>
			</Description>

			<StyledImage>
				<Image src={"/Home1.jpg"} width={500} height={500} alt="me" />
			</StyledImage>
		</StyledAbout>
	);
};

export default About;
