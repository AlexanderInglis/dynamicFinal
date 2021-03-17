import React from "react";
import styled, { css } from "styled-components";

import SendIconImage from "../CommentInput/sendIcon.png";

const InputBox = styled.div`
	max-width: 375px;
	min-height: 123px;
	display: flex;
	flex-direction: column;
	background: white;
	background: linear-gradient(
		180deg,
		rgba(255, 255, 255, 0) 0%,
		rgba(255, 255, 255, 0.9) 30.56%
	);

	display: flex;
	overflow: hidden;
	justify-content: center;
	align-items: center;
`;

const InputCont = styled.input`
	min-height: 48px;
	min-width: 235px;
	margin-top: 4px;
	color: #676767;
	border-width: 0px;
	border: none;
`;

const InputContainer = styled.div`
	min-height: 48px;
	min-width: 335px;
	margin-top: 4px;
	border-radius: 4px;
	color: #676767;
	background: white;
	::placeholder {
		color: #c4c4c4;
	}
	border: solid 1px #ddd9d9;
`;

const SendIcon = styled.img`
	float: right;
	padding-top: 5%;
	padding-right: 5%;
`;

const Button = styled.a``;

const CommentInput = ({ placeholder, text, value, onChange, iconsrc }) => {
	return (
		<InputBox>
			<InputContainer>
				<InputCont
					defaultValue={value}
					placeholder={placeholder}
					onChange={onChange}
				/>
				<Button>
					<SendIcon src={iconsrc}></SendIcon>
				</Button>
			</InputContainer>
		</InputBox>
	);
};

CommentInput.defaultProps = {
	placeholder: "Add a comment",
	iconsrc: SendIconImage,
	value: "",
};

export default CommentInput;
