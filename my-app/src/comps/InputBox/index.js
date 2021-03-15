import React from "react";
import styled from "styled-components";

const InputBoxDiv = styled.input`
	display: flex;
	align-items: center;
	flex-grow: 1;
	margin-top: 15px;
	min-width: 220px;
	max-width: 414px;
	min-height: 48px;
	padding: 0px 24px;
	color: #979797;
	background: white;
	border: 2px solid #aaaa;
	box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06);
	border-radius: 5px;
	position: relative;
	top: -10px;
`;

const InputBox = ({ placeholder, onChange, type }) => {
	return (
		<InputBoxDiv
			type={type}
			placeholder={placeholder}
			onChange={onChange}
		></InputBoxDiv>
	);
};

InputBox.defaultProps = {
	placeholder: "Placeholder Text",
	type: "text",
};

export default InputBox;
