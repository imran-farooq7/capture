"use client";
import { StyledAbout } from "@/styles";
import styled from "styled-components";

const Faq = () => {
	return (
		<FAQS>
			<h2>
				Any Question <span>FAQ</span>
			</h2>
			<div className="question">
				<h4>How Do I Start</h4>
				<div className="answer">
					<p>Lorem ipsum dolor sit amet.</p>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
						autem accusamus ex laboriosam porro, adipisci quam voluptatum magnam
						placeat corporis.
					</p>
				</div>
				<div className="faq-line"></div>
			</div>
			<div className="question">
				<h4>Tech Stack</h4>
				<div className="answer">
					<p>Lorem ipsum dolor sit amet.</p>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error,
						totam.
					</p>
				</div>
				<div className="faq-line"></div>
			</div>
			<div className="question">
				<h4>Diferrent Payment Methods</h4>
				<div className="answer">
					<p>Lorem ipsum dolor sit amet.</p>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error,
						totam.
					</p>
				</div>
				<div className="faq-line"></div>
			</div>
			<div className="question">
				<h4>What Products do you offer.</h4>
				<div className="answer">
					<p>Lorem ipsum dolor sit amet.</p>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error,
						totam.
					</p>
				</div>
				<div className="faq-line"></div>
			</div>
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
