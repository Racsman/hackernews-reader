import React from 'react';
import {ReactComponent as ReloadPage} from '../icons/refresh.svg';

export const Navbar = ({triggerReload}) => {
	return(
		<nav>
			<div>
				<div className='branding'>
					<img src='/logo.png' className='brand-logo' alt='HN Reader' width='40' height='40'/>
					<div className='brand-name'>Hacker News</div>
				</div>
			</div>
			<button type='button' className='loader-button' aria-label='Reload' onClick={triggerReload}>
				<ReloadPage width='3rem' height='3rem' fill='#202939'/>
			</button>
		</nav>
	);
};