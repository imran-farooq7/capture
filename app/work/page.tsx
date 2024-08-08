"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const WorkPage = () => {
	return (
		<Work>
			<Web>
				<h2>Music Player</h2>
				<div className="line"></div>
				<Link href="https://waves-sand.vercel.app/" target="_blank">
					<Image src={"/player.png"} width={800} height={200} alt="player" />
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
const Work = styled.div`
	min-height: 100vh;
	overflow: hidden;
	padding: 5rem 10rem;
`;
const Web = styled.div`
	padding-bottom: 10rem;
	.line {
		height: 0.5rem;
		background-color: #cccccc;
		margin-bottom: 3rem;
	}
	img {
		width: 100%;
		height: 80vh;
		object-fit: cover;
	}
`;

export default WorkPage;
