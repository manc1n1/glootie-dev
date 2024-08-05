import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Squeeze as Hamburger } from 'hamburger-react';
import styles from './Header.module.css';

const Header: React.FC = () => {
	const [isOpen, setOpen] = useState<boolean>(false);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	const toggleMobileMenu = () => {
		setOpen(!isOpen);
		scrollToTop();
	};

	return (
		<header className={styles.header}>
			<div className={styles.headerBrand}>
				<Link to="/" onClick={scrollToTop}>
					glootie.dev
				</Link>
			</div>
			<nav
				className={`${styles.headerNav} ${
					isOpen ? styles.headerNavOpen : ''
				}`}
			>
				<Link to="/" onClick={toggleMobileMenu}>
					Home
				</Link>
				<Link to="about" onClick={toggleMobileMenu}>
					About
				</Link>
				<Link to="contact" onClick={toggleMobileMenu}>
					Contact
				</Link>
				<Link to="resume" onClick={toggleMobileMenu}>
					Resume
				</Link>
			</nav>
			<div className={styles.headerToggle}>
				<Hamburger
					toggled={isOpen}
					toggle={setOpen}
					size={25}
					label="Show menu"
				/>
			</div>
		</header>
	);
};

export default Header;
