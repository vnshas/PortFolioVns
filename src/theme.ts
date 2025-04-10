import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

export let theme = createTheme({
  palette: {
    primary: {
      main: "#232323",
    },
    secondary: {
      main:"#4f8e3e",
    },
  },
  typography:{
    fontFamily: "Segoe UI"
  }
});

theme = responsiveFontSizes(theme)