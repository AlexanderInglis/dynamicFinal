import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "pages/main";
import Landing from "../src/pages/landing";
import Post from "pages/post";
import CreatePost from "pages/CreatePost";

//Use the route path I've provided
function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/">
						<Landing />
					</Route>
					<Route exact path="/main">
						<Main />
					</Route>

					<Route exact path="/post">
						<Post />
					</Route>

					<Route exact path="/create">
						<CreatePost />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
