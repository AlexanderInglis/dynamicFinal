import "./App.scss";
import Landing from "../src/pages/landing";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Use the route path I've provided
function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/">
						<Landing />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
