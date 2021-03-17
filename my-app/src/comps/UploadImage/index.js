import React from "react";
import styled from "styled-components";

const ImgDiv = styled.div`
min-height: 181px;
min-width: 234px;
max-width: 150px;
margin-right: 24px;
background-color:#FF2B51;
border-radius:10px;
display:flex;
align-items: center;
justify-content: center;
background-image: url("${(props) => props.bgImg}");
background-size: cover;
background-position: center;
background-repeat: no-repeat;
margin-bottom:10%;
}
button{
    border-radius:100px;
    width:30px;
    height:30px;
    border:none;
    background: white);
    display:flex;
    align-items: center;
    justify-content: center;
    outline:none;
}

`;

//when a user uploads a file to this comp the image should display as the background image
// Need to make this comp so that when a file gets uploaded the plus sign turns into a minus sign

const UploadImg = ({ bgImg, cbProp }) => {
	const hiddenFileInput = React.useRef(null);

	const handleClick = (event) => {
		hiddenFileInput.current.click();
	};
	// const handleChange = event => {
	//     const fileUploaded = event.target.files[0];
	// };
	return (
		<ImgDiv bgImg={bgImg} className="">
			<button onClick={handleClick}>
				<svg
					width="17"
					height="17"
					viewBox="0 0 17 17"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2.81567 8.31689H14.7797"
						stroke="#FF2B51"
						stroke-width="4"
						stroke-linecap="round"
					/>
					<path
						d="M8.5 14.0423V2.00001"
						stroke="#FF2B51"
						stroke-width="4"
						stroke-linecap="round"
					/>
				</svg>
			</button>
			<input
				type="file"
				accept="image/x-png,image/gif,image/jpeg"
				multiple
				ref={hiddenFileInput}
				onChange={cbProp}
				style={{ display: "none" }}
			/>
		</ImgDiv>
	);
};

UploadImg.defaultProps = {
	bgImg: "#DCEFFB",
};
export default UploadImg;
