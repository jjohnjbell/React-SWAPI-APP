import './App.css';
import AllCardsPage from './pages/AllCardsPage';
import CardsDetails from './pages/CardsDetail';
import AppHeader from './components/AppHeader.js'
import Breadcrumb from './components/Breadcrumb';
import AllDecksPage from '../src/components/AllDecksPage.js';

import {Outlet, Routes, Route} from 'react-router-dom'

function Layout() {
  return (
    <>
      <AppHeader />
      <Breadcrumb />
      <Outlet />
    </>
  )
} 

function App() {

  return (
    <div className='app--container'>
    {/* <> */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllCardsPage />} />
          <Route path="/details/:name" element={<CardsDetails />} />
          <Route path="AllDecks" element={<AllDecksPage />} />
          <Route path="/*" element={<><h1>404 - Not Found</h1></>} />
        </Route>
      </Routes>
       </div>
    // </>
   
  );
}

export default App;
