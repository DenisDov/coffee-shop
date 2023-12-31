import { createTheme } from '@shopify/restyle';

const palette = {
  black: '#000000',
  white: '#FFFFFF',
  gold: '#C67C4E',
  red: '#ED5151',
  rose: '#FFF5EE',

  gray50: '#EAEAEA',
  gray100: '#F9F9F9',
  gray200: '#9B9B9B',
  gray250: '#808080',
  gray300: '#2F2D2C',
  gray400: '#313131',
  gray500: '#2A2A2A',
  gray600: '#1C1C1C',

  green: '#36C07E',
};

const theme = createTheme({
  colors: {
    primary: palette.gold,
    background: palette.gray100,
    text: palette.gray300,
    muted: palette.gray200,
    muted250: palette.gray250,
    white: palette.white,
    black: palette.black,
    dark: palette.gray600,
    error: palette.red,
    stroke: palette.gray50,
    cup: palette.rose,

    debug: palette.green,
  },
  spacing: {
    xxs: 2,
    xs: 4,
    s: 8,
    sm: 12,
    m: 16,
    ml: 20,
    l: 24,
    xl: 40,
    xxl: 64,
    tabShadow: 24,
  },
  borderRadii: {
    xs: 4,
    s: 8,
    sm: 12,
    smm: 14,
    m: 16,
    l: 24,
    xl: 40,
    xxl: 64,
  },
  textVariants: {
    defaults: {
      fontSize: 16,
      fontFamily: 'Sora_400Regular',
      color: 'text',
    },
    semiBold: {
      fontFamily: 'Sora_600SemiBold',
    },
    button: {
      fontFamily: 'Sora_600SemiBold',
      color: 'white',
      textTransform: 'capitalize',
    },
  },
});

export type Theme = typeof theme;

export { theme };
