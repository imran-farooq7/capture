"use client";
import { fade } from "@/animate";
import { StyledAbout } from "@/styles";
import styled from "styled-components";
import useScroll from "@/hooks/useScroll";
import Toggle from "./Toggle";

const Faq = () => {
	const { ref, control } = useScroll();
	return (
		<FAQS variants={fade} initial={"hidden"} ref={ref} animate={control}>
			<h2>
				Any Question <span>FAQ</span>
			</h2>
			<Toggle title="How Do I Start">
				<div className="question">
					<div className="answer">
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
							autem accusamus ex laboriosam porro, adipisci quam voluptatum
							magnam placeat corporis.
						</p>
					</div>
				</div>
			</Toggle>
			<Toggle title="Tech Stack">
				<div className="question">
					<div className="answer">
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error,
							totam.
						</p>
					</div>
				</div>
			</Toggle>
			<Toggle title="Differrent Payment Methods">
				<div className="question">
					<div className="answer">
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error,
							totam.
						</p>
					</div>
				</div>
			</Toggle>
			<Toggle title="What Products do you offer">
				<div className="question">
					<div className="answer">
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error,
							totam.
						</p>
					</div>
				</div>
			</Toggle>
		</FAQS>
	);
};
const FAQS = styled(StyledAbout)`
	display: block;
	span {
		display: block;
	}
	h2 {
		padding-bottom: 1rem;
		font-weight: lighter;
	}
	.faq-line {
		background-color: #cccccc;
		height: 0.2rem;
		margin: 2rem 0;
		width: 100%;
	}
	.question {
		padding: 3rem 0rem;
		cursor: pointer;
	}
	.answer {
		padding: 2rem 0rem;
		p {
			padding: 0.5rem 0rem;
		}
	}
`;

export default Faq;
