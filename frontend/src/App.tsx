import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Blogpost from "./pages/Blogpost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/blog/:slug" element={<Blogpost />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
