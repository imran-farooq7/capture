"use client";
import Link from "next/link";
import styled from "styled-components";

const Navbar = () => {
	return (
		<StyledNav>
			<h1 className="logo">
				<Link href={"/"}>Me</Link>
			</h1>
			<ul>
				<li>
					<Link href={"/"}>About us</Link>
				</li>
				<li>
					<Link href={"/work"}>Our work</Link>
				</li>
				<li>
					<Link href={"/contact"}>Contact us</Link>
				</li>
			</ul>
		</StyledNav>
	);
};
const StyledNav = styled.nav`
	min-height: 10vh;
	width: 100%;
	display: flex;
	margin: auto;
	position: fixed;
	justify-content: space-between;
	padding: 1rem 10rem;
	background-color: #282828;
	align-items: center;
	z-index: 10;
	a {
		color: white;
		text-decoration: none;
	}
	ul {
		display: flex;
		list-style: none;
		gap: 7rem;
	}
	.logo a {
		font-size: 2rem;
		font-weight: bold;
		font-style: italic;
	}
`;

export default Navbar;
