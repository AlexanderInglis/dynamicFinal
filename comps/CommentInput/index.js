import React from 'react';
import styled, {css} from 'styled-components';

const InputBox = styled.div`
min-width:375;
min-height:123;
display: flex;
flex-direction: column;
background: white;
background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0));
`;

const InputLabel = styled.label`
color: #676767;
`;

const InputCont = styled.input`
min-height: 48px;
min-width: 335px;
margin-top: 4px;
border-radius: 5px;
color: #676767;
::placeholder{
    color: #AAAAAA};
border:solid 1px #DDD9D9;
`;

const CommentInput = ({placeholder, text,value, onChange, iconsrc}) => {
  return <InputBox>
  <InputLabel>{text}</InputLabel>
  <InputCont defaultValue={value}placeholder={placeholder} onChange={onChange} src={iconsrc}/>
  </InputBox>
}

CommentInput.defaultProps = {
placeholder: 'Content',
text: 'Name',
iconsrc: "./SendIcon.png",
value:''
}

export default CommentInput;