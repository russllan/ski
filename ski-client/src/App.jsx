import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/main/HomePage";
import ResortPage from "./pages/resort/ResortPage";
import Contacts from "./pages/contacts/ContactsPage";
import Header from "./components/header/Header";
import ShopsPage from "./pages/shops/ShopsPage";
import BranchPage from "./pages/branch/BranchPage";
import EquipmentPage from "./pages/equipment/EquipmentPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shops" element={<ShopsPage />} />
          <Route path="/resorts" element={<ResortPage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/branch" element={<BranchPage />} />
          <Route path="/equipment" element={<EquipmentPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
