import "./App.scss";
import axios from "axios";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useHistory,
} from "react-router-dom";
import Main from "pages/main";
import Landing from "../src/pages/landing";
import Post from "pages/post";
import CreatePost from "pages/CreatePost";
import Search from "pages/Search";
import Account from "pages/AccountPage";
import AccountSetting from "pages/AccountSetting";
import SignUp from "pages/SignUp";
import Login from "pages/Login";

const token = sessionStorage.getItem("token");
if (token) {
	axios.defaults.headers.common["Authorization"] = "Bearer " + token;
}

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/">
						<Landing />
					</Route>
					<Route exact path="/SignUp">
						<SignUp />
					</Route>
					<Route exact path="/Login">
						<Login />
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
					<Route exact path="/search">
						<Search />
					</Route>
					<Route exact path="/Account">
						<Account />
					</Route>
					<Route exact path="/AccountSetting">
						<AccountSetting />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
