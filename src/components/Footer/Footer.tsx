import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaStackOverflow } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerCopywrite}>
				<p>
					&copy; {new Date().getFullYear()} Joe Mancini. All rights
					reserved.
				</p>
			</div>
			<div className={styles.footerIcons}>
				<Link
					to="https://www.linkedin.com/in/manc1n1"
					target="_blank"
					rel="noreferrer noopener"
				>
					<FaLinkedinIn />
				</Link>
				<Link
					to="https://github.com/manc1n1"
					target="_blank"
					rel="noreferrer noopener"
				>
					<FaGithub />
				</Link>
				<Link
					to="https://leetcode.com/u/manc1n1/"
					target="_blank"
					rel="noreferrer noopener"
				>
					<SiLeetcode />
				</Link>
				<Link
					to="https://stackoverflow.com/users/5137528/manc1n1"
					target="_blank"
					rel="noreferrer noopener"
				>
					<FaStackOverflow />
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
