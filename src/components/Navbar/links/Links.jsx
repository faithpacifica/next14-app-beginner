import React from 'react';

import styles from "./links.module.css"
import Navlink from '../navLink/Navlink';

const Links = () => {
	const links = [
		{
			title: 'Homepage',
			path: '/',
		},
		{
			title: 'About',
			path: '/about',
		},
		{
			title: 'Contact',
			path: '/contact',
		},
		{
			title: 'Blog',
			path: '/blog',
		},
	];

	return (
		<div className={styles.links}>
			{ links.map((link )=>( 
				<Navlink key = {link.title} link={link}/>
      ))}
		</div>
	);
};

export default Links;
