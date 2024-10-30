import Link from 'next/link';
import React from 'react';
import Links from './links/Links';
import styles from "./navbar.module.css"

const Navbar = () => {
	return (
		<section className={styles.container}>
			<Link className={styles.logo} href="/">LOGO </Link>
			<nav>
				<Links />
			</nav>
		</section>
	);
};

export default Navbar;
