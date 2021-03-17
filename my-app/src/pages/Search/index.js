import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import SearchBar from "../../comps/SearchBar";
import ListToggle from "../../comps/ListToggle";
import PostList from "../../comps/PostList";
import BottomNav from "comps/NavBar";


const BottomNavCont = styled.div`
	position: fixed;
	width: 100%;
	bottom: 0;
`;


const Search = () => {
	//must do all axios here

	return (
		<div className="search">
            <div className="Searchbar">
            <SearchBar/>
            </div>
            <div className="TagTitle">
            <p>What's Trending</p>
            </div>
            <div className="tagselection">
            <ListToggle/>
            </div>
            <PostList/>
			<BottomNavCont>
				<BottomNav active={2} />
			</BottomNavCont>
		</div>
	);
};

export default Search;
