import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import BackHeader from "comps/BackHeader";
import Avatar from "../../comps/Avatar";
import InputBox from "../../comps/InputBox";
import Button from "comps/Button";
import BottomNav from "comps/NavBar";

const Spacer = styled.div`
	height: 15px;
`;

const BigSpacer = styled.div`
	height: 100px;
`;

const BottomNavCont = styled.div`
	position: fixed;
	width: 100%;
	bottom: 0;
	left: 0;
`;

const AccountSetting = () => {
	//must do all axios here
	const history = useHistory();
	return (
		<div className="Setting">
			<div className="SettingContent">
				<BackHeader />
				<div className="avatarpic">
					<Avatar />
				</div>
				<div className="ProfileChange">
					<p>Change profile Pic</p>
				</div>
				<Spacer />
				<InputBox placeholder="User Name" />
				<InputBox placeholder="Email" />
				<InputBox placeholder="Phone Number" />
				<InputBox placeholder="Country" />
				<InputBox placeholder="Old Password" />
				<InputBox placeholder="New Password" />
				<Spacer />
				<Button text="Save" />
				<br />
				<Button
					onClick={() => {
						sessionStorage.clear();
						axios.defaults.headers.common["Authorization"] = null;
						history.push("/");
					}}
					text="Logout"
				/>
				<BigSpacer />
			</div>
			<BottomNavCont>
				<BottomNav active={4} />
			</BottomNavCont>
		</div>
	);
};

export default AccountSetting;
