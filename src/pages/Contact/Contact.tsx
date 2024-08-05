import ContactForm from '@/components/ContactForm';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
	return (
		<section className={styles.container}>
			<h1>Contact</h1>
			<ContactForm />
		</section>
	);
};

export default Contact;
