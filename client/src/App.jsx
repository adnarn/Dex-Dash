import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogReg from './Components/LogReg/LogReg';
import Home from './Components/Home';
import AddItem from './Components/Add Item/AddItem';
import MainContent from './Components/MainContent';
import UpdateItem from './Components/Update';
import HomeDash from './HomeContents';
import Profile from './ProfileSetting';


function App() {
  return (
    <BrowserRouter>
         <>
         <Home />
          <Routes>
                 <Route path = '/'  element ={<HomeDash />} />
                 <Route path = '/clipBoard'  element ={<MainContent />} />
                 <Route path = '/login'  element ={  <LogReg />} />  
                 <Route path = '/add'  element ={  <AddItem />} />  
                 <Route path="/update/:id" element={<UpdateItem />} />
                 <Route path="/profile" element={<Profile />} />

            </Routes>
        </>
    </BrowserRouter>
  );
}

export default App;