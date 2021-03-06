import React from "react";

import Button from "../comps/Button";

export default {
	title: "Buttons/Large",
	component: Button,
};

export const LoginButton = () => (
	<Button bg={"#FF2B51"} text={"Login"}></Button>
);

export const SignUpButton = () => (
	<Button bg={"#FF2B51"} text={"Signup"}></Button>
);
