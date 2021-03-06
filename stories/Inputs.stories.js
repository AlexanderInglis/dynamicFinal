import React from "react";
import Input from "../comps/Input";
import PageTitle from "../comps/PageTitle";
import SearchBar from "../comps/SearchBar";

export default {
	title: "Inputs/Form and Inputs",
	component: SearchBar,
};

export const CustomSearchBar = () => <SearchBar></SearchBar>;
export const CustomInput = () => <Input></Input>;
export const CustomTitle = () => <PageTitle></PageTitle>;
