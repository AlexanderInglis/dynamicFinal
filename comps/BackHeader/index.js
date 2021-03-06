import React from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";

import img from "../BackHeader/back.svg";

const HeaderDiv = styled.div`
	display: flex;
	align-items: center;
	max-width: 414px;
`;

const Back = styled.img`
	width: 21.5px;
	&:hover {
		cursor: pointer;
	}
	&:active {
		opacity: 0.5;
	}
`;

const Space = styled.div`
	flex-grow: 1;
`;

const Options = styled.img`
	display: ${(props) => (props.options ? props.options : "block")};
	width: 30px;
	&:hover {
		cursor: pointer;
	}
	&:active {
		opacity: 0.5;
	}
`;

const BackHeader = ({ options }) => {
	let history = useHistory();
	return (
		<HeaderDiv>
			<Back onClick={() => history.goBack()} src={img}></Back>
			<Space></Space>
			{/* <Options src={"/options.svg"} options={options}></Options> */}
		</HeaderDiv>
	);
};

BackHeader.defaultProps = {
	options: "block",
};

export default BackHeader;
