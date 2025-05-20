import axios from 'axios'
import { useState } from 'react'
import { Routes, Route, Router } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { UserContextProvider } from '../context/userContext'
import Home from './pages/website/Home'
import Register from './pages/website/Register'
import Login from './pages/website/Login'
import MyProfile from './pages/interface/MyProfile'
import ShopNFCCards from './pages/website/ShopNFCCards'
import WhiteCard from './pages/website/WhiteCard'
import BlackCard from './pages/website/BlackCard'
import HowItWorks from './pages/website/HowItWorks'
import FAQ from './pages/website/FAQ'
import HelpCentre from './pages/website/HelpCentre'
import Reviews from './pages/website/Reviews'
import WhatIsNFC from './pages/website/WhatIsNFC'
import ContactUs from './pages/website/ContactUs'
import Policies from './pages/website/Policies'
import ScrollToTop from './components/ScrollToTop';


axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <Toaster position='bottom-right' toastOptions={{ duration: 2000 }} />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/myprofile' element={<MyProfile />} />
        <Route path='/shopnfccards' element={<ShopNFCCards />} />
        <Route path="/shopnfccards/whitecard" element={<WhiteCard />} />
        <Route path="/shopnfccards/blackcard" element={<BlackCard />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/whatisnfc' element={<WhatIsNFC />} />
        <Route path='/howitworks' element={<HowItWorks />} />
        <Route path='/helpcentre' element={<HelpCentre />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/policies' element={<Policies />} />
      </Routes>
    </UserContextProvider>
  )
}

export default App
