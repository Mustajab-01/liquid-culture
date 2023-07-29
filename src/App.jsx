import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage, AboutPage, ErrorPage, SingleLiquidPage } from './pages';
import { Navbar } from './components';
const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/liquid/:id' element={<SingleLiquidPage />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </Router>
    );
};

export default App;
