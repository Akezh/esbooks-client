import { DefaultTheme } from 'react-native-paper';

const THEME = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    accent: '#00A400',
    error: '#DC3545',
    inactively: '#616161',
    placeholder: '#A8B6C8',
    primary: '#0088CC',
    text: '#212121',
    warrning: '#ffc107',
  },
  fonts: {
    ...DefaultTheme.fonts,
    bold: 'Roboto-Bold',
    light: 'Roboto-Light',
    logo: 'Roboto-Light',
    medium: 'Roboto-Medium',
    regular: 'Roboto-Regular',
    thin: 'Roboto-Thin',
  },
};

export default THEME;
