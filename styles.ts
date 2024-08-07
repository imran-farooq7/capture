import styled from "styled-components";
export const StyledAbout = styled.div`
	min-height: 90vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5rem 10rem;
	color: white;
`;
export const Description = styled.div`
	flex: 1;
	padding-right: 5rem;
	h2 {
		font-weight: lighter;
	}
`;
export const StyledImage = styled.div`
	flex: 1;
	overflow: hidden;
	img {
		object-fit: cover;
		width: 100%;
	}
`;
export const Hide = styled.div`
	overflow: hidden;
`;
