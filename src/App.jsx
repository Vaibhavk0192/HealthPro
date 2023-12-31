import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/navbar";
import { Home } from "./pages/HomePage/home";
import { Disease } from "./pages/DiseasePage/disease";
import { Medicine } from "./pages/MedicinePage/medicine";

import Profile from "./pages/Profile/profile";
import PatientDetails from "./pages/PatientDetails/patientDetails";
import { AuthContextProvider } from "./context/AuthContext";
import Register from "./pages/Register/register";
import Login from "./pages/Login/login";
import Chatbot from "./pages/Chatbot/chatbot.jsx"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
          <header>
            <Navbar />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/disease" element={<Disease />} />
              <Route path="/medicine" element={<Medicine />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/users/:userId" component={<Profile />} />
              <Route path="/patientDetails" element={<PatientDetails />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/chatbot" element={<Chatbot />} />

            </Routes>
          </main>
        </AuthContextProvider>
      </BrowserRouter>
    </div>

  );
}

export default App;
