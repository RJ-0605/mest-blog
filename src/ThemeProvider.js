import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

function ThemeProvider({ children }) {
    const [themeState, setThemeState] = useState("light")

    return (
        <ThemeContext.Provider value={[themeState, setThemeState]}>
            { children}
        </ThemeContext.Provider>
    )
}

/*
this one is for the direct css 

function ThemeProvider({ children }) {
    const [themeState, setThemeState] = useState("white")

    return (
        <ThemeContext.Provider value={[themeState, setThemeState]}>
            { children}
        </ThemeContext.Provider>
    )
}
*/

export default ThemeProvider;