import React from 'react';
import styled, {css} from 'styled-components';

const ImageContainer = styled.div`
min-width:375;
min-height:500;
display: grid;
grid-template-columns: auto auto auto;
`;

const ImageCont = styled.img`
min-height: 100px;
min-width: 125px;
align-items: center;
justify-content: start;
border 1px solid black;
`;

const PostList = ({img}) => {
    return<ImageContainer>
    <ImageCont src={img}/>
    <ImageCont src={img}/>
    <ImageCont src={img}/>
    <ImageCont src={img}/>
    <ImageCont src={img}/>
    <ImageCont src={img}/>
    <ImageCont src={img}/>
    <ImageCont src={img}/>
    <ImageCont src={img}/>
    </ImageContainer>
};

PostList.defaultProps = {
    img:'./UploadImage.png',

};

export default PostList;
