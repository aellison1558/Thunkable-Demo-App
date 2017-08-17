import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'babel-polyfill'
import TopBar from './frontend/components/TopBar.jsx'
import AppContainer from './frontend/components/AppContainer.jsx'

const App = () => (
	<div>
		<TopBar />
		<AppContainer/>
	</div>
);

document.addEventListener("DOMContentLoaded", function(){
	ReactDOM.render(<App/>, document.getElementById('root'));
});