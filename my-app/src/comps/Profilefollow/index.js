import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Followbutton from "../Followbutton";
import TaskHeader from "../Headerprofile";
import Subheading from "../Subheading";

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Logboxcontainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Headerpart = styled.div`
	width: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Logincontainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: #fff;
	border-radius: 10px;
	margin-top: 10px;
`;

const Firstresult = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Secondresult = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Thirdresult = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Bottompart = styled.div`
	width: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Postsresult = styled.div`
padding-right: 60px;
`;

const Followersresult = styled.div`
`;

const Likesresult = styled.div`
padding-left: 60px;
`;

const fakedb = [
	{
		id: 1,
		username: "John Doe",
		Location: "Vancouver BC, Canada",
		profileImg:
			"https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
		NumPosts: 16,
		NumLikes: 31,
	},
];

const Profilefollow = ({ profileaccount, profileName }) => {
	return (
		<Container>
			{profileaccount.map((o) => {
				return (
					<Logboxcontainer>
						<Headerpart>
							<TaskHeader
								profileName={profileName}
								LocationText={o.Location}
								avatarImg={o.profileImg}
							/>
						</Headerpart>
						<Bottompart>
							<Postsresult>
								<Firstresult>{o.NumPosts}</Firstresult>
								<Subheading text="Posts" fontsize="12px" fontweight="light" />
							</Postsresult>
							<Likesresult>
								<Thirdresult>{o.NumLikes}</Thirdresult>
								<Subheading text="Likes" fontsize="12px" fontweight="light" />
							</Likesresult>
						</Bottompart>
					</Logboxcontainer>
				);
			})}
		</Container>
	);
};

Profilefollow.defaultProps = {
	profileaccount: fakedb,
	profileName: "test",
};

export default Profilefollow;
