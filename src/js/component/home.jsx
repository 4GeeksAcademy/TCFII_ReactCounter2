import React from "react";
import { CardRow } from "./CardRow";
import { Card } from "./Card";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<CardRow>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</CardRow>
		</>
	);
};

export default Home;
