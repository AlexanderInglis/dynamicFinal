import React, { useState } from "react";
import styled from "styled-components";

import fireOn from "../LikeButton/FireOn.svg";
import fireOff from "../LikeButton/FireOff.svg";

const LikeDiv = styled.img`
	padding-left: 5px;
`;

const Like = () => {
	const [heartActive, changeHeartActive] = useState(false);
	return (
		<LikeDiv
			onClick={() => {
				if (heartActive === false) {
					changeHeartActive(true);
				} else {
					changeHeartActive(false);
				}
			}}
			src={heartActive === true ? fireOn : fireOff}
		></LikeDiv>
	);
};

Like.defaultProps = {};

export default Like;
