import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/pages/Layout';
import PageNotFound from '@/pages/PageNotFound';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Resume from '@/pages/Resume';

const AppRoutes: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="contact" element={<Contact />} />
					<Route path="resume" element={<Resume />} />
					<Route path="*" element={<PageNotFound />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default AppRoutes;
