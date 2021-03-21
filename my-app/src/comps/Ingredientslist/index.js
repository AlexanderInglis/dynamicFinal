import React, { useEffect, useState } from "react";
import Subheading from "../../comps/Subheading";
import styled from "styled-components";

const IngList = styled.div`
	width: auto;
	justify-content: left;
	align-items: center;
	flex-direction: column;
	padding: 10px;
`;

const Headerpart = styled.div`
	max-width: 279px;
	display: grid;
	grid-template-columns: auto auto;
	grid-gap: 5px;
	margin: 10px;
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
	border: 3px solid #ff2b51;
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
					<ListItem>
						<Bullet />
						<IngName>{o.ing}</IngName>
					</ListItem>
					<ListItem>
						<Bullet />
						<IngName>{o.ing}</IngName>
					</ListItem>
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
