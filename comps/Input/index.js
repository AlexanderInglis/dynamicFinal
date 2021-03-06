import React from "react";
import styled from "styled-components";

import InputBox from "../InputBox";

const InputDiv = styled.div`
	display: flex;
	flex-direction: column;
	color: #175fa4;
`;

const BoxTitle = styled.h2`
	font-family: Lato;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 22px;
	display: flex;
	align-items: center;
	color: #000000;
`;

const Input = ({ title, placeholder, onChange, type }) => {
	return (
		<InputDiv>
			<BoxTitle>{title}</BoxTitle>
			<InputBox type={type} placeholder={placeholder} onChange={onChange} />
		</InputDiv>
	);
};

Input.defaultProps = {
	title: "Title",
	placeholder: "Placeholder Text",
	type: "text",
};

export default Input;
