import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Home from './pages/Home';
import ShowProduct from './pages/ShowProduct';
import Posts from './pages/Posts';
import ShowPost from './pages/ShowPost';
import About from './pages/About';
import Contact from './pages/Contact';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Home />} />
    {/* ADD ROUTE/PAGE FOR PRODUCT GALLERY */}
    <Route path='/products/:id' element={<ShowProduct/>} />
    <Route path='/posts' element={<Posts />} />
    <Route path='/posts/:id' element={<ShowPost />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    </>
  )
)
const App = () => {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
