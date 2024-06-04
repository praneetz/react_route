import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Components/Home/Home.jsx'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from './Components/About/About.jsx';
import Layout from './Layout.jsx';
import User from './Components/User/User.jsx';
import Github , {getGithubInfo} from "./Components/Github/Github.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="about" element={<About />}/>
      <Route path="/" element={<Home />}/>
      <Route path="user/" element={<User />}>
        <Route path=":userId" element={<User />}/>
      </Route>
      <Route 
      loader = {getGithubInfo}
      path="github"
       element={< Github/>}/>
      <Route path="*" element={"Not found"}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
