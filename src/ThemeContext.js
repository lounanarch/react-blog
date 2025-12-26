import React, { useContext, useState } from 'react';

// Create the context for theme and theme update
export const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

// Custom hook to use the theme
export function useTheme() {
    return useContext(ThemeContext);
}

// Custom hook to use the function to toggle the theme
export function useThemeUpdate() {
    return useContext(ThemeUpdateContext);
}

// Theme provider component
export function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(true);

    // Toggle function for changing the theme
    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    );
}

// Exporting the necessary components and hooks
export default ThemeContext;
