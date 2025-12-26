

import React, { useContext } from 'react';
import { ThemeContext, useThemeUpdate } from './ThemeContext';
import { themeStyles as classThemeStyles } from './ClassContextComponent';

export default function FunctionContextComponent() {
    const darkTheme = useContext(ThemeContext); // Use the context here
    const toggleTheme = useThemeUpdate(); // Use the update function
    // Correct theme styles with conditional logic
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#FFF' : '#333',
        padding: '2rem',
        margin: '2rem',
    };
    return (
        <div style={themeStyles}>
            Function Theme
        </div>
    );
}