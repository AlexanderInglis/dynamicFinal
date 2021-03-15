import React from "react";
import styled from "styled-components";
import Posticons from "../../comps/Posticons";

const Taskboxcontainer = styled.div`
	max-width: 375px;
	min-height: 460px;
	display: flex;
	align-items: center;
	flex-direction: column;
	overflow: hidden;
`;

const Headerpart = styled.div`
	margin-left: auto;
	margin-right: auto;
	width: 100%;
`;

const CommentBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding-top: 10px;
`;

const Checkimg = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	max-width: 378px;
	max-height: 291px;
	overflow: hidden;
`;

const Comment = styled.div`
	display: flex;
	padding: 0px 10px;
	flex-direction: column;
	margin-left: auto;
	margin-right: auto;
	width: auto;
	padding-bottom: 50px;
`;

const Img = styled.img`
	width: 378px;
`;

const fakedb = [
	{
		id: 1,
		username: "John Doe",
		description:
			"lorem ipsum dolor sit amet. volutpat magna vel massa scelerisque vulputate. Etiam vitae vehicula elit, ipsum dolor sit amet.",
		profileImg:
			"https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
		img:
			"https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=953&q=80",
	},
];

const Userpost = ({ post }) => {
	return (
		<Taskboxcontainer>
			{post.map((o) => (
				<Headerpart>
					<Checkimg>
						<Img src={o.img} />
					</Checkimg>
					<CommentBox>
						<Posticons profileName={o.username} avatarImg={o.profileImg} />
					</CommentBox>
					<Comment>{o.description}</Comment>
				</Headerpart>
			))}
		</Taskboxcontainer>
	);
};

Userpost.defaultProps = {
	post: fakedb,
};

export default Userpost;
