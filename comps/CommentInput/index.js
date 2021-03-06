import React from 'react';
import styled, {css} from 'styled-components';

const image = require("./sendIcon.png");

const InputBox = styled.div`
max-width:375;
min-height:123;
display: flex;
flex-direction: column;
background: white;
background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0));
`;


const InputCont = styled.input`
min-height: 48px;
max-width: 335px;
margin-top: 4px;
color: #676767;
border-width:0px;
border:none;
padding-left:10px;
::placeholder{
    color: #AAAAAA
  font-size:20px;};
`;

const InputContainer = styled.div`
min-height: 48px;
max-width: 335px;
margin-top: 4px;
border-radius: 4px;
color: #676767;
::placeholder{
    color: #C4C4C4};
border:solid 1px #DDD9D9;
`;

const CommentInput = ({placeholder, text,value, onChange, iconsrc}) => {
  return <InputBox>
  <InputContainer>
  <InputCont defaultValue={value} placeholder={placeholder} onChange={onChange}/>
  <img src={iconsrc}></img>
  </InputContainer>
  </InputBox>
}

CommentInput.defaultProps = {
placeholder: 'Add a comment',
iconsrc: image,
value:''
}

export default CommentInput;