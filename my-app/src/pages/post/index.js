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
import { useParams } from "react-router-dom";

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
	const [allComments, setAllComments] = useState([]);
	const [singlePost, setSinglePost] = useState([]);
	const params = useParams();
	console.log(params.id);

	const GetAllComments = async () => {
		const resp = await axios.get(
			"http://localhost:8080/api/comment/" + params.id
		);
		setAllComments([...resp.data.comments]);
		console.log(resp.data);
	};

	const GetSinglePosts = async () => {
		const resp = await axios.get("http://localhost:8080/api/post/" + params.id);
		setSinglePost([...resp.data.post]);
		console.log(resp.data);
	};

	const HandleComment = async (comment) => {
		console.log(comment);
		const resp = await axios.post(
			"http://localhost:8080/api/comment/" + params.id,
			{ comment_text: comment }
		);
		console.log(resp.data);
		GetAllComments();
	};

	useEffect(() => {
		GetAllComments();
		GetSinglePosts();
	}, []);

	return (
		<div className="post">
			<Userpost post={singlePost} />
			<IngCont>
				<Ingredientslist />
			</IngCont>

			<CmntCont>
				<H3>Comments</H3>

				<Comments comment={allComments} />
				<Spacer />
			</CmntCont>

			<BottomNavCont>
				<CommentInput onSend={HandleComment} />
				<BottomNav active={1} />
			</BottomNavCont>
		</div>
	);
};

export default Post;
