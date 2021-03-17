import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import BackHeader from "comps/BackHeader";
import Input from "../../comps/Input";
import Button from "comps/Button";
import PageTitle from "../../comps/PageTitle";


const Spacer = styled.div`
	height: 20px;
`;

const Spacer2 = styled.div`
	height: 40px;
`;

const Signup = () => {
	//must do all axios here

	return (
		<div className="Signup">
            <BackHeader/>
            <PageTitle title="Sign Up"/>
            <Spacer2/>
            <div className="contentSignup">
            <Input placeholder="First Name" text={"First lets get your name."}/>
            <Spacer/>
            <Input placeholder="Last Name" text={""}/>
            <Spacer/>
            <Input placeholder="+1 Phone"  text={"Phone Number"}/>
            <Spacer/>
            <Input placeholder="Email"  text={"Email"}/>
            <Spacer/>
            <Input placeholder="Password"  text={"Password"}/>
            <Spacer/>
            <Input placeholder="Re-enter password"  text={""}/>
            </div>
            <Spacer/>
            <Button text="Create Account" />
		</div>
	);
};

export default Signup;
