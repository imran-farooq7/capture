"use client";
import { LuAlarmClock } from "react-icons/lu";
import { GiDoubleDiaphragm } from "react-icons/gi";
import { MdAttachMoney } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import Image from "next/image";
import { Description, StyledAbout, StyledImage } from "@/styles";
import styled from "styled-components";

const Services = () => {
	return (
		<StyledServices>
			<Description>
				<h2>
					High <span>quality</span> web development services
				</h2>
				<Cards>
					<Card>
						<div className="icon">
							<LuAlarmClock size={40} color="#1feca4" />
							<h3>Efficient</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</Card>
					<Card>
						<div className="icon">
							<GiDoubleDiaphragm size={40} color="#1feca4" />
							<h3>Quality</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</Card>
					<Card>
						<div className="icon">
							<MdAttachMoney size={40} color="#1feca4" />
							<h3>Affordable</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</Card>
					<Card>
						<div className="icon">
							<VscWorkspaceTrusted size={40} color="#1feca4" />
							<h3>Trusted</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</Card>
				</Cards>
			</Description>
			{/* <StyledImage> */}
			<Image
				src={"/home2.jpg"}
				width={500}
				height={500}
				alt="features"
				style={{ objectFit: "cover" }}
			/>
			{/* </StyledImage> */}
		</StyledServices>
	);
};

const StyledServices = styled(StyledAbout)`
	h2 {
		padding-bottom: 2rem;
	}
	p {
		width: 70%;
		padding: 1rem 0rem 3rem 0rem;
	}
`;
const Cards = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
const Card = styled.div`
	flex-basis: 18rem;
	.icon {
		display: flex;
		align-items: center;
		gap: 1rem;
		h3 {
			font-size: 1.1rem;
			background-color: white;
			color: black;
			padding: 1rem;
		}
	}
`;
export default Services;