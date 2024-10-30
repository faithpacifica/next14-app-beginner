"use client"

import { usePathname } from 'next/navigation'
import styles from './navlink.module.css';
import Link from 'next/link';

const Navlink = ({ link }) => {

    const pathName = usePathname()

	return (
		<div >
            <Link 
            href={link.path} 
            className={`${styles.container} 
            ${pathName===link.path && styles.active }`}>
				{link.title}
			</Link>
		</div>
	);
};

export default Navlink;
 