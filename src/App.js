import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Profile />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
      <Navbar />
    </>
  );
}

export default App;
