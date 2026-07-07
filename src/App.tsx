import { Routes, Route } from 'react-router-dom';
import "./App.css";
import MainMenu from './features/mainMenu/page';
import Navbar from './utilities/navbar';

const App = () => {
    return (
        <>
            <div className='flex flex-row'>
                <Navbar />
                <Routes>
                    <Route path='/' element={<MainMenu />} />
                </Routes>
            </div>
        </>
    )
}

export default App;
