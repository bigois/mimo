import { useLocation, useNavigate } from 'react-router-dom';
import LocationInfo from '../LocationInfo';

const Home = () => {
    const location = useLocation();
    return <LocationInfo title='Home' location={location} />;
};

const About = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <>
            <LocationInfo title='About' location={location} />
            {/* [replace] option replaces the current route with the new one and does not add it to the history */}
            <button onClick={() => navigate('/', { state: { source: 'AboutPage' }, replace: true })}>Back to home</button>
        </>
    );
};

const Contact = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <>
            <LocationInfo title='Contact' location={location} />
            <button onClick={() => navigate(-1)}>Go back</button>
        </>
    );
};

export { Home, About, Contact };
