import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Followbutton from '../Followbutton';
import TaskHeader from '../Headerprofile';
import Subheading from '../Subheading';

const Container = styled.div`
width: 100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`;

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
display:flex;
justify-content:center;
align-items:center;
`;

const Bottompart = styled.div`
  width:auto;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding-top:20px;

`;

const Postsresult = styled.div`
`;

const Followersresult = styled.div`
margin-left:60px;
margin-right:60px;
`;

const Likesresult = styled.div`
`;

const fakedb = [
	{
		id: 1,
		username: "John Doe",
		Location:
			"Vancouver BC, Canada",
		profileImg:
			"https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
  NumPosts: 16,
  NumFollowers: 113,
  NumLikes: 31,
	},
];

const Profilefollow = ({profileaccount})=> {
    return <Container>
        {profileaccount.map((o) => {
        return <Logboxcontainer>
          <Headerpart>
          <TaskHeader profileName={o.username} LocationText={o.Location} avatarImg={o.profileImg}/>
          </Headerpart>
         
          <Logincontainer>
            <Followbutton text={"Follow"} bg={"#FF2B51"}/> 
          </Logincontainer>

          <Bottompart>
          <Postsresult><Firstresult>{o.NumPosts}</Firstresult><Subheading text="Posts" fontsize="12px" fontweight="light"/></Postsresult>
          <Followersresult><Secondresult>{o.NumFollowers}</Secondresult><Subheading text="Followers" fontsize="12px" fontweight="light"/></Followersresult>
          <Likesresult><Thirdresult>{o.NumLikes}</Thirdresult><Subheading text="Likes" fontsize="12px" fontweight="light"/></Likesresult>
          </Bottompart>
          </Logboxcontainer>
          })}
</Container>
};
    
    
  
Profilefollow.defaultProps = {
  profileaccount: fakedb,
  };
  
  export default Profilefollow;