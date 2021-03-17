import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Button from "comps/Button";
import Logo from "../landing/CravingsLogo.png";
import Userpost from "comps/Userpost";
import BottomNav from "comps/NavBar";
import Ingredientslist from "comps/Ingredientslist";
import Comments from "comps/Comments";
import CommentInput from "comps/CommentInput";

const Spacer = styled.div`
	height: 200px;
`;

const CmntCont = styled.div``;

const IngCont = styled.div`
	margin-top: -15%;
`;

const H3 = styled.h3`
	padding-left: 10px;
`;

const BottomNavCont = styled.div`
	position: fixed;
	width: 100%;
	bottom: 0;
	left: 0;
`;

const Post = () => {
	//must do all axios here

	return (
		<div className="post">
			<Userpost />
			<IngCont>
				<Ingredientslist />
			</IngCont>

			<CmntCont>
				<H3>Comments</H3>
				<Comments />
				<Comments />
				<Spacer />
			</CmntCont>

			<BottomNavCont>
				<CommentInput />
				<BottomNav active={1} />
			</BottomNavCont>
		</div>
	);
};

export default Post;
