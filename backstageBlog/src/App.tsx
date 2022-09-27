import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './pages/login/Login'
import { useRoutes } from 'react-router-dom'
import routes from './router'

function App() {
  const [count, setCount] = useState(0)
  const element = useRoutes(routes)
  return (
    <div className="App">
      {element}
    </div>
  )
}

export default App
