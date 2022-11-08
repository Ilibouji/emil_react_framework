import Home from "./pages/Home";
import Navbar from "./components/Navbar.js";
import Account from "./pages/Account";
import Dashboard from "./pages/Dashboard";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateTask from "./pages/CreateTask";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <section className="App">
          <Navbar />
          <section className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/register" element={<Register />} />
              <Route path="/create-task" element={<CreateTask />} />
              <Route
                path="/account"
                element={
                  <ProtectedRoute>
                    <Account />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />} />
            </Routes>
          </section>
        </section>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
