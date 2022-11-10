import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import UserLists from "./Pages/UserLists";
import ErrorPage from "./Pages/ErrorPage";
import NavBar from "./Components/NavBar";

function App() {
  const Persons = [
    {id:1, name: "Eya", age: 25, Adresse: "Hammem Chat" },
    {id:2, name: "Walid", age: 19, Adresse: "Algérie" },
    {id:3, name: "Fayçel", age: 35, Adresse: "Tunis" },
  ];
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Profile/:iddUser" element={<Profile Persons={Persons} />} />
        <Route path="/UserLists" element={<UserLists Persons={Persons} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
