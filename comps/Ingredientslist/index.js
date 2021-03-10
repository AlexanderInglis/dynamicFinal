import React, { useEffect, useState } from "react";
import Subheading from "../../comps/Subheading";
import styled from "styled-components";

const IngList = styled.div`
	width: auto;
	display: inline-flex;
	justify-content: left;
	align-items: center;
	flex-direction: column;
`;

const Headerpart = styled.div`
	display: block-flex;
	justify-content: space-between;
	align-items: center;
	margin: 10px;
	position: relative;
	width: auto;
`;

const ListItem = styled.div`
	display: flex;
	justify-content: left;
	align-items: center;
`;

const Bullet = styled.div`
	display: flex;
	justify-content: left;
	align-items: center;
	height: 5px;
	width: 5px;
	background-color: #fff;
	border: 3px solid red;
	border-radius: 50%;
	margin-right: 10px;
`;

const ingredients = styled.div`
	font-size: 18px;
`;

const IngName = styled.div``;

const fakedb = [
	{
		ing: "1 Egg",
	},
];

const Ingredientslist = ({ item }) => {
	return (
		<IngList>
			<h3>Ingredients</h3>

			{item.map((o) => (
				<Headerpart>
					<ListItem>
						<Bullet />
						<IngName>{o.ing}</IngName>
					</ListItem>
				</Headerpart>
			))}
		</IngList>
	);
};

Ingredientslist.defaultProps = {
	item: fakedb,
};

export default Ingredientslist;
