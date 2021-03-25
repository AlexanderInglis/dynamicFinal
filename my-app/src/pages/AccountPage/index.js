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

const Spacer2 = styled.div`
	height: 10px;
`;

const BottomNavCont = styled.div`
	position: fixed;
	width: 100%;
	bottom: 0;
	left: 0;
`;

const Account = () => {
	const [user, setUser] = useState({});
	const [myPosts, setMyPosts] = useState([]);

	const GetPosts = async () => {
		var resp = await axios.get(`http://localhost:8080/api/myPosts`);
		console.log(resp.data);
		setMyPosts(resp.data.posts);
	};

	const GetUser = async () => {
		var resp = await axios.get(`http://localhost:8080/api/myUser`);
		console.log(resp.data);
		setUser(resp.data.user[0]);
	};

	useEffect(() => {
		GetUser();
		GetPosts();
	}, []);

	console.log(user);
	return (
		<div className="searching">
			<ProfileFollow
				profilePic={user.profile_photo_url}
				profileName={user.username}
			/>
			<Spacer />
			<PostList PostImg={myPosts} />
		
			<BottomNavCont>
				<BottomNav active={4} />
			</BottomNavCont>
		</div>
	);
};

export default Account;
