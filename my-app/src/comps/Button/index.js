import React from "react";
import styled from "styled-components";

const ButtonDiv = styled.div`
	min-width: 279px;
	height: 45px;
	border-radius: 10px;

	display: flex;
	justify-content: center;
	align-items: center;

	background: #ff2b51;
	color: #fff;
	box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06);

	&:hover {
		cursor: pointer;
	}
	&:active {
		background: #b6213c;
		color: #fff;
		box-shadow: none;
	}
`;

const Button = ({ bg, text, onClick }) => {
	return (
		<ButtonDiv bg={bg} onClick={onClick}>
			{text}
		</ButtonDiv>
	);
};

Button.defaultProps = {
	bg: "#FF2B51",
	text: "Button",
	onClick: () => {},
};

export default Button;
