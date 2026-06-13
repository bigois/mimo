import { Link, Outlet } from 'react-router-dom';

const About = () => {
    return (
        <>
            <h1>About</h1>
            <nav>
                <Link to="/about/me">Me</Link> |{' '}
                <Link to="/about/you">You</Link>
            </nav>
            <Outlet />
        </>
    );
};

export default About;
