import { useState } from 'react';
import styles from './ContactForm.module.css';

interface FormData {
	name: string;
	email: string;
	message: string;
}

const ContactForm: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		message: '',
	});
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Form Data:', formData);
		setIsSubmitted(true);
	};

	return (
		<>
			{isSubmitted ? (
				<div>
					Thank you for contacting me,
					<span className={styles.formSpan}> {formData.name}</span>!
				</div>
			) : (
				<form onSubmit={handleSubmit}>
					<div className={styles.formField}>
						<input
							className={styles.formInput}
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							autoComplete="name"
							required
						/>
						<label
							htmlFor="name"
							className={
								formData.name
									? `${styles.formLabel} ${styles.filled}`
									: `${styles.formLabel}`
							}
						>
							Name
						</label>
					</div>
					<div className={styles.formField}>
						<input
							className={styles.formInput}
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							autoComplete="email"
							required
						/>
						<label
							htmlFor="email"
							className={
								formData.email
									? `${styles.formLabel} ${styles.filled}`
									: `${styles.formLabel}`
							}
						>
							Email
						</label>
					</div>
					<div className={styles.formField}>
						<textarea
							className={styles.formTextarea}
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							required
						/>
						<label
							htmlFor="message"
							className={
								formData.message
									? `${styles.formLabel} ${styles.filled}`
									: `${styles.formLabel}`
							}
						>
							Message
						</label>
					</div>
					<button className={styles.formBtn} type="submit">
						Submit
					</button>
				</form>
			)}
		</>
	);
};

export default ContactForm;
