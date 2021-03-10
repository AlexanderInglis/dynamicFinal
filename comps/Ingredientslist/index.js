import React, { useEffect, useState } from "react";
import Subheading from "../../comps/Subheading";
import styled from "styled-components";

const Taskboxcontainer = styled.div`
	width: auto;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Headerpart = styled.div`
	display: block-flex;
	justify-content: space-between;
	align-items: center;
	margin: 10px;
	position: relative;
	width: auto;
`;

const Closeimg = styled.div`
	margin-right: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Profilename = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Profilepicture = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 5px;
	width: 5px;
	background-color: #fff;
	border: 3px solid red;
	border-radius: 50%;
	margin-right: 10px;
`;

const Lowerpart = styled.div`
	display: block-flex;
	justify-content: space-between;
	align-items: center;
	margin: 10px;
	position: absolute;
	width: auto;
	margin-left: 300px;
`;

const Ingredientslist = () => {
	return (
		<Taskboxcontainer>
			<Headerpart>
				<Profilename>
					<Profilepicture>
						<span class="dot"></span>
					</Profilepicture>
					<Subheading text="1 Egg" fontsize="18px" fontweight="light" />
				</Profilename>
				<Profilename>
					<Profilepicture>
						<span class="dot"></span>
					</Profilepicture>
					<Subheading text="Spinach Leafs" fontsize="18px" fontweight="light" />
				</Profilename>
				<Profilename>
					<Profilepicture>
						<span class="dot"></span>
					</Profilepicture>
					<Subheading text="1 Egg" fontsize="18px" fontweight="light" />
				</Profilename>
				<Profilename>
					<Profilepicture>
						<span class="dot"></span>
					</Profilepicture>
					<Subheading text="Spinach Leafs" fontsize="18px" fontweight="light" />
				</Profilename>
			</Headerpart>
			<Lowerpart>
				<Profilename>
					<Profilepicture>
						<span class="dot"></span>
					</Profilepicture>
					<Subheading text="1 Egg" fontsize="18px" fontweight="light" />
				</Profilename>
				<Profilename>
					<Profilepicture>
						<span class="dot"></span>
					</Profilepicture>
					<Subheading text="Yogurt" fontsize="18px" fontweight="light" />
				</Profilename>
				<Profilename>
					<Profilepicture>
						<span class="dot"></span>
					</Profilepicture>
					<Subheading text="1 Egg" fontsize="18px" fontweight="light" />
				</Profilename>
				<Profilename>
					<Profilepicture>
						<span class="dot"></span>
					</Profilepicture>
					<Subheading text="Yogurt" fontsize="18px" fontweight="light" />
				</Profilename>
			</Lowerpart>
		</Taskboxcontainer>
	);
};

Ingredientslist.defaultProps = {};

export default Ingredientslist;
