import './App.css'
import { useState } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Profile from './components/Profile'
import LoginForm from './components/LoginForm'
import { AuthContext } from './components/AuthContext'

function App() {
  const [user, setUser] = useState({
    name:"",
    email: "",
    password: "",
    IsAuth:false,
  });
  function Login(data){
        setUser({
        name:data.name,
        email:data.email,
        isAuth:true
    })
  }
  return (
    <>
      <div style={{ background: '#1e1f27' }}>
        <Navbar />
      </div>
       <AuthContext.Provider value={{user, Login}}>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/login' element={<LoginForm />}/>
        </Routes>
      </AuthContext.Provider>
    </>
  )
}

export default App