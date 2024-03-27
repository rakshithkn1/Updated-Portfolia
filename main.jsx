import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Layout from './Components/Layout.jsx';
import Home from './Home/Home.jsx';
import About from './Components/About/About.jsx';
import User from './Components/User/User.jsx';
// import Github, { githubInfoloade } from './Components/Github/Skills.jsx';
import Contact from './Contact/Contact.jsx';
import Skills from './Components/Skills/Skills.jsx';
import Projetcs from './Components/Projects/Projetcs.jsx';

const router = (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="home" element={<Home/>} />
        <Route path="company" element={<About />} />
        <Route path="user/:userid" element={<User />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Skills" element={<Skills />} />
        <Route path="projects" element={<Projetcs />} />

      </Route>
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {router}
    <App />
  </React.StrictMode>
);
