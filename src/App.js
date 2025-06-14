
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Button } from "./components/ui/button";

function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6">Garage 13 App Tattoo ☠️</h1>
      <div className="space-x-4">
        <Button className="bg-red-600 hover:bg-red-700">Reservar Turno</Button>
        <Button variant="outline">Ver Portafolio</Button>
        <Button variant="outline">Mis Reservas</Button>
      </div>
      <p className="mt-6 text-sm">Síguenos en Instagram: <a className="text-red-500" href="https://instagram.com/garage13_tattoostudio" target="_blank">@garage13_tattoostudio</a></p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
