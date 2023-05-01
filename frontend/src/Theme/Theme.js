import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme_colors = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#d90429',
          contrastText: '#FDFFFC',
        },
        secondary: {
          main: '#FDFFFC',
        },
        error: {
          main: '#E3302F',
        },
        info: {
          main: '#928fc8',
        },
        success: {
          main: '#44DA5D',
        },
        background: {
          default: '#FDFFFC',
        },
        text: {
          primary: '#010A13',
        },
    },
    props: {
        MuiTooltip: {
            arrow: true,
        },
    }
})

export const theme = responsiveFontSizes(theme_colors)