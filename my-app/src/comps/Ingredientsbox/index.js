import React from 'react';
import styled from 'styled-components';
import Subheading from '../../comps/Subheading';
import Ingredientslist from '../../comps/Ingredientslist';

const Taskboxcontainer = styled.div`
width:100%;
height: auto;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

`;

const Headerpart = styled.div`
margin-left:auto;
margin-right:auto;
`;




const CommentBox = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`;

const Checkimg = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`;

const Ingredientsbox = ()=> {


    return (
        <Taskboxcontainer>

        <Headerpart>
        <Checkimg><Subheading text="Ingredients" fontsize="18px" fontweight="bold"/></Checkimg>
        <CommentBox><Ingredientslist/></CommentBox>
      
        </Headerpart>

        </Taskboxcontainer>
    )
    
};

Ingredientsbox.defaultProps = {
      
};

export default Ingredientsbox;