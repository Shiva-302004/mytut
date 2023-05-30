
import './App.css';
import { useState } from 'react';
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import Content2 from './components/Content2';
import AddItems from './components/additems';

function App() {
  const [mode, setmode] = useState("dark")
  const [text, settext] = useState("light mode")
  
  let togglemode = () => {


    if (mode === "light") {
      setmode("dark")
      settext("light mode")
      document.body.style.backgroundColor="black"
    }
    else {
      setmode("light")
      settext("darkmode")
      document.body.style.backgroundColor="white"
    }
  }
  const [item, setitem] = useState("")

  const handleclick=()=>{
    console.log("submitted")
  }

  return (
    <div className={`bg-${mode==="light"?"blue":"dark"} text-${mode==="dark"?"white":"dark"}`}>
      <Header className="id3" mode={mode} togglemode1={togglemode} text={text}/>
      <AddItems newitem={item} setitem={setitem} handleclick={handleclick}/>
      {/* <Content className="id2"   /> */}
      <Content2></Content2>
      <Footer  className="id3" mode={mode}/>
      
    </div>
  );
}

export default App;
