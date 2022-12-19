import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import { Routes, Route} from 'react-router-dom';
import Main from './components/pages/Main';
import Explore from './components/pages/Explore';
import Create from './components/pages/Create';
import ConnectWallet from './components/pages/ConnectWallet';
import ItemPage from './components/ItemPage/ItemPage';


function App() {
  
  return (
    <div>
      <Header/>

      <Routes>
        <Route path = '/' element = {<Main/>} />

        <Route path = '/:contentType/:id' element = {<ItemPage/>} />

        <Route path = '/explore' element = {<Explore/>} />

        <Route path = '/create' element = {<Create/>} />

        <Route path = '/connectWallet' element = {<ConnectWallet/>} />
      </Routes>

      <Footer/>
   </div>
  )
}

export default App;
