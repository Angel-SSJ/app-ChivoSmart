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
export const Colors:ColorPalettes = {
  light: {
    primaryText: sharedColors.black,
    secondaryText:lightColors.lightBrown,
    background: sharedColors.white,
    tintIcon:sharedColors.black,
    tintButton:lightColors.purple,
    icon: sharedColors.black,
    backgroundSlice:sharedColors.whiteDiluided,
    primaryButton:lightColors.purple,
    secondaryButton:lightColors.lightBrown,
    thirdButton:lightColors.darkBrown,
    red:sharedColors.auxiliaryRed,
    orange:sharedColors.auxiliaryOrange,
    blue: sharedColors.auxiliaryBlue,
    lightGreen: sharedColors.auxiliaryLightGreen,
    darkGreen:sharedColors.auxiliaryDarkGreen,
    ...sharedColors,
    ...lightColors,
  },
  dark: {
    primaryText: sharedColors.white,
    secondaryText:darkColors.lightBrown,
    background: sharedColors.black,
    tintIcon:sharedColors.white,
    tintButton:darkColors.purple,
    icon: sharedColors.white,
    backgroundSlice:sharedColors.blackDiluided,
    primaryButton:darkColors.purple,
    secondaryButton:darkColors.lightBrown,
    thirdButton:darkColors.darkBrown,
    red:sharedColors.auxiliaryRed,
    orange:sharedColors.auxiliaryOrange,
    blue: sharedColors.auxiliaryBlue,
    lightGreen: sharedColors.auxiliaryLightGreen,
    darkGreen:sharedColors.auxiliaryDarkGreen,
    ...sharedColors,
    ...darkColors,
  },
};