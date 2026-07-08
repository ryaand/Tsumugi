import { Routes, Route } from 'react-router-dom';
import "./App.css";
import MainMenu from './features/mainMenu/page';
import Navbar from './utilities/navbar';
import { useEffect } from 'react';
import SettingMenu from './features/settingMenu/page';

const App = () => {
    useEffect(() => {
        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault();
        };

        document.addEventListener('contextmenu', handleContextMenu)

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu)
        }
    }, [])

    return (
        <>
            <div className='flex flex-row justify-between min-h-screen w-full'>
                <Navbar />
                <main className='flex-1'>
                    <Routes>
                        <Route path='/' element={<MainMenu />} />
                        <Route path='/settings' element={<SettingMenu />} />
                    </Routes>
                </main>
            </div>
        </>
    );
};

export default App;