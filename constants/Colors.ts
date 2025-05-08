/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

export type ColorTheme= {
  primaryText:string;
  secondaryText:string;
  background: string;
  tintIcon:string;
  tintButton:string;
  icon: string;
  backgroundSlice:string;
  primaryButton:string;
  secondaryButton:string;
  thirdButton:string;
  red:string;
  orange:string;
  blue: string;
  lightGreen:string;
  darkGreen:string;
};
const sharedColors={
  black:'#1C1C1D',
  blackDiluided:'#252728',
  white:'#FDFCFD',
  whiteDiluided:'#F5F6FC',
  auxiliaryRed:'#BA6A8C',
  auxiliaryOrange:'#D8794F',
  auxiliaryBlue:'#0F0BAB',
  auxiliaryLightGreen:'#0EFB69',
  auxiliaryDarkGreen:'#639E7B',
}
const darkColors={
  purple:'#7E5591',
  darkBrown:'#57333A',
  lightBrown:'#80584D',
  //color gradient
}
const lightColors={
  purple:'#976EAA',
  darkBrown:'#B38B80',
  lightBrown:'#CCA8AF',
  auxiliaryRed:'#BA6A8C',
  auxiliaryOrange:'#D8794F',
  auxiliaryBlue:'#0F0BAB',
  auxiliaryLightGreen:'#0EFB69',
  auxiliaryDarkGreen:'#639E7B',
  //color gradiente
}
type DarkColors= typeof darkColors;
type LightColors = typeof lightColors;
type SharedColors = typeof sharedColors;

export type Tcolors = ColorTheme & SharedColors & DarkColors & LightColors

type ColorPalettes={
  light:Tcolors;
  dark:Tcolors;
}
/**/
export const Colors = {
  light: {
    primaryText: '#1C1C1D',
    secondaryText:'#CCA8AF',
    background: '#FDFCFD',
    tintIcon:'#1C1C1D',
    tintButton:"#976EAA",
    icon: '#1C1C1D',
    backgroundSlice:'#F5F6FC',
    primaryButton:'#976EAA',
    secondaryButton:'#CCA8AF',
    thirdButton:'#B38B80',
    red:'#BA6A8C',
    orange:'#D8794F',
    blue: '#0F0BAB',
    lightGreen: '#0EFB69',
    darkGreen:'#639E7B',
    white:'#FDFCFD',
    whiteDiluided:'#F5F6FC',
    purple:'#976EAA',
    //...sharedColors,
    //...lightColors,
  },
  dark: {
    primaryText: '#FDFCFD',
    secondaryText:'#80584D',
    background: '#1C1C1D',
    tintIcon:'#FDFCFD',
    tintButton:'#7E5591',
    icon: '#FDFCFD',
    backgroundSlice:'#252728',
    primaryButton:'#7E5591',
    secondaryButton:'#80584D',
    thirdButton:'#57333A',
    red:'#BA6A8C',
    orange:'#D8794F',
    blue: '#0F0BAB',
    lightGreen: '#0EFB69',
    darkGreen:'#639E7B',
    white:'#FDFCFD',
    purple:'#7E5591',
    darkBrown:'#57333A',
    lightBrown:'#80584D',
    black:'#1C1C1D',
    blackDiluided:'#252728',
    //...sharedColors,
    //...lightColors,
  },
};
