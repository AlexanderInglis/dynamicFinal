import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Followbutton from '../Followbutton';
import TaskHeader from '../Headerprofile';
import Subheading from '../Subheading';


const Logboxcontainer = styled.div`
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
`;

const Lowerpart = styled.div`
  width:auto;
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-left:50px;
  margin-right:50px;
`;

const Logincontainer = styled.div`

  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  background-color:#fff;
  border-radius:10px;
  margin-top:10px;

`;

const Firstresult = styled.div`
margin-right:80px;
display:flex;
justify-content:center;
align-items:center;
`;

const Secondresult = styled.div`
display:flex;
justify-content:center;
align-items:center;
`;

const Thirdresult = styled.div`
margin-left:80px;
display:flex;
justify-content:center;
align-items:center;
`;

const Bottompart = styled.div`
  width:auto;
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-left:50px;
  margin-right:50px;
  margin-top:-10px;
`;

const Postsresult = styled.div`
margin-right:60px;
display:flex;
justify-content:center;
align-items:center;
`;

const Followersresult = styled.div`
display:flex;
justify-content:center;
align-items:center;
`;

const Likesresult = styled.div`
margin-left:60px;
display:flex;
justify-content:center;
align-items:center;
`;

const Profilefollow = ()=> {

    return (
        <Logboxcontainer>
          <Headerpart>
          <TaskHeader/>
          </Headerpart>
         
          <Logincontainer>
            <Followbutton text={"Follow"} bg={"#FF2B51"}/> 
          </Logincontainer>

          <Lowerpart>
          <Firstresult><Subheading text="10" fontsize="12px" fontweight="light"/></Firstresult>
          <Secondresult><Subheading text="001" fontsize="12px" fontwieght="light"/></Secondresult>
          <Thirdresult><Subheading text="000" fontsize="12px" fontwieght="light"/></Thirdresult>
          </Lowerpart>

          <Bottompart>
          <Postsresult><Subheading text="Posts" fontsize="12px" fontweight="light"/></Postsresult>
          <Followersresult><Subheading text="Followers" fontsize="12px" fontwieght="light"/></Followersresult>
          <Likesresult><Subheading text="Likes" fontsize="12px" fontwieght="light"/></Likesresult>
          </Bottompart>
        </Logboxcontainer>
    )
    
};
    
    
  
Profilefollow.defaultProps = {
      
  };
  
  export default Profilefollow;