import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import ProfileFollow from "../../comps/Profilefollow";
import PostList from "../../comps/PostList";
import BottomNav from "comps/NavBar";

const Spacer = styled.div`
	height: 30px;
`;

const BottomNavCont = styled.div`
	position: fixed;
	width: 100%;
	bottom: 0;
	left: 0;
`;

const Account = () => {
	//must do all axios here
	const [userId, setId] = useState("");
	const [user, setUser] = useState();

	const Verify = async () => {
		var resp = await axios.get("http://localhost:8080/api/verify");
		console.log("verify", resp.data);
		setId(resp.data.id);
	};

	const GetUser = async () => {
		var resp = await axios.get(
			`http://localhost:8080/api/single_user/${userId}`
		);
		console.log(resp.data);
		setUser(resp.data.users);
		console.log(user[0]);
	};

	useEffect(() => {
		Verify();
		GetUser();
	}, []);

	return (
		<div className="searching">
			<ProfileFollow profileName={user[0].username} />
			<Spacer />
			<PostList />
			<BottomNavCont>
				<BottomNav active={4} />
			</BottomNavCont>
		</div>
	);
};

export default Account;
