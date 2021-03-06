import React from 'react';
import styled from 'styled-components';

const PostImage = require("./post1.png");

const PostContainer = styled.div`
display: inline-flex;
width:${props=>props.width ? props.width : "375px"};
height:${props=>props.height ? props.height : "291px"};
`;

const PostImg = styled.img`
width:100%;
height:100%;
background-size:cover;
object-fit: cover;

`;


const Post = ({bgimg, width, height}) =>{
    return <PostContainer width={width} height={height}>
        <PostImg src={bgimg}></PostImg>    
    </PostContainer>
}

Post.defaultProps = {
    bgimg :PostImage,
}

export default Post;