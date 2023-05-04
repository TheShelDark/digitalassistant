import { theme } from "./Theme/Theme";
import { Container, ThemeProvider } from "@mui/material";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Container sx={{mt: 10, mb: 10}}>
          <Outlet />
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
