import React, {useEffect, useState} from 'react';
import Subheading from '../../comps/Subheading';
import Avatar from '../../comps/Avatar';
import styled from 'styled-components';


const Taskboxcontainer = styled.div`
width: 100%;
height: auto;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

`;

const Headerpart = styled.div`
  width:auto;
  padding-left: 20px;
  padding-right: 20px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin:10px;
`;

const Closeimg = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-right:15px;
`;

const Checkimg = styled.div`
margin-left:40px;
margin-bottom:30px;
`;

const Titlepart = styled.div`
margin-right:20px;
`;

const Description = styled.div`
font-style:medium;
font-weight:medium;
font-size:30px;
position: fixed;
`;



const TaskHeader = ()=> {


    return (
        <Taskboxcontainer>

          <Headerpart>
          <Closeimg><Avatar width="75px" height="75px"/></Closeimg>
          <Titlepart><Subheading text="Jojoma" fontsize="18px" fontweight="light"/>
          <Description><Subheading text="Vancouver BC, Canada" fontsize="10px" fontwieght="light"/></Description>
          </Titlepart>
          <Checkimg><img src={require('./more.png')} /></Checkimg>
          </Headerpart>

        </Taskboxcontainer>
    )
    
};
    
    
  
 TaskHeader.defaultProps = {

  };
  
  export default TaskHeader;