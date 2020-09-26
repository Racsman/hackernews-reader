import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom'
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
			<div className='branding'>
				<NavLink to='/' activeClassName='active' className='brand'>
					<img src='/logo.png' className='brand-logo' alt='HN Reader' width='40' height='40'/>
					<div className='brand-name'>Hacker News</div>
				</NavLink>
				<ul className='navbar'>
					<li>
						<NavLink to='/newstories' activeClassName='active' isActive={(match, location) => {
							return ['/newstories', '/'].includes(location.pathname);
						}}>New</NavLink>
					</li>
					<li>
						<NavLink to='/topstories' activeClassName='active'>Top</NavLink>
					</li>
					<li>
						<NavLink to='/beststories' activeClassName='active'>Best</NavLink>
					</li>
					<li>
						<NavLink to='/askstories' activeClassName='active'>Ask</NavLink>
					</li>
					<li>
						<NavLink to='/showstories' activeClassName='active'>Show</NavLink>
					</li>
					<li>
						<NavLink to='/jobstories' activeClassName='active'>Jobs</NavLink>
					</li>
				</ul>
			</div>
			<button type='button'
			        className={`loader-button ${isActive ? 'active' : 'inactive'}`}
			        aria-label='Reload'
			        onClick={(e) => triggerReloads(e)}
			>
				<ReloadPage fill='#202939'/>
			</button>
		</nav>
	);
};