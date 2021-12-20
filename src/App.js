import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Error from "./components/Error";
import About from "./components/About";
import Home from "./components/Home";
import Alert from "./components/Alert";
import User from "./components/User";
import './App.css'
function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <NavBar />

        <main className="container mx-auto px-3 pb-12">
          <Alert/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/user/:login" element={<User />} />
            <Route path="*" element={<Error />} />
            <Route path="/notfound" element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;