import React from "react";
import styled from "styled-components";
import Avatar from "../../comps/Avatar";
import Subheading from "../../comps/Subheading";

const Taskboxcontainer = styled.div`
	max-width: 334px;
	min-height: 43px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	position: relative;
`;

const Headerpart = styled.div`
	margin-left: auto;
	margin-right: auto;
	width: 100%;
	padding: 10px;
`;

const Closeimg = styled.a`
	justify-content: center;
	align-items: center;
	flex-direction: column;
	position: absolute;
	display: flex;
	left: 20px;
`;

const CommentBox = styled.div`
	max-width: 335px;
	min-height: 45px;
	margin-top: 3px;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding-top: 20px;
`;

const Checkimg = styled.a`
	margin-left: 30px;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	position: absolute;
	display: flex;
	margin-right: 5px;
	padding-right: 5px;
`;

const fakedb = [
	{
		id: 1,
		username: "John Doe",
		comment:
			"lorem ipsum dolor sit amet. volutpat magna vel massa scelerisque vulputate. Etiam vitae vehicula elit, ipsum dolor sit amet.",
		profileImg:
			"https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
	},
];

const Comments = ({ comment }) => {
	return (
		<Taskboxcontainer>
			{comment.map((o) => (
				<Headerpart>
					<Closeimg>
						<Avatar bgimg={o.profileImg} width="25px" height="25px" />
					</Closeimg>
					<Checkimg>
						<Subheading text={o.username} fontsize="18px" fontweight="bold" />
					</Checkimg>
					<CommentBox>
						<Subheading
							text={o.comment_text}
							fontsize="15px"
							fontweight="light"
						/>
					</CommentBox>
				</Headerpart>
			))}
		</Taskboxcontainer>
	);
};

Comments.defaultProps = {
	comment: fakedb,
};

export default Comments;
