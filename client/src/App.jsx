import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className=" bg-blue-700 h-screen">
      <NavBar/>
      
        
    </main>
  )
}

export default App
