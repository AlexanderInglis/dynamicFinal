import React from "react";
import styled from "styled-components";
import image from "../SearchBar/searchIcon.png";

const SearchDiv = styled.div`
	min-width: 220px;
	max-width: 414px;
	min-height: 48px;
	display: flex;
	border: 2px solid #aaaa;
	align-items: center;
	border-radius: 5px;
	background-color: white;
	box-shadow: 0px 16px 24px 0px rgba(0, 0, 0, 0.06);
	padding-left: 20px;
	box-sizing: border-box;
	img {
		margin-right: 20px;
	}
`;

const SearchInput = styled.input`
	min-width: 220px;
	max-width: 414px;
	min-height: 48px;
	overflow: hidden;
	background-color: white;
	border: 0px;
	outline: none;
	color: #39a6dc;
	display: flex;
	border-radius: 10px;
	color: #979797;
	::placeholder {
		color: #979797;
	}
`;

const Icon = styled.img``;
const Button = styled.a``;

const SearchBar = ({ placeholder }) => {
	return (
		<SearchDiv>
			<Button>
				<Icon src={image}></Icon>
			</Button>
			<SearchInput placeholder={placeholder}></SearchInput>
		</SearchDiv>
	);
};

SearchBar.defaultProps = {
	placeholder: "Search Trending",
};

export default SearchBar;
