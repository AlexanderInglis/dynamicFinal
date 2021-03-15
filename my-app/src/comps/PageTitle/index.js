import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
	font-family: Lato;
	font-style: normal;
	font-weight: 900;
	font-size: 48px;
	line-height: 53px;
	color: #ff2b51;
`;

const PageTitle = ({ title }) => {
	return (
		<div>
			<Heading>{title}</Heading>
		</div>
	);
};

PageTitle.defaultProps = {
	title: "Welcome Back to Cravings!",
};

export default PageTitle;
