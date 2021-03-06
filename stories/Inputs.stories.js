import React from "react";
import SignInInput from "../comps/Input";
import PageTitle from "../comps/PageTitle";
import SearchBar from "../comps/SearchBar";

export default {
	title: "Inputs/Form and Inputs",
	component: SearchBar,
};

export const CustomSearchBar = () => <SearchBar></SearchBar>;
export const CustomInput = () => <SignInInput></SignInInput>;
export const CustomTitle = () => <PageTitle></PageTitle>;
