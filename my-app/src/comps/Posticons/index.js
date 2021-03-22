import React, { useEffect, useState } from "react";
import Subheading from "../../comps/Subheading";
import Avatar from "../../comps/Avatar";
import styled from "styled-components";
import Like from "../LikeButton";
import Comment from "../Posticons/chat.png";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const Headerpart = styled.div`
	max-width: 375px;
	display: flex;
	align-self: normal;
	justify-content: space-between;
	padding: 0px 10px;
`;

const Closeimg = styled.div`
	margin-right: 10px;
	display: flex;
`;

const Checkimg = styled.div`
	margin-left: 10px;
	display: flex;
`;

const Titlepart = styled.div`
	display: flex;
	padding: 5px;
`;

const ChatIcon = styled.img`
	width: 20px;
	padding-right: 5px;
`;
const Profilename = styled.div`
	display: flex;
`;

const Profilepicture = styled.div`
	margin-right: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Profile = styled.div`
	padding: 5px;
	font-weight: 800;
`;

const RightCont = styled.div`
	display: flex;
	align-items: center;
`;
const LeftCont = styled.div`
	display: flex;
	align-items: center;
`;

const Posticons = ({ profileName, avatarImg, postId }) => {
	const history = useHistory();
	const params = useParams();

	return (
		<Headerpart>
			<LeftCont onClick={() => history.push("/Account")}>
				<Avatar width="25px" height="25px" bgimg={avatarImg} />
				<Profile>{profileName}</Profile>
			</LeftCont>

			<RightCont>
				<a onClick={() => history.push("/post/" + postId)}>Learn Recipe</a>
				<Titlepart>
					<Like />
				</Titlepart>
				<Checkimg>
					<ChatIcon
						onClick={() => history.push("/post/" + postId)}
						src={Comment}
					/>
				</Checkimg>
			</RightCont>
		</Headerpart>
	);
};

Posticons.defaultProps = {
	profileName: "Placeholder",
	avatarImg:
		"https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=644&q=80",
};

export default Posticons;
