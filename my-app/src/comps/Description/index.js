import React from "react";
import styled from "styled-components";
import Subheading from "../../comps/Subheading";

const Taskboxcontainer = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Headerpart = styled.div`
	margin-left: auto;
	margin-right: auto;
	width: 375px;
`;

const CommentBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: auto;
`;

const Checkimg = styled.div`
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding-bottom: 10px;
`;

const Description = ({ title, comment }) => {
	return (
		<Taskboxcontainer>
			<Headerpart>
				<Checkimg>
					<Subheading text={title} fontsize="18px" fontweight="bold" />
				</Checkimg>
				<CommentBox>
					<Subheading text={comment} fontsize="15px" fontweight="light" />
				</CommentBox>
			</Headerpart>
		</Taskboxcontainer>
	);
};

Description.defaultProps = {
	title: null,
	comment:
		"ipsum dolor sit amet. volutpat magna vel massa scelerisque vulputate. Etiam vitae vehicula elit, ipsum dolor sit amet.",
};

export default Description;
