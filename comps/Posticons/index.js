import React, {useEffect, useState} from 'react';
import Subheading from '../../comps/Subheading';
import Avatar from '../../comps/Avatar';
import styled from 'styled-components';


const Taskboxcontainer = styled.div`
width: 100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

`;

const Headerpart = styled.div`
width:auto;
display:flex;
justify-content:space-between;
align-items:center;
margin-left:50px;
margin-right:50px;
`;

const Closeimg = styled.div`

margin-right:10px;
display:flex;
justify-content:center;
align-items:center;
`;

const Checkimg = styled.div`
margin-left:10px;
display:flex;
justify-content:center;
align-items:center;
`;

const Titlepart = styled.div`
display:flex;
justify-content:center;
align-items:center;
`;

const Profilename = styled.div`
margin-right:100px;
display:flex;
justify-content:center;
align-items:center;
`;

const Profilepicture = styled.div`
margin-right:10px;
display:flex;
justify-content:center;
align-items:center;
`;


const Posticons = ()=> {


    return (
        <Taskboxcontainer>

          <Headerpart>
          <Profilepicture><Avatar  width="25px" height="25px"/></Profilepicture>
          <Profilename><Subheading text="Jojoma" fontsize="18px" fontweight="bold"/></Profilename>
          <Closeimg> <img src={require('./read.png')} /></Closeimg>
          <Titlepart><img src={require('./fire.png')} /></Titlepart>
          <Checkimg> <img src={require('./chat.png')} /></Checkimg>
          </Headerpart>

        </Taskboxcontainer>
    )
    
};
    
    
  
 Posticons.defaultProps = {
      
  };
  
  export default Posticons;