import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CustomerForm from './CustomerForm.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="App">
            <CustomerForm />
        </div>
      
    </>
  )
}

export default App
