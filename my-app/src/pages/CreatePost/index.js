import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Button from "comps/Button";
import BottomNav from "comps/NavBar";
import BackHeader from "comps/BackHeader";
import UploadImg from "comps/UploadImage";
import Tag from "comps/ListToggle";
import Input from "comps/Input";

const Spacer = styled.div`
	height: 100px;
`;

const HeaderCont = styled.div`
	margin-top: 5%;
	padding: 10px;
`;

const ImgUpload = styled.div`
	position: relative;
	display: flex;
	place-content: center;
`;

const Cont = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	place-content: center;
	padding: 10px;
	justify-content: space-around;
	display: flex;
	flex-direction: column;
	min-height: 120%;
`;

const FormPost = styled.form``;

const Ingredients = styled.div`

    justify-content;
	height: 300px;
    justify-content: space-around;
    display: flex;
    flex-direction: column;
    padding-bottom:10%;

`;

const BottomNavCont = styled.div`
	position: fixed;
	width: 100%;
	bottom: 0;
	left: 0;
`;

const CreatePost = () => {
	const [location, setLocation] = useState("");
	const [description, setDesc] = useState("");
	const [tag, setTag] = useState("");
	const [img, setImg] = useState("");
	const [ingredient, setIn] = useState("");
	//must do all axios here

	const HandlePost = async (event) => {
		event.preventDefault();

		const data = new FormData();
		data.append("image", img);
		data.append("description", description);
		data.append("tag", tag);
		data.append("location", location);
		data.append("ingredient", ingredient);

		let resp = await axios.post("http://localhost:8080/api/post", data);
		console.log(resp.data);
	};

	return (
		<div className="createPost">
			<Cont>
				<HeaderCont>
					<BackHeader />
				</HeaderCont>
				<form onSubmit={HandlePost}>
					<ImgUpload>
						<UploadImg />
					</ImgUpload>
					<input
						id="file-input"
						type="file"
						accept="image/*"
						filename={img}
						onChange={(e) => setImg(e.target.files[0])}
					></input>
					<Input placeholder="Gay" onChange={(e) => setTag(e.target.value)} />
					{/* <Tag onSelect={setTag()} /> */}
					<Input
						text="Post Location"
						placeholder="Vancouver"
						onChange={(e) => setLocation(e.target.value)}
					/>
					<Input
						text="Post Description"
						placeholder="Vancouver"
						onChange={(e) => setDesc(e.target.value)}
					/>
					<textarea onChange={(e) => setIn(e.target.value)}></textarea>
					{/* <Ingredients>
						<Input text="Ingredients" placeholder="Ingredient 01" />
						<Input text={null} placeholder="Ingredient 02" />
						<Input text={null} placeholder="Ingredient 03" />
						<Input text={null} placeholder="Ingredient 04" />
						<Input text={null} placeholder="Ingredient 05" />
						<Input text={null} placeholder="Ingredient 06" />
					</Ingredients> */}
					<button type="submit">HAHA GAY</button>
					{/* <Button text="Post" type="submit" /> */}
					<Spacer />
				</form>
			</Cont>
			<BottomNavCont>
				<BottomNav active={3} />
			</BottomNavCont>
		</div>
	);
};

export default CreatePost;
