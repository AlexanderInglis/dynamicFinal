import React, {useEffect, useState, useContext} from 'react';
import styled, {css} from 'styled-components';



const ButtonWrapper = styled.button`
    width:275px;
    height:45px;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:4px;
    border:none;
    border-radius:10px;
    background-color:${props => props.bgColor ? props.bgColor : "#fff"};
    outline:none;
`;

const ButtonText = styled.div`
    display:inline-flex;
    border:none;
    margin:5px;
    backgroundcolor:transparent;
    color:${props => props.color ? props.color : "#fff"};
    outline:none;
`;

const Followbutton= ({text,bgColor, disabled, onClick, color}) => {
   
    return <ButtonWrapper 
    disabled={disabled}
            bgColor={bgColor} 
            onClick={onClick}
            color={color}>
       <ButtonText disabled={disabled}>{text}</ButtonText>
    </ButtonWrapper>
}

Followbutton.defaultProps = {
    text : "Follow",
    bgColor : "#ff2b51",
    color: "black",
    onClick:()=>{}
}


export default Followbutton;