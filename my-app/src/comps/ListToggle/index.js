import React, { useState } from "react";
import styled from "styled-components";
import SelectTags from "../Select/index";

const Container = styled.div`
	min-height: 44px;
	max-width: 317px;
	min-width: 253px;
	border-radius: 5px;
	display: flex;
	align-items: center;
`;

const Selection = ({ onSelect }) => {
	const [clickedSelect, setClickedSelect] = useState(null);

	const HandleSelect = (name) => {
		setClickedSelect(name);
	};
	return (
		<Container>
			<SelectTags
				onSelect={() => {
					onSelect("All");
				}}
				name="All"
				bgcolor={clickedSelect === "All" ? "#FFDCDF" : null}
				stroke={clickedSelect === "All" ? "1px solid #FF2B51" : null}
				color={clickedSelect === "All" ? "#FF2B51" : null}
				radius="5px 0px 0px 5px"
			/>
			<SelectTags
				onSelect={() => {
					onSelect("Baking");
				}}
				name="Baking"
				bgcolor={clickedSelect === "Baking" ? "#FFDCDF" : null}
				stroke={clickedSelect === "Baking" ? "1px solid #FF2B51" : null}
				color={clickedSelect === "Baking" ? "#FF2B51" : null}
			/>
			<SelectTags
				onSelect={() => {
					onSelect("Cuisine");
				}}
				name="Cuisine"
				bgcolor={clickedSelect === "Cuisine" ? "#FFDCDF" : null}
				stroke={clickedSelect === "Cuisine" ? "1px solid #FF2B51" : null}
				color={clickedSelect === "Cuisine" ? "#FF2B51" : null}
			/>
			<SelectTags
				onSelect={() => {
					onSelect("Drinks");
				}}
				name="Drinks"
				bgcolor={clickedSelect === "Drinks" ? "#FFDCDF" : null}
				stroke={clickedSelect === "Drinks" ? "1px solid #FF2B51" : null}
				color={clickedSelect === "Drinks" ? "#FF2B51" : null}
				radius="0px 5px 5px 0px"
			/>
		</Container>
	);
};

Selection.defaultProps = {};
export default Selection;
