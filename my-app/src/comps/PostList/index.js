import React from "react";
import styled, { css } from "styled-components";
import { useHistory } from "react-router-dom";

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 125px);
`;

const ImageContainer = styled.div`
	max-width: 125px;
`;

const ImgCont = styled.div`
	max-height: 100px;
	max-width: 125px;
	overflow:hidden;
	border 1px solid black;
	margin-left:1px;
	margin-right:1px;
	margin-bottom:1px;
	margin-top:1px;
`;

const Image = styled.img`
max-width: -webkit-fill-available;
align-items: center;
justify-content: start;
display: block;
  min-width:124px;
  min-height:99px;
  width: auto;
  height: auto;
`;

const Spacer = styled.div`
	height: 200px;
`;

const fakedb = [
	{
		id: 1,
		img:
			"https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=953&q=80",
	},
];

const PostList = ({ PostImg }) => {
	const history = useHistory();
	return (
		<Container>
			{PostImg.map((o) => {
				return (
					<ImageContainer>
						<ImgCont>
							<Image
								onClick={() => history.push("/Post/" + o.id)}
								src={o.post_img}
							></Image>
						</ImgCont>
					</ImageContainer>
				);
			})}
		</Container>
	);
};

PostList.defaultProps = {
	PostImg: fakedb,
};

export default PostList;
