import React from "react";
import { CardRow } from "./CardRow";
import { Clock } from "./Clock";
import { Card } from "./Card";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { SecondsCounterView } from "./SecondsCounterView";
import { Counter } from "./counter";


//create your first component
const Home = () => {
	return (
		<>
			<Counter />
		</>
	);
};

export default Home;
