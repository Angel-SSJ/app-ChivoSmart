import {Colors, Tcolors} from "@/constants/Colors";
import React, {FC,createContext, useState} from "react";

type ThemeContextType={
    colors:Tcolors;
    applyColors:(colors:Tcolors)=>void;
};

const ThemeContext = createContext<ThemeContextType | null>(null)

type Props={
    children?:React.ReactNode;
};

// @ts-ignore
const ThemeProvider:FC<Props>=({children})=>{
    const [colors, setColors]= useState(Colors.light);
    const applyColors=(colorTheme: Tcolors)=>{
        setColors(colorTheme);
    };

    return(
        <ThemeContext.Provider value={{applyColors,colors}}>
            {children}
        </ThemeContext.Provider>
    );
};
export {ThemeContext, ThemeProvider};