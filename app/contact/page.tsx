"use client";
import { motion } from "framer-motion";
import styled from "styled-components";
import { animatePage, animateTitle } from "@/animate";

const ContactPage = () => {
	return (
		<ContactStyle
			exit="exit"
			variants={animatePage}
			initial="hidden"
			animate="show"
			style={{ background: "#fff" }}
		>
			<Title>
				<Hide>
					<motion.h2 variants={animateTitle}>Get in touch.</motion.h2>
				</Hide>
			</Title>
			<div>
				<Hide>
					<Social variants={animateTitle}>
						<Circle />
						<h2>Send Us A Message</h2>
					</Social>
				</Hide>
				<Hide>
					<Social variants={animateTitle}>
						<Circle />
						<h2>Send an email.</h2>
					</Social>
				</Hide>
				<Hide>
					<Social variants={animateTitle}>
						<Circle />
						<h2>Social Media</h2>
					</Social>
				</Hide>
			</div>
		</ContactStyle>
	);
};

const ContactStyle = styled(motion.div)`
	padding: 5rem 10rem;
	color: #353535;
	min-height: 90vh;
	@media (max-width: 1500px) {
		padding: 2rem;
		font-size: 1rem;
	}
`;
const Title = styled.div`
	margin-bottom: 4rem;
	color: black;
	@media (max-width: 1500px) {
		margin-top: 5rem;
	}
`;
const Hide = styled.div`
	overflow: hidden;
`;
const Circle = styled.div`
	border-radius: 50%;
	width: 3rem;
	height: 3rem;
	background: #353535;
`;
const Social = styled(motion.div)`
	display: flex;
	align-items: center;
	h2 {
		margin: 2rem;
	}
`;

export default ContactPage;
