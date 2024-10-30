import Link from 'next/link';
import React from 'react';
import Links from './links/Links';

const Navbar = () => {
	return (
		<section>
			<Link href="/">LOGO </Link>
			<nav>
				<Links />
			</nav>
		</section>
	);
};

export default Navbar;
