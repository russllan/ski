import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/main/HomePage";
import ResortPage from "./pages/resort/ResortPage";
import Shops from "./pages/shop/ShopPage";
import Contacts from "./pages/contacts/ContactsPage";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/resorts" element={<ResortPage />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
