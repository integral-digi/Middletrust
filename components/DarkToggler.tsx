"use client"
import { useState } from "react";

const DarkToggler = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
  
    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
      document.documentElement.classList.toggle('dark', isDarkMode);
    };
    
    return (
        <button 
            onClick={toggleDarkMode}
            className={isDarkMode ? 'dark w-6 h-6' : ''} >
                <img src="brightness.svg" className="w-6 h-6" />
        </button>
    );
  };
  
export default DarkToggler;