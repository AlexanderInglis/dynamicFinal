import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import BackHeader from "comps/BackHeader";
import Avatar from "../../comps/Avatar";
import InputBox from "../../comps/InputBox";
import Button from "comps/Button";
import BottomNav from "comps/NavBar";

const Spacer = styled.div`
	height: 15px;
`;

const BigSpacer = styled.div`
	height: 100px;
`;

const BottomNavCont = styled.div`
	position: fixed;
	width: 100%;
	bottom: 0;
	left: 0;
`;

const AccountSetting = () => {
	const history = useHistory();
	const [un, setUn] = useState("");
	const [pass, setPass] = useState("");
	const [fname, setFName] = useState("");
	const [lname, setLName] = useState("");
	const [photo, setPhoto] = useState("");
	const [phone, setPhone] = useState("");
	const [img, setImg] = useState("");

	// const HandleChange = async () => {
	// 	const resp = await axios.patch("http://localhost:8080/api/users", {
	// 		username: un,
	// 		first_name: fname,
	// 		last_name: lname,
	// 		profile_photo_url: photo,
	// 		password: pass,
	// 		phone_number: phone,
	// 	});
	// 	console.log(resp);
	// };

	const HandleChange = async (event) => {
		event.preventDefault();

		const data = new FormData();
		data.append("image", photo);
		data.append("first_name", fname);
		data.append("last_name", lname);
		data.append("username", un);
		data.append("phone_number", phone);

		let resp = await axios.patch("http://localhost:8080/api/users", data);
		console.log("Editing post ", resp.data);
	};

	return (
		<div className="Setting">
			<div className="SettingContent">
				<BackHeader />
				<div className="avatarpic">
					<Avatar />
				</div>
				<div className="ProfileChange">
					<p>Change profile Pic</p>
				</div>
				<Spacer />
				<form onSubmit={HandleChange}>
					<InputBox
						placeholder="Username"
						onChange={(e) => setUn(e.target.value)}
					/>
					<InputBox
						placeholder="First Name"
						onChange={(e) => setFName(e.target.value)}
					/>
					<InputBox
						placeholder="Last Name"
						onChange={(e) => setLName(e.target.value)}
					/>
					<InputBox
						placeholder="Phone Number"
						onChange={(e) => setPhone(e.target.value)}
					/>
					<input
						id="file-input"
						type="file"
						accept="image/*"
						filename={photo}
						onChange={(e) => setPhoto(e.target.files[0])}
					></input>

					<Spacer />
					<Button text="Save" type="submit" />
				</form>
				<br />
				<Button
					onClick={() => {
						sessionStorage.clear();
						axios.defaults.headers.common["Authorization"] = null;
						history.push("/");
					}}
					text="Logout"
				/>
				<BigSpacer />
			</div>
			<BottomNavCont>
				<BottomNav active={4} />
			</BottomNavCont>
		</div>
	);
};

export default AccountSetting;
