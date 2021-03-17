import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Button from "comps/Button";

import BottomNav from "comps/NavBar";

import BackHeader from "comps/BackHeader";
import UploadImg from "comps/UploadImage";
import { ListTag } from "stories/ListToggle.stories";
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
	//must do all axios here

	return (
		<div className="createPost">
			<Cont>
				<HeaderCont>
					<BackHeader />
				</HeaderCont>
				<ImgUpload>
					<UploadImg />
				</ImgUpload>
				<ListTag />
				<Input text="Post Location" placeholder="Vancouver" />
				<Input text="Post Description" placeholder="Vancouver" />
				<Ingredients>
					<Input text="Ingredients" placeholder="Ingredient 01" />
					<Input text={null} placeholder="Ingredient 02" />
					<Input text={null} placeholder="Ingredient 03" />
					<Input text={null} placeholder="Ingredient 04" />
					<Input text={null} placeholder="Ingredient 05" />
					<Input text={null} placeholder="Ingredient 06" />
				</Ingredients>
				<Button text="Post" />
				<Spacer />
			</Cont>
			<BottomNavCont>
				<BottomNav active={3} />
			</BottomNavCont>
		</div>
	);
};

export default CreatePost;
