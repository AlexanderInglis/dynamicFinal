import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./navBar.css";

// const NavBar = styled.div``;
import { Link } from "react-router-dom";

// Routing

const NavBar = styled.div`
	margin: 0px;
	padding: 0px;
	max-width: 414px;
	min-height: 76px;
	box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
	display: flex;

	justify-content: space-around;

	div {
		text-align: center;
		align-items: center;
		background-color: white;
		justify-content: center;
		user-select: none;
	}
	p {
		margin: 0;
		padding-top: 05px;
	}
	background-color: white;
`;

const Explore = styled.div`
	padding-top: 3%;
	height: auto;
	width: 100%;
	border-top: 2px solid ${(props) => props.exploreActive};
	color: ${(props) => props.exploreActive};
	cursor: pointer;
`;

const Search = styled.div`
	padding-top: 3%;
	height: auto;
	width: 100%;
	border-top: 2px solid ${(props) => props.SearchActive};
	border-opacity: 0.7;
	color: ${(props) => props.SearchActive};
	cursor: pointer;
`;

const PostDiv = styled.div`
	padding-top: 3%;
	height: auto;
	width: 100%;
	border-top: 2px solid ${(props) => props.postActive};
	color: ${(props) => props.postActive};
	cursor: pointer;
`;

const Profile = styled.div`
	padding-top: 3%;
	height: auto;
	width: 100%;
	border-top: 2px solid ${(props) => props.settingsActive};
	color: ${(props) => props.settingsActive};
	cursor: pointer;
`;

const BottomNav = ({ active }) => {
	const [exploreActiveValue, changeExploreActive] = useState(1);

	useEffect(() => {
		changeExploreActive(active);
	}, [active]);
	//dw it's mostly svg
	//when a user clicks on an icon it defines "changeExploreActive" to 1-5
	//Depending on the value of exploreActiveValue the svg changes color

	return (
		<div>
			<NavBar>
				<Explore
					onClick={() => {
						changeExploreActive(1);
					}}
					exploreActive={exploreActiveValue === 1 ? "#FF2B51" : "black"}
				>
					<div>
						<svg
							id="exploreIcon"
							width="23"
							height="23"
							viewBox="0 0 23 23"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M1 3.6C1 2.16406 2.16406 1 3.6 1H18.6766C20.1126 1 21.2766 2.16406 21.2766 3.6V18.6766C21.2766 20.1125 20.1126 21.2766 18.6766 21.2766H3.6C2.16406 21.2766 1 20.1125 1 18.6766V3.6Z"
								stroke={exploreActiveValue === 1 ? "#FF2B51" : "black"}
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M1 7.75885H21.2766"
								stroke={exploreActiveValue === 1 ? "#FF2B51" : "black"}
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M7.75879 21.2766V7.75885"
								stroke={exploreActiveValue === 1 ? "#FF2B51" : "black"}
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
					<div>
						<p>Home</p>
					</div>
				</Explore>

				<Search
					onClick={() => {
						changeExploreActive(2);
					}}
					SearchActive={exploreActiveValue === 2 ? "#FF2B51" : "#201823"}
				>
					<svg
						width="22"
						height="22"
						viewBox="0 0 22 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M9.88889 18.7778C14.7981 18.7778 18.7778 14.7981 18.7778 9.88889C18.7778 4.97969 14.7981 1 9.88889 1C4.97969 1 1 4.97969 1 9.88889C1 14.7981 4.97969 18.7778 9.88889 18.7778Z"
							stroke={exploreActiveValue === 2 ? "#FF2B51" : "black"}
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>

						<path
							d="M21 21.0001L16.1666 16.1667"
							stroke={exploreActiveValue === 2 ? "#FF2B51" : "black"}
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					<div>
						<p>Search</p>
					</div>
				</Search>

				<PostDiv
					onClick={() => {
						changeExploreActive(3);
					}}
					postActive={exploreActiveValue === 3 ? "#FF2B51" : "#201823"}
				>
					<svg
						id="postIcon"
						width="23"
						height="23"
						viewBox="0 0 23 23"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M22.875 13.125H13.125V22.875H9.875V13.125H0.125V9.875H9.875V0.125H13.125V9.875H22.875V13.125Z"
							fill={exploreActiveValue === 3 ? "#FF2B51" : "black"}
						/>
					</svg>
					<div>
						<p>Post</p>
					</div>
				</PostDiv>

				<Profile
					onClick={() => {
						changeExploreActive(5);
					}}
					settingsActive={exploreActiveValue === 5 ? "#FF2B51" : "#201823"}
				>
					<svg
						width="22"
						height="22"
						viewBox="0 0 22 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M11 12.375C14.416 12.375 17.1875 9.60352 17.1875 6.1875C17.1875 2.77148 14.416 0 11 0C7.58398 0 4.8125 2.77148 4.8125 6.1875C4.8125 9.60352 7.58398 12.375 11 12.375ZM16.5 13.75H14.1324C13.1785 14.1883 12.1172 14.4375 11 14.4375C9.88281 14.4375 8.82578 14.1883 7.86758 13.75H5.5C2.46211 13.75 0 16.2121 0 19.25V19.9375C0 21.0762 0.923828 22 2.0625 22H19.9375C21.0762 22 22 21.0762 22 19.9375V19.25C22 16.2121 19.5379 13.75 16.5 13.75Z"
							fill={exploreActiveValue === 5 ? "#FF2B51" : "black"}
						/>
					</svg>
					<div>
						<p>Profile</p>
					</div>
				</Profile>
			</NavBar>
		</div>
	);
};

BottomNav.defaultProps = {};

export default BottomNav;
