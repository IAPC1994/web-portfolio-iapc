import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
export const DarkMode = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        if(isDarkMode){
            localStorage.setItem('theme', "dark");
        }else{
            localStorage.setItem('theme', 'light');
        }
        setIsDarkMode(!isDarkMode);
    }

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
    }, [isDarkMode])
    

    return(
        <div className="fixed right-0 mt-1 mr-2">
            <button
                onClick={ toggleTheme }
                className='h-9 w-9 border-2 border-white shadow-lg rounded-full bg-gradient-to-t from-black to-blue-600 dark:bg-gradient-to-t dark:from-green-700 dark:to-green-400 text-white'
            >
                {
                    isDarkMode
                        ? <FontAwesomeIcon icon={ faMoon } size="lg"/>
                        : <FontAwesomeIcon icon={ faSun } size="lg"/>
                }
                
            </button>
        </div>
    );
}