import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import Details from './views/Details';
import CreatePost from './views/CreatePost';
import NotFound from './views/NotFound';

interface AppProps {}

const App = (props: AppProps) => {
	return (
		<BrowserRouter>
		<div className='px-5 py-2'>
			<Link to="/chirps">Home</Link>
			<Link to="/chirps/:id">Details</Link>
			<Link to="/chirps/post">Add Post</Link>
		</div>
			<Routes>
				<Route path='/chirps' element={<Home />}/>
				<Route path='/chirps/:id' element={<Details/>}/>
				<Route path='/chirps/post' element={<CreatePost/>}/>
				<Route path='*' element={<NotFound/>}/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;