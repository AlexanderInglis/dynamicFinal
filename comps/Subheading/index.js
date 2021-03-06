import React from 'react';
import styled from 'styled-components';

const SHContainer = styled.div`
    padding:${props=>props.padding ? props.padding : "10px 0 10px 0"};
    width:100%;
    height:auto;
    font-weight:${props=>props.fontweight ? props.fontweight : "700"};
    color:${props=>props.color ? props.color : "black"};
    font-size:${props=>props.fontsize ? props.fontsize : "24px"};
    border-top:${props=>props.bordertop ? props.bordertop : "none"};
    display:flex;
    align-text:left;

    span {
        display:inline-flex;
    }
`;



const Subheading= ({text, fontweight, color, fontsize, bordertop, padding}) =>{
    return <SHContainer fontweight={fontweight} color={color} fontsize={fontsize} bordertop={bordertop} padding={padding}>
        <span>{text}</span>
    </SHContainer>
}

Subheading.defaultProps = {
    text : "Text Components",
    fontweight:null,
    color:null,
    fontsize:null,
    bordertop:null
}

export default Subheading;