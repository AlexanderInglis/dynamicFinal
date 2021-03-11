import React from 'react';
import styled, {css} from 'styled-components';

const Container = styled.div`
max-height: 125px;
max-width: 210px;
`;

const ImageCont = styled.div`
max-height: 125px;
max-width: 210px;
background-color:#FF2B51;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 10px;
padding: 20px;
`;

const Text = styled.div`
font-family: sans-serif;
    color: #FFFFFF;
    font-size: 14px;
    display:flex;
    padding-top: 5px;
`;


const Image = styled.img`
min-height: 100px;
max-height: 100px;
min-width: 125px;
max-width:125px;
align-items: center;
justify-content: start;
`;


const fakedb = [
	{
		id: 1,
        img:
			"https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=953&q=80",
	description:"Upload Image"
        },
];

const ImageUpload = ({ImageUploading}) => {
    return <Container> 
    {ImageUploading.map((o) => {
return <ImageCont Onclick={() => {
     o.img
}}
>
        <Image src={require('./UploadImage.png')}></Image>
        <Text>{o.description}</Text>
    </ImageCont>
    })}
    </Container>
};


ImageUpload.defaultProps = {
ImageUploading:fakedb,
};

export default ImageUpload;

