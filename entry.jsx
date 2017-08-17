import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'babel-polyfill'

const App = () => (
	<Provider store={store}>
		<TopBar />
		<AppContainer/>
	</Provider>
);

document.addEventListener("DOMContentLoaded", function(){
	ReactDOM.render(<App/>, document.getElementById('root'));
});