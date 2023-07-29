import { Link } from 'react-router-dom';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { useState } from 'react';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    const links = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
    ];

    const toggleDarkMode = () => {
        if (!darkMode) {
            document.body.style.backgroundColor = '#515151';
            document.body.style.color = 'white';
        } else {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
        }

        setDarkMode(!darkMode);
    };

    const darkModeButton = darkMode ? (
        <MdOutlineLightMode
            className='text-black text-2xl hover:text-cyan-300 cursor-pointer'
            onClick={toggleDarkMode}
        />
    ) : (
        <MdOutlineDarkMode
            className='text-black text-2xl hover:text-cyan-300 cursor-pointer'
            onClick={toggleDarkMode}
        />
    );

    return (
        <header className='z-50 backdrop-blur-sm sticky inset-0 bg-neutral-600/80 text-white select-none shadow-2xl'>
            <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
                <h1 className={`text-2xl font-bold gradientText ml-3`}>
                    Liquid Culture
                </h1>
                <nav className='md:ml-auto flex flex-wrap items-center justify-center font-semibold bg-slate-100/30 text-white px-4 py-2 rounded-md shadow-inner'>
                    {links.map(link => (
                        <Link to={link.path} className='btn1 py-1 px-3' key={link.path}>
                            {link.label}
                        </Link>
                    ))}
                    {darkModeButton}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
