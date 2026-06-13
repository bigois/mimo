import { Route, Routes } from 'react-router-dom';
import { Contact, Home, Me, You } from '../BasicComponents';
import About from '../About';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}>
                <Route path="me" element={<Me />} />
                <Route path="you" element={<You />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
};

export default AppRoutes;
