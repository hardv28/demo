import React,{ useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter as Router,
  
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {


  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=> {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode has been enabled","success");
      document.title = 'Demo - DarkMode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
      // document.title = 'Demo - LightMode';
    }
  }

  


  return (
    <>
      <Router>
      <Navbar title="Demo" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze"  mode={mode} toggleMode={toggleMode}/>} />
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
