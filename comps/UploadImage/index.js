import React from 'react';
import styled, {css} from 'styled-components';

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
p{
    font-family: sans-serif;
    color: #FFFFFF;
    font-size: 14px;
}
`;

const ImageUpload = () => {
    return<ImageCont>
        <img src={require('./UploadImage.png')} />
        <p>Upload Image</p>
    </ImageCont>
};

ImageUpload.defaultProps = {

};

export default ImageUpload;

