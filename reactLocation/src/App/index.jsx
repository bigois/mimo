import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '../AppRoutes';
import NavBar from '../NavBar';
import './styles.css';

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <AppRoutes />
        </BrowserRouter>
    );
};

export default App;
