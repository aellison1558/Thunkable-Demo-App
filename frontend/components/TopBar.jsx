import React from 'react';

class TopBar extends React.Component {
	render() {
		return(
			<div className="top-bar">
				<div className="top-bar-beaver">
					<img src="./assets/images/beaver 1.png"/>
				</div>
				<div className="top-bar-setting">
					<img src="./assets/images/setting icon.png" />
				</div>
			</div>
		);
	}
};

export default TopBar;