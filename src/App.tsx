import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AboutMe from "./component/AboutMe";
import Contact from "./component/Contact";
import Content from "./component/Content";
import Error from "./component/Error";
import Footer from "./component/Footer";
import Goal from "./component/Goal";
import Headers from "./component/Header";
import Home from "./component/Home";
function App() {
  return (
    <div className="App">
      <Headers />
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/home" Component={Home} />
          <Route path="/content" Component={Content} />
          <Route path="/contact" Component={Contact} />
          <Route path="/goal" Component={Goal} />
          <Route path="*" Component={Error} />
          <Route path="/about" Component={AboutMe} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
export default App;
