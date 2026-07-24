import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ServerError from "./pages/ServerError";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/:username/dashboard" element={<Dashboard />} />
          <Route path="/server-error" element={<ServerError />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
