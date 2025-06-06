import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Discovery from "./pages/Discovery";
import Bakery from "./pages/Bakery";
import Following from "./pages/Following";
import Library from "./pages/Library";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/discovery" element={<Discovery/>} />
        <Route path="/bakery" element={<Bakery />} />
        <Route path="/Following" element={<Following />} />
        <Route path="/library" element={<Library />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
