import styled from "styled-components";

export const CardStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	padding: 20px;
	margin: 10px;
	transition: all 0.3s ease;
	&:hover {
			box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
			transform: translateY(-5px);
	}
`