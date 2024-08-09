"use client";
import { animateImg, animateLine, animatePage, fade } from "@/animate";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const WorkPage = () => {
	return (
		<Work
			variants={animatePage}
			initial="hidden"
			animate="show"
			style={{ background: "white" }}
		>
			<Web>
				<motion.h2 variants={fade}>Music Player</motion.h2>
				<motion.div variants={animateLine} className="line"></motion.div>
				<Link href="https://waves-sand.vercel.app/" target="_blank">
					<motion.div variants={animateImg}>
						<Image src={"/music.jpg"} width={800} height={100} alt="player" />
					</motion.div>
				</Link>
			</Web>
			<Web>
				<h2>Shortly</h2>
				<div className="line"></div>
				<Link href="https://shorty-seven.vercel.app/" target="_blank">
					<Image src={"/shorten.png"} width={800} height={200} alt="player" />
				</Link>
			</Web>
			<Web>
				<h2>Shop Ease</h2>
				<div className="line"></div>
				<Link href={"https://shopease-yt.vercel.app/"} target="_blank">
					<Image src={"/shop.png"} width={800} height={200} alt="player" />
				</Link>
			</Web>
		</Work>
	);
};
const Work = styled(motion.div)`
	min-height: 100vh;
	overflow: hidden;
	padding: 5rem 10rem;
`;
const Web = styled.div`
	padding-bottom: 10rem;
	.line {
		height: 0.4rem;
		margin-bottom: 3rem;
	}
	img {
		width: 100%;
		height: 50vh;
		object-fit: cover;
	}
`;

export default WorkPage;
