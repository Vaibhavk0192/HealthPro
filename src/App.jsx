import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/navbar";
import { Home } from "./pages/HomePage/home";
import { Disease } from "./pages/DiseasePage/disease";
import { Medicine } from "./pages/MedicinePage/medicine";

function App() {
  return (

      <div className="App">
        
        <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={Home}/>
            <Route path="/disease" element={Disease}/>
            <Route path="/medicine" element={Medicine}/>
            <Route path="/" element={Home}/>
          </Routes>
        </main>
        </BrowserRouter>
        </div>

  );
}

export default App;
