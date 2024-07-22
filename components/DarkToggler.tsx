"use client"
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import SunIcon from "@/public/images/SunIcon";
import SunIconDark from "@/public/images/SunIconDark";

export interface DarkProps {
  isDarkMode?: boolean;
  handleDark?: () => void;
}

const DarkToggler: React.FC<DarkProps> = () => { 
    const [isDarkMode, setIsDarkMode] = useState(true);
    
    const handleDark = () => {
      const newIsDark = !isDarkMode;
      setIsDarkMode(newIsDark);
      document.documentElement.classList.toggle('dark', newIsDark);
      // Save the dark mode preference in cookies
      Cookies.set("isDarkMode", newIsDark.toString(), { expires: 365 });
    }

    useEffect(() => {
      // Retrieve the dark mode preference from cookies
      const darkModePreference = Cookies.get("isDarkMode") === "true";
      setIsDarkMode(darkModePreference);
      document.documentElement.classList.toggle('dark', darkModePreference);
    }, []); 

    return (
        <button 
          onClick={handleDark}
          className="dark w-6 h-6 flex items-center justify-center"
        >
          { !isDarkMode ?
             <SunIconDark />
             : 
             <SunIcon  /> 
          }
        </button>
    );
  };
  
export default DarkToggler;