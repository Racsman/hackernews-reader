import React, {useEffect, useState} from 'react';
import {ReactComponent as ReloadPage} from '../icons/refresh.svg';

export const Navbar = ({triggerReload, isLoading}) => {
	const [isActive, updateLoading] = useState(true)
	const triggerReloads = (e) => {
		e.preventDefault();
		triggerReload(e);
		updateLoading(!isActive);
	};
	useEffect(() => {
		updateLoading(true);
	}, [isLoading]);
	useEffect(() => {
		const timer = setTimeout(() => {
			updateLoading(false);
		}, 500);
		return () => clearTimeout(timer);
	}, [triggerReloads]);

	return(
		<nav>
			<div>
				<div className='branding'>
					<img src='/logo.png' className='brand-logo' alt='HN Reader' width='40' height='40'/>
					<div className='brand-name'>Hacker News</div>
				</div>
			</div>
			<button type='button'
			        className={`loader-button ${isActive ? 'active' : 'inactive'}`}
			        aria-label='Reload'
			        onClick={(e) => triggerReloads(e)}
			>
				<ReloadPage width='3rem' height='3rem' fill='#202939'/>
			</button>
		</nav>
	);
};