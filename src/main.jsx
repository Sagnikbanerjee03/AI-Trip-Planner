import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateTrip from './Create-trip/index.jsx'
import Header from './components/custom/Header.jsx'
const router=createBrowserRouter([{

  path:'/',
  element:<App/>
},
{path:'/Create-trip',
   element:<CreateTrip/>
}



])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <RouterProvider router={router}/>
  </StrictMode>,
)