import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
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
