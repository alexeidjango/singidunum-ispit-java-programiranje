import "./App.css";
import { Route, Routes } from "react-router";
import { Cars } from "./components/cars/Cars.tsx";
import { Layout } from "./components/Layout.tsx";
import { Drivers } from "./components/drivers/Drivers.tsx";
import { Travels } from "./components/travels/Travels.tsx";

function App() {
  // const [selectedTab, setSelectedTab] = useState(SelectedTab.CARS);
  return (
    <Layout>
      <Routes>
        <Route path="/">
          <Route index element={<Cars />} />
          <Route path="cars" element={<Cars />} />
          <Route
            path="cars/with-service-required"
            element={<Cars onlyWithServiceRequired={true} />}
          />
          <Route path="cars/:id/travels" element={<Travels />} />
          <Route path="drivers" element={<Drivers />} />
          <Route path="travels" element={<Travels />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
