"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
	li {
		position: relative;
	}
	ul {
		display: flex;
		list-style: none;
		gap: 7rem;
	}
	.logo {
		font-size: 2rem;
		font-weight: bold;
		font-style: italic;
	}
`;
const Line = styled(motion.div)`
	height: 0.1rem;
	background: #23d997;
	width: 0%;
	position: absolute;
	bottom: -30%;
	/* left: 60%; */
`;

const Navbar = () => {
	const pathName = usePathname();
	return (
		<StyledNav>
			<h1 className="logo">
				<Link href={"/"}>Me</Link>
			</h1>
			<ul>
				<li>
					<Link href={"/"}>About us</Link>
					{pathName === "/" && (
						<Line
							initial={{ width: 0 }}
							exit={{ width: 0 }}
							animate={{ width: "100%" }}
						/>
					)}
				</li>
				<li>
					<Link href={"/work"}>Our work</Link>
					{pathName === "/work" && (
						<Line
							initial={{ width: 0 }}
							exit={{ width: 0 }}
							animate={{ width: "100%" }}
						/>
					)}
				</li>
				<li>
					<Link href={"/contact"}>Contact us</Link>
					{pathName === "/contact" && (
						<Line
							initial={{ width: 0 }}
							exit={{ width: 0 }}
							animate={{ width: "100%" }}
						/>
					)}
				</li>
			</ul>
		</StyledNav>
	);
};

export default Navbar;
