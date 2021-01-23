import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SinglePost from './components/SinglePost';
import Post from './components/Post';

import NavBar from './components/NavBar';

function App() {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route component={Home} path="/" exact />
				<Route component={About} path="/about" />
				<Route component={SinglePost} path="/post/:slug" />
				<Route component={Post} path="/post" exact />
			</Switch>
		</Router>
	);
}

export default App;
