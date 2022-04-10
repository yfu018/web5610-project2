import React, { useState } from "react";
import { UserContext } from "./context/UserContext";
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";
import Help from "./components/help";
import Home from "./components/home";
import Game from "./components/game";
import WelcomePage from './components/welcome-page'

export default function App() {
    const [value, setValue] = useState();

  return (
        // change view
        <div>
            <UserContext.Provider value={{value, setValue}}>
                <Router>
                    <Routes> 
                        <Route path="/" element={<WelcomePage />} />
                        <Route path="/help" element={<Help />} />
                        <Route path="/game/:difficulty" element={<Game />} />
                        <Route path="/home" element={<Home />} />
                    </Routes>
                </Router>
            </UserContext.Provider>

            {/* <Router>
                <Routes>
                    <Route path="/" element={<WelcomePage />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/game/:difficulty" element={<Game />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </Router> */}
        </div>
    )
}