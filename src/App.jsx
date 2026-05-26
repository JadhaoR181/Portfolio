

import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Reveal from "./components/Reveal";

import {

  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    
    <BrowserRouter>

<Routes>

<Route

path="/"

element={

<>

<Navbar/>

<Home/>

<About/>

<Skills/>

<Projects/>

<Contact/>

<Footer/>

</>

}

/>

<Route

path="/projects/:slug"

element={
<ProjectDetails/>
}

/>

</Routes>

</BrowserRouter>

  );
}

export default App;