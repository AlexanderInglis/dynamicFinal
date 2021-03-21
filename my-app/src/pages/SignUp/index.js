import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import BackHeader from "comps/BackHeader";
import Input from "../../comps/Input";
import Button from "comps/Button";
import PageTitle from "../../comps/PageTitle";

const Spacer = styled.div`
	height: 20px;
`;

const Spacer2 = styled.div`
	height: 40px;
`;

const Signup = () => {
	const history = useHistory();
	const [un, setUn] = useState("");
	const [pass, setPass] = useState("");
	const [fname, setFName] = useState("");
	const [lname, setLName] = useState("");
	const [photo, setPhoto] = useState("");
	const [phone, setPhone] = useState("");

	const HandleRegister = async () => {
		const resp = await axios.post("http://localhost:8080/api/users", {
			username: un,
			first_name: fname,
			last_name: lname,
			profile_photo: photo,
			password: pass,
			phone_number: phone,
		});
		console.log(resp);
		if (resp.data !== "Something went wrong registering user") {
			const token = resp.data.accessToken;
			sessionStorage.setItem("token: ", token);
			axios.defaults.headers.common["Authorization"] = "Bearer " + token;
			history.push("./main");
		}
	};

	return (
		<div className="Signup">
			<BackHeader />
			<PageTitle title="Sign Up" />
			<Spacer2 />
			<div className="contentSignup">
				<Input
					onChange={(e) => setFName(e.target.value)}
					placeholder="First Name"
					text={"First Name."}
				/>
				<Spacer />
				<Input
					onChange={(e) => setLName(e.target.value)}
					placeholder="Last Name"
					text={"Last Name"}
				/>
				<Spacer />
				<Input
					onChange={(e) => setUn(e.target.value)}
					placeholder="Username"
					text={"Create a Username"}
				/>
				<Spacer />
				<Input
					onChange={(e) => setPhone(e.target.value)}
					placeholder="+1 Phone"
					text={"Phone Number"}
				/>
				<Spacer />
				<Input
					onChange={(e) => setPass(e.target.value)}
					placeholder="Password"
					text={"Password"}
				/>
				<Spacer />
			</div>
			<Spacer />
			<Button onClick={HandleRegister} text="Create Account" />
		</div>
	);
};

export default Signup;
