import React from 'react';
import {
  BrowserRouter,
  // createBrowserRouter,
  // createRoutesFromElements,
  Route,
  // RouterProvider,
  Routes,
} from 'react-router-dom';

import Home from './pages/Home';
import ShowProduct from './pages/ShowProduct';
import Posts from './pages/Posts';
import ShowPost from './pages/ShowPost';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ShowProduct/>} />
        <Route path='/products/:id' element={<ShowProduct/>} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/posts/:id' element={<ShowPost />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
