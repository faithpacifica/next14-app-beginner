'use client';
import React, { useState } from 'react';
import styles from './links.module.css';
import Navlink from '../navLink/Navlink';
import Image from 'next/image';

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

const Links = () => {
	const [open, setOpen] = useState(false);
	const session = true;
	const isAdmin = true;

	return (
		<div className={styles.container}>
			{/* MAIN NAVBAR */}
			<div className={styles.links}>
				{links.map((link) => (
					<Navlink key={link.title} link={link} />
				))}
				{session ? ( //If there is user
					<>
						{isAdmin && <Navlink link={{ title: 'Admin', path: '/admin' }} />}
						<button className={styles.logout}>Logout</button>
					</>
				) : (
					//If there is no user
					<Navlink link={{ title: 'Login', path: '/login' }} />
				)}
			</div>
			{/* HAMBURGER MENU */}
			<button
				className={styles.menuButton}
				onClick={() => setOpen((prev) => !prev)}
			>
        <Image src="/images/hero.gif" alt="menu" width={24} height={24} />
			</button>
			{open && (
				<div className={styles.mobileLinks}>
					{links.map((link) => (
						<Navlink link={link} key={link.title} />
					))}
				</div>
			)}
		</div>
	);
};

export default Links;
