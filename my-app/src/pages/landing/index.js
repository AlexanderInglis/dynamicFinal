import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Button from "comps/Button";
import Logo from "../landing/CravingsLogo.png";

const CravingsLogo = styled.img`
	min-height: 308px;
	max-width: 268px;
`;

const LogoCont = styled.div`
	height: 150px;
	width: 100%;
	justify-content: space-around;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	text-align: center;
	align-items: center;
	padding-top: 150px;
`;

const BtnCont = styled.div`
	height: 150px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding-bottom: 100px;
`;

const Landing = () => {
	//must do all axios here

	return (
		<div className="landing">
			<LogoCont>
				<CravingsLogo src={Logo}></CravingsLogo>
				<p>Learn Some Delicious Recipies</p>
			</LogoCont>

			<BtnCont>
				<Button text="Login" />
				<Button text="Sign up" />
			</BtnCont>
		</div>
	);
};

export default Landing;
