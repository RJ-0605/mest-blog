import React, {useState, createContext, useContext} from 'react'

const themeContext = createContext();


function useTheme(){

    const context = useContext(themeContext)
    id(!context){
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
  
    }


}