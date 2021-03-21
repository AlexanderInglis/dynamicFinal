import React, { useEffect, useState } from "react";
import Avatar from "../../comps/Avatar";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import img from "../Headerprofile/more.png";

const Taskboxcontainer = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Headerpart = styled.div`
	width: auto;
	padding-left: 20px;
	padding-right: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: px;
`;

const Closeimg = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 15px;
`;

const Checkimg = styled.div`
	margin-left: 40px;
	margin-bottom: 90px;
`;

const Titlepart = styled.div`
	margin-right: 20px;
`;

const Description = styled.div`
	font-style: medium;
	font-weight: medium;
	font-size: 30px;
`;

const HeaderName = styled.div`
max-width: auto;
height:auto
font-weight: ${(props) => (props.fontweight ? props.fontweight : "700")};
color: ${(props) => (props.color ? props.color : "black")};
font-size: ${(props) => (props.fontsize ? props.fontsize : "24px")};
border-top: ${(props) => (props.bordertop ? props.bordertop : "none")};
padding: 0px 10px;
display: flex;
align-text: left;
span {
  display: inline-flex;
}
`;

const Location = styled.div`
max-width: auto;
height:auto
font-weight: ${(props) => (props.fontweight ? props.fontweight : "700")};
color: ${(props) => (props.color ? props.color : "black")};
font-size: ${(props) => (props.fontsize ? props.fontsize : "24px")};
border-top: ${(props) => (props.bordertop ? props.bordertop : "none")};
padding: 0px 10px;
display: flex;
align-text: left;
span {
  display: inline-flex;
}
`;

const TaskHeader = ({ profileName, LocationText, avatarImg }) => {
	const history = useHistory();

	return (
		<Taskboxcontainer>
			<Headerpart>
				<Closeimg>
					<Avatar width="75px" height="75px" bgimg={avatarImg} />
				</Closeimg>
				<Titlepart>
					<HeaderName fontsize="18px" fontweight="light">
						{profileName}
					</HeaderName>
					<Description>
						<Location fontsize="10px" fontweight="light">
							{LocationText}
						</Location>
					</Description>
				</Titlepart>
				<Checkimg onClick={() => history.push("/AccountSetting")}>
					<img src={img} />
				</Checkimg>
			</Headerpart>
		</Taskboxcontainer>
	);
};

TaskHeader.defaultProps = {
	profileName: "Placeholder",
	LocationText: "Vancouver BC, Canada",
	avatarImg:
		"https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=644&q=80",
};

export default TaskHeader;
