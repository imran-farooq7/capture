"use client";
import Link from "next/link";
import styled from "styled-components";
const StyledNav = styled.nav`
	min-height: 10vh;
	display: flex;
	margin: auto;
	justify-content: space-between;
	padding: 1rem 10rem;
	background-color: #282828;
	align-items: center;
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
					<Link href={"/"}>Our work</Link>
				</li>
				<li>
					<Link href={"/"}>Contact us</Link>
				</li>
			</ul>
		</StyledNav>
	);
};

export default Navbar;
