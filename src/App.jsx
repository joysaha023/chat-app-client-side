import React, {lazy} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
const Home = lazy(() => import("./pages/Home"))
const Login = lazy(() => import("./pages/Login"))
const Chat = lazy(() => import("./pages/Chat"))
const Groups = lazy(() => import("./pages/Groups"))

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/chat/:chatId' element={<Chat></Chat>}></Route>
        <Route path='/groups' element={<Groups></Groups>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
