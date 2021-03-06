import React from 'react';
import styled from 'styled-components';
import Post from '../../comps/Post';
import Posticons from '../../comps/Posticons';
import Description from '../../comps/Description';

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
width:100%;
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

const Comment = styled.div`
display: flex;
justify-content:center;
align-items:center;
flex-direction:column;
margin-left:auto;
margin-right:auto;
width: auto;
`;

const Userpost = ()=> {


    return (
        <Taskboxcontainer>

        <Headerpart>
        <Checkimg><Post/></Checkimg>
        <CommentBox><Posticons/></CommentBox>
        <Comment><Description/></Comment>
      
        </Headerpart>

        </Taskboxcontainer>
    )
    
};
    
    
  
Userpost.defaultProps = {
      
  };
  
  export default Userpost;