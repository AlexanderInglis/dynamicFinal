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




const fakedb = [
	{
		id: 1,
		username: "John Doe",
		Location: "Vancouver BC, Canada",
		profileImg:
			"https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=944&q=80",
		NumPosts: 16,
		NumLikes: 31,
	},
];

const Profilefollow = ({ profileaccount, profileName, profilePic }) => {
	return (
		<Container>
			{profileaccount.map((o) => {
				return (
					<Logboxcontainer>
						<Headerpart>
							<TaskHeader
								profileName={profileName}
								LocationText={o.Location}
								avatarImg={profilePic}
							/>
						</Headerpart>
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
