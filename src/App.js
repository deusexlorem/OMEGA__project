import './App.css';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Main from './components/pages/Main';
import Explore from './components/pages/Explore';
import Create from './components/pages/Create';
import ConnectWallet from './components/pages/ConnectWallet';
import {ItemPage, ItemLoader} from './components/ItemPage/ItemPage';
import Layout from './components/Layout/Layout';


function App() {
  
  const router = createBrowserRouter(createRoutesFromElements(
        <Route path = '/' element = {<Layout/>}>
          <Route index element = {<Main/>} />
          <Route path = ':contentType/:id' element = {<ItemPage/>} loader = {ItemLoader}/>
          <Route path = 'explore' element = {<Explore/>} />
          <Route path = 'create' element = {<Create/>} />
          <Route path = 'connectWallet' element = {<ConnectWallet/>} />
        </Route>
  ))

  return (
    <div>
      
    <RouterProvider router={router}/>

   </div>
  )
}

export default App;
