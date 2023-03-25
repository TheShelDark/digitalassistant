import React from "react";
import PageLayout from "./components/PageLayout";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Chat from "./components/Chat";
import Faq from "./components/Faq";
//test
function App() {
  return (
    <BrowserRouter>
        <PageLayout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/chat" element={<Chat />} />
            <Route exact path="/faq" element={<Faq />} />
          </Routes>
        </PageLayout>
    </BrowserRouter>
  );
}

export default App;
