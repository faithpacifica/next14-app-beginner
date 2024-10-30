import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { Suspense } from 'react';
import Loading from '@/app/loading';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Next App',
	description: 'Next.js starter app',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Suspense fallback={<Loading/>}>
					<Navbar />
					{children}
					<Footer />
				</Suspense>
			</body>
		</html>
	);
}
