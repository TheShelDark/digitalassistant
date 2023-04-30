import { Button, ButtonGroup } from "@mui/material";
import { theme } from "./Theme/Theme";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1 className='font-bold text-2xl'>TEEEST</h1>
        <ButtonGroup className="flex flex-col w-1/3" variant="contained" aria-label="outlined primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>
    </ThemeProvider>
    
  );
}

export default App;
