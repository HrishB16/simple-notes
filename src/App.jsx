import { useState } from 'react'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import './App.css'
import Alerting from './components/Alert';
import { BrowserRouter,Routes, Route } from "react-router-dom"
import Home from './components/Home';

function App() {
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Alerting alert={alert} />

       <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/lists" element={<div className='todo-app'>
           <TodoList showAlert={showAlert} />
            </div>} />
       </Routes>
      
    </BrowserRouter>
  )
}

export default App
