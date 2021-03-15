import React from "react";
import styled, { css } from "styled-components";

const SendIconImage = require("./sendIcon.png");

const InputBox = styled.div`
	max-width: 375px;
	min-height: 123px;
	display: flex;
	flex-direction: column;
	background: white;
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
	display: flex;
	overflow: hidden;
`;

const InputCont = styled.input`
  min-height: 48px;
  max-width: 335px;
  margin-top: 4px;
  color: #676767;
  border-width:0px;
  border:none;
  padding-left:10px;
  ::placeholder{
      color: #AAAAAA
    font-size:20px;};
    background: white;
    outline none;
`;

const InputContainer = styled.div`
	min-height: 48px;
	max-width: 335px;
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
