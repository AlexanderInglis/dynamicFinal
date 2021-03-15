import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Button from "comps/Button";

const BtnCont = styled.div`
	height: 150px;
	justify-content: space-around;
`;

const Landing = () => {
	//must do all axios here

	return (
		<div className="landing">
			<BtnCont>
				<Button text="Login" />
				<Button text="Sign up" />
			</BtnCont>
		</div>
	);
};

export default Landing;
