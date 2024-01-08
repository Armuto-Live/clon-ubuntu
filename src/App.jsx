
import { Routes, Route } from 'react-router-dom'
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { Support18 } from "./pages/Support18";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/18-04" element={<Support18 />} />
    </Routes>
  );
}

export default App;