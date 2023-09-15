import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/navbar";
import { Home } from "./pages/HomePage/home";
import { Disease } from "./pages/DiseasePage/disease";
import { Medicine } from "./pages/MedicinePage/medicine";

import Chatbot from "./components/Chatbot/chatbot";

import Profile from "./pages/Profile/profile";
import PatientDetails from "./pages/PatientDetails/patientDetails";


function App() {
  return (

      <div className="App">
        
        <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <main>    
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/disease" element={<Disease/>}/>
            <Route path="/medicine" element={<Medicine/>}/>
            <Route path="/profile" element={<Profile/>}/>

            <Route path="/chatbot" element={<Chatbot />} />

            {/* <Route path="/users/:userId" component={<Profile/>} /> */}
            <Route path="/patientDetails" element={<PatientDetails />} />

          </Routes>
        </main>
        </BrowserRouter>
        </div>

  );
}

export default App;
