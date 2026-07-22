import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { About, Contact, Home } from '../BasicComponents';

const App = () => {
    return (
        <BrowserRouter>
            <nav>
                <Link to='/about?subject=me'>Me</Link> |{' '}
                <Link to='/about?subject=you&name=Danna'>You</Link> |{' '}
                <Link to='/contact' state={{source: 'ChatGPT'}}>Contact</Link>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
