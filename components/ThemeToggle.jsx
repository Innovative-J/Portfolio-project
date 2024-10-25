"use client";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa6";

const ThemeToggle = () => {
    const storedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null; 
    const [ theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('them', newTheme)
    }

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
    },[theme]);

    return (
        <div className={`theme bg-light dark:bg-dark`}>
            <button 
            onClick={toggleTheme}
            className="flex items-center justify-center border-2 border-gray-300 dark:border-gray-700 rounded-lg p-2 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-600 "
            >
                {theme === 'light' ? <FaMoon/> : <FaSun/>}
            </button>
        </div>
    );
};


export default ThemeToggle;