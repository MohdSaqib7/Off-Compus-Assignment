import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './components/main/Home';
import Movies from './components/main/Movies';
import './App.css';

function App(){
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Movies" element={<Movies />} />
                </Routes>
            </Router>
        </>
    )
}

export default App;