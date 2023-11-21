import { createTheme } from "@shopify/restyle";

const palette = {
  black: "#1C1C1C",
  white: "#FFFFFF",
  gold: "#C67C4E",
  red: "#ED5151",

  gray100: "#F9F9F9",
  gray200: "#9B9B9B",
  gray300: "#2F2D2C",
  gray400: "#313131",
  gray500: "#2A2A2A",

  yellow: "#FBBE21",
  green: "#36C07E",
};

const theme = createTheme({
  colors: {
    primary: palette.gold,
    background: palette.gray100,
    text: palette.gray300,
    mutedText: palette.gray200,
    btnText: palette.white,
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    xxl: 64,
  },
  borderRadii: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    xxl: 64,
  },
  textVariants: {
    defaults: {
      fontSize: 16,
      fontFamily: "Sora_400Regular",
      color: "text",
    },
    muted: {
      color: "mutedText",
    },
    button: {
      fontFamily: "Sora_600SemiBold",
      color: "btnText",
      textTransform: "capitalize",
    },
  },
});

export type Theme = typeof theme;

export { theme };
