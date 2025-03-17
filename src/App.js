import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";
import Login from "./Login";
import Count from "./Count";
import CounterProfile from "./CounterProfile";
import CounterActivity from "./CounterActivity";
import Settings from "./Settings";

const App = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Admin as Parent Route */}
        <Route path="/admin" element={<Admin />}>
          <Route path="counterprofile" element={<CounterProfile />} />
          <Route path="counteractivity" element={<CounterActivity />} />
          <Route path="counter" element={<Count />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
  
  );
};

export default App;
