import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Button from "comps/Button";
import Logo from "../landing/CravingsLogo.png";
import Userpost from "comps/Userpost";
import BottomNav from "comps/NavBar";

const CravingsLogo = styled.img``;

const Spacer = styled.div`
	height: 100px;
`;

const BottomNavCont = styled.div`
	position: fixed;
	width: 100%;
	bottom: 0;
`;

const Main = () => {
	//must do all axios here

	return (
		<div className="main">
			<Userpost />
			<Userpost />
			<Userpost />
			<Spacer />
			<BottomNavCont>
				<BottomNav active={1} />
			</BottomNavCont>
		</div>
	);
};

export default Main;
