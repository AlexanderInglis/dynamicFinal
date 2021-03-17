import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import BackHeader from "comps/BackHeader";
import Input from "../../comps/Input";
import Button from "comps/Button";
import PageTitle from "../../comps/PageTitle";


const Spacer = styled.div`
	height: 40px;
`;

const Spacer2 = styled.div`
	height: 30px;
`;

const Login = () => {
	//must do all axios here

	return (
		<div className="Login">
            <BackHeader/>
            <div className="titlestyle">
            <Spacer2/>
            <PageTitle title="Welcome Back to Cravings! "/>
            </div>
            <Spacer/>
            <div className="Inputs">
            <Input placeholder="Email"  text={"Email"}/>
            <Spacer2/>
            <Input placeholder="Password"  text={"Password"}/>
            <div className="passwordlink"><p>Forgot your password?</p></div>
            </div>
            <Button text="Login" />
		</div>
	);
};

export default Login;
