import React from 'react';
import styled, {css} from 'styled-components';

const InputBox = styled.div`
display: flex;
flex-direction: column;
`;

const InputLabel = styled.label`
color: #676767;
`;

const InputCont = styled.input`
min-height: 27px;
min-width: 334px;
margin-top: 4px;
border-radius: 5px;
color: #676767;
::placeholder{
    color: #C4C4C4};
border:solid 1px #DDD9D9;
`;

const Input = ({placeholder, text,value, onChange}) => {
  return <InputBox>
  <InputLabel>{text}</InputLabel>
  <InputCont defaultValue={value}placeholder={placeholder} onChange={onChange}/>
  </InputBox>
}

Input.defaultProps = {
placeholder: 'Content',
text: 'Name',
value:''
}

export default Input;