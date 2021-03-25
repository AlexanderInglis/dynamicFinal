import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Button from "comps/Button";
import Logo from "../landing/CravingsLogo.png";
import Userpost from "comps/Userpost";
import BottomNav from "comps/NavBar";

const Spacer = styled.div`
	height: 100px;
`;

const BottomNavCont = styled.div`
	position: fixed;
	width: 100%;
	bottom: 0;
	left: 0;
`;

const Main = () => {
	const history = useHistory();
	const CheckStorage = async () => {
		var resp = await axios.get("http://localhost:8080/api/verify");
		console.log(resp.data);
		if (
			resp.data !== "no token sent to server" &&
			resp.data !== "Invalid Token"
		) {
			history.push("/main");
			console.log("Good token");
		} else {
			history.push("/login");
			console.log("Bad token");
		}
	};

	const [allPost, setAllPost] = useState([]);

	const GetAllPosts = async () => {
		const resp = await axios.get("http://localhost:8080/api/post");
		setAllPost(...[resp.data.posts]);
		console.log(resp.data);
	};

	useEffect(() => {
		CheckStorage();
		GetAllPosts();
	}, []);

	return (
		<div className="main">
			<Userpost profilePic={allPost} post={allPost} />

			<Spacer />
			<BottomNavCont>
				<BottomNav active={1} />
			</BottomNavCont>
		</div>
	);
};

export default Main;
