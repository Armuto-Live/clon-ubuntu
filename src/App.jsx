
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { Support18 } from "./pages/Support18";
import { DataProvider } from './context/Context';

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/18-04" element={<Support18 />} />
      </Routes>
    </DataProvider>
  );
}

export default App;