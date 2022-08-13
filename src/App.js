import React from "react"
import Navbar from "./components/nav"
import Main from "./components/main"
import "./App.css"

export default function App() {
  const[dark, setdark]=React.useState(true)
  function d(){
    setdark(prev => !prev)
  }
    return (
        <div className="container">
            <Navbar 
            toggleDarkMode={d} 
            darkMode={dark}
            />
            <Main 
             darkMode={dark}
            />
        </div>
    )
}