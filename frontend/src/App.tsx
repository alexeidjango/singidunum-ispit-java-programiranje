import { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar.tsx";
import { SelectedTab } from "./types.ts";
import { Cars } from "./components/cars/Cars.tsx";

function App() {
  const [selectedTab, setSelectedTab] = useState(SelectedTab.CARS);
  return (
    <div className="container">
      <NavBar selectedTab={selectedTab} onTabChange={setSelectedTab} />
      {selectedTab === SelectedTab.CARS && <Cars />}
    </div>
  );
}

export default App;
