import react from "react"
import Link from 'next/link';

import bg from '../static/logo_white.png'

class Nav extends React.Component {
	state = {}
	render() {
		return (
			<div className="nav-helpdesk">
				<div className="container">
					<div className="row">
						<ul className="nav nav-horizontal">
							<li className="hamburger">
								<button>
									<span className="line"></span>
									<span className="line"></span>
									<span className="line"></span>
								</button>
							</li>

							<li className="nav-logo" style={{backgroundImage: 'url(' + bg + ')'}}>1
								<a href="#"></a>
							</li>



						</ul>

					</div>
				</div>
			</div>
		);
	}
}

export default Nav
