import {Tcolors} from "@/constants/Colors";
import {ThemeContext} from "@/constants/ThemeContext";
import {useContext} from "react";

interface ColorType{
    colors:Tcolors;
    applyColors:(colors:Tcolors)=>void;
}

const useColors=():ColorType=>{
    const store=useContext(ThemeContext);
    if(!store){
        throw new Error('useColors must be defined.');
    }

    return{
        applyColors:store.applyColors,
        colors:store.colors
    };
};

export default useColors;