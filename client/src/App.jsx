import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/Navbar'
import BackImage from './components/backimage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className=" bg-[#182268] h-screen ">
      <NavBar/>
      <BackImage/>
     
      
        
    </main>
  )
}

export default App
