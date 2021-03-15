import React from "react";
import styled from "styled-components";

const PostImage = require("./post1.png");

const PostContainer = styled.div`
	display: inline-flex;
	max-width: ${(props) => (props.width ? props.width : "375px")};
	min-height: ${(props) => (props.height ? props.height : "291px")};
`;

const PostImg = styled.img``;

const Post = ({ bgimg, width, height }) => {
	return (
		<PostContainer width={width} height={height}>
			<PostImg src={bgimg}></PostImg>
		</PostContainer>
	);
};

Post.defaultProps = {
	bgimg: PostImage,
};

export default Post;
