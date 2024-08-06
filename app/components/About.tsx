"use client";
import Image from "next/image";
import styled from "styled-components";

const About = () => {
	return (
		<StyledAbout>
			<Description>
				<div className="title">
					<Hide>
						<h2>I turn your</h2>
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
const StyledAbout = styled.div`
	min-height: 90vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5rem 10rem;
	color: white;
`;
const Description = styled.div`
	flex: 1;
	padding-right: 5rem;
	h2 {
		font-weight: lighter;
	}
`;
const StyledImage = styled.div`
	flex: 1;
	overflow: hidden;
	img {
		object-fit: cover;
		width: 100%;
	}
`;
const Hide = styled.div`
	overflow: hidden;
`;

export default About;
