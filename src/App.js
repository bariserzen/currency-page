
import React,{RouterProvider,createBrowserRouter} from 'react-router-dom';
import './index.css';
import RootLayout from './pages/RootLayout';
import Mainpage from './pages/Mainpage';
import Dövizpage from './pages/Dövizpage';
import KriptoPage from './pages/Kriptopage';
import AltinPage from './pages/AltinPage';
import ArbitrajPage from './pages/ArbitrajPage';




const router = createBrowserRouter([

  {
   path: '/',
   element: <RootLayout/>,
   children: [
    { index: true,         element:<Mainpage/> },
    { path: '/döviz',    element:<Dövizpage/> },
    { path: '/kripto',    element:<KriptoPage/> },
    { path: '/altin',    element:<AltinPage/> },
    { path: '/arbitraj',    element:<ArbitrajPage/> },
    

   ],
  },
]);


const App = () => {
 
 return <RouterProvider router={router}/>;
};

export default App;

