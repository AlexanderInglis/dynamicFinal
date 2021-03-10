import React from "react";
import styled from "styled-components";

const SHContainer = styled.div`
	max-width: auto;
	height:auto
	font-weight: ${(props) => (props.fontweight ? props.fontweight : "700")};
	color: ${(props) => (props.color ? props.color : "black")};
	font-size: ${(props) => (props.fontsize ? props.fontsize : "24px")};
	border-top: ${(props) => (props.bordertop ? props.bordertop : "none")};
	padding: 0px 10px;
	display: flex;
	align-text: left;
	word-wrap: break-word;
	span {
		display: inline-flex;
	}
`;

const Subheading = ({ text, fontweight, color, fontsize, bordertop }) => {
	return (
		<SHContainer
			fontweight={fontweight}
			color={color}
			fontsize={fontsize}
			bordertop={bordertop}
		>
			<span>{text}</span>
		</SHContainer>
	);
};

Subheading.defaultProps = {
	text: null,
	fontweight: null,
	color: null,
	fontsize: null,
	bordertop: null,
};

export default Subheading;
