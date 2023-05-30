
import './App.css';
import { useState } from 'react';
// import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import Content2 from './components/Content2';
import AddItems from './components/additems';
import Search from './components/search';

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
  const [Items, setItems] = useState([{ id: 1, item: 'rice', quantity: 1, checked: "False" }, { id: 2, item: 'atta', quantity: 1, checked: false }, { id: 3, item: 'suji', quantity: 1, checked: false }])
   const[search,setsearch]=useState("") 

  const handlecheck = (id) => {
    const listItems = Items.map((Items) =>
      Items.id === id ? { ...Items, checked: !Items.checked } : Items
    )
    setItems(listItems)
    localStorage.setItem("shoppinglist", JSON.stringify(listItems))
  }
  const handleDelete = (id) => {
    const ListItems = Items.filter((item) => item.id !== id)
    setItems(ListItems)
    localStorage.setItem("shoppinglist", JSON.stringify(ListItems))
  }


  const AddItem=(item)=>{
    const id=Items.length?Items[Items.length-1].id+1:1
    const newitem={id,checked:false,item}
    const listitems=[...Items,newitem]
    setItems(listitems)
    localStorage.setItem("shoppinglist", JSON.stringify(listitems))
  }
  
  const handleclick=(e)=>{
    console.log("submitted")
    e.preventDefault();
    if(!item) return;
    AddItem(item)
    setitem("")

  }
  return (
    <div className={`bg-${mode==="light"?"blue":"dark"} text-${mode==="dark"?"white":"dark"}`}>
      <Header className="id3" mode={mode} togglemode1={togglemode} text={text}/>
      <Search search={search} setsearch={setsearch}/>
      <AddItems newitem={item} setitem={setitem} handleclick={handleclick}/>
      
      <Content2 Items={Items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))} setItems={setItems} handleDelete={handleDelete} handlecheck={handlecheck}></Content2>
      <Footer  className="id3" mode={mode}/>
      
    </div>
  );
}

export default App;
