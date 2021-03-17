import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import ProfileFollow from "../../comps/Profilefollow";
import PostList from "../../comps/PostList";
import BottomNav from "comps/NavBar";


const Spacer = styled.div`
	height: 20px;
`;

const BottomNavCont = styled.div`
	position: fixed;
	width: 100%;
	bottom: 0;
`;


const Account = () => {
	//must do all axios here

	return (
		<div className="main">
            <ProfileFollow/>
            <Spacer/>
            <PostList/>           
			<BottomNavCont>
				<BottomNav active={4} />
			</BottomNavCont>
		</div>
	);
};

export default Account;
