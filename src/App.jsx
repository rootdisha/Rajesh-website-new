import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllRouter from './AllRouters/AllRouter'
import Nav from './Component/Nav'
import Footer from "./Component/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    < >
    <div className='font-[ppns]'>

    <Nav />
    <AllRouter />
    <Footer />
    </div>
    </>
  )
}

export default App
