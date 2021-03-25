import React from "react";
import styled from "styled-components";

const Container = styled.div`
	max-width: 375px;
	max-height: 500px;
`;

const AvatarContainer = styled.div`
	display: inline-flex;
	width: ${(props) => (props.width ? props.width : "120px")};
	height: ${(props) => (props.height ? props.height : "120px")};
	margin-top: -3px;
`;

const AvatarImg = styled.img`
	width: 100%;
	height: 100%;
	background-size: cover;
	border-radius: 100px;
	object-fit: cover;
`;

const fakedb = [
	{
		id: 1,
		img:
			"https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
	},
];

const Avatar = ({ profileimg, width, height, avatarImg }) => {
	return (
		<Container>
			{profileimg.map((o) => {
				return (
					<AvatarContainer width={width} height={height}>
						<AvatarImg src={avatarImg}></AvatarImg>
					</AvatarContainer>
				);
			})}
		</Container>
	);
};

Avatar.defaultProps = {
	profileimg: fakedb,
};

export default Avatar;
