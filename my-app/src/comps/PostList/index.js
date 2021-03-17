import React from 'react';
import styled, {css} from 'styled-components';

const Container = styled.div`
max-width:375px;
max-height:500px;
`;

const ImageContainer = styled.div`
max-width:375px;
max-height:500px;
display: grid;
grid-template-columns:repeat(3, 125px);
`;



const Image = styled.img`
min-height: 100px;
max-height: 100px;
min-width: 125px;
max-width:125px;
align-items: center;
justify-content: start;
border 1px solid black;
`;

const fakedb = [
	{
		id: 1,
        img:
			"https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=953&q=80",
	},
];

const PostList = ({PostImg}) => {
    return  <Container> 
                 {PostImg.map((o) => {
           return <ImageContainer>
       <Image src={o.img}></Image>
    <Image src={o.img}></Image>
    <Image src={o.img}></Image>
    <Image src={o.img}></Image>
    <Image src={o.img}></Image>
    <Image src={o.img}></Image>
    <Image src={o.img}></Image>
    <Image src={o.img}></Image>
    <Image src={o.img}></Image>
    <Image src={o.img}></Image>
    <Image src={o.img}></Image>
    <Image src={o.img}></Image>
    <Image src={o.img}></Image>
    <Image src={o.img}></Image>
    <Image src={o.img}></Image>
    <Image src={o.img}></Image>
    </ImageContainer>
                 })}
</Container>
                 }

PostList.defaultProps = {
    PostImg: fakedb,
};

export default PostList;