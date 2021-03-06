import React from 'react';
import styled from 'styled-components';
import Avatar from '../../comps/Avatar';
import Subheading from '../../comps/Subheading';

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
width:50%;
`;

const Closeimg = styled.div`
justify-content:center;
align-items:center;
flex-direction:column;
position:fixed;
display: flex;
`;



const CommentBox = styled.div`
width:335px;
margin-top: 3px;
justify-content:center;
align-items:center;
flex-direction:column;
text-indent:130px;

`;

const Checkimg = styled.div`
margin-left:30px;
justify-content:center;
align-items:center;
flex-direction:column;
position:fixed;
display: flex;
margin-right:5px;
padding-right:5px;
`;

const Comments = ()=> {


    return (
        <Taskboxcontainer>

          <Headerpart>
          <Closeimg><Avatar width="25px" height="25px"/></Closeimg>
          <Checkimg><Subheading text="Jesse Laure:" fontsize="18px" fontweight="bold"/></Checkimg>
         <CommentBox><Subheading text="ipsum dolor sit amet. volutpat magna vel massa scelerisque vulputate. Etiam vitae vehicula elit, ipsum dolor sit amet. volutpat magna vel massa scelerisque vulputate. Etiam vitae vehicula elit," fontsize="15px" fontweight="light"/></CommentBox>
      
          </Headerpart>

        </Taskboxcontainer>
    )
    
};
    
    
  
Comments.defaultProps = {
      
  };
  
  export default Comments;