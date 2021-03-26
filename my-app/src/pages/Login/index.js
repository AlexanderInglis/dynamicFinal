import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import BackHeader from "comps/BackHeader";
import Input from "../../comps/Input";
import Button from "comps/Button";
import PageTitle from "../../comps/PageTitle";

const Spacer = styled.div`
	height: 40px;
`;

const Spacer2 = styled.div`
	height: 30px;
`;

const Login = () => {
	const history = useHistory();
	const [un, setUn] = useState("");
	const [pass, setPass] = useState("");

	const [error, setError] = useState(null);

	const HandleLogin = async () => {
		const resp = await axios.post("http://localhost:8080/api/login", {
			username: un,
			password: pass,
		});
		console.log(resp);
		if (
			resp.data !== "incorrect password" &&
			resp.data !== "incorrect username"
		) {
			console.log(resp.data);
			const token = resp.data.accessToken;
			sessionStorage.setItem("token", token);
			axios.defaults.headers.common["Authorization"] = "Bearer " + token;
			history.push("/main");
		} else {
			//update state to show an error
			setError("Incorrect username or password");
		}
	};

	return (
		<div className="Login">
			<BackHeader />
			<div className="titlestyle">
				<Spacer2 />
				<PageTitle title="Welcome Back to Cravings! " />
			</div>
			<Spacer />
			<div className="Inputs">
				<Input
					onChange={(e) => setUn(e.target.value)}
					placeholder="Username"
					text={"Username"}
				/>
				<Spacer2 />
				<Input
					onChange={(e) => setPass(e.target.value)}
					placeholder="Password"
					text={"Password"}
				/>
				<div className="passwordlink">
					<p>Forgot your password?</p>
				</div>
			</div>
			<div className="ButtonPosition">
			<Button text="Login" onClick={HandleLogin} />
			</div>
		</div>
	);
};

export default Login;
