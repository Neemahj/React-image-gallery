import './App.css';
import { useState } from 'react';
import Images from "./Components/Images"

function App() {

    const [search, setSearch] = useState("");
    const [holder, setHolder] = useState(Images())

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value)
    } 

    const filteredImg = holder.filter((hold) => {
        const caps = hold.name.toLowerCase()
        return caps.includes(search)
    })
        
  
  
    return (
    
    <div className="App">
    
            <nav>
            <div className= "pagename">
                <img src="https://thumbs.dreamstime.com/b/animation-portrait-young-black-woman-dreadlocks-animation-portrait-young-black-woman-dreadlocks-background-179379079.jpg" alt="Dread head"/>
                <h1>Neemah.Co</h1>
            </div>
       
            <ul className="nav-items">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">More Info</a></li>
            </ul>

            <div className="ham_icon">
                <i className="fa-solid fa-bars"></i>
            </div>

        </nav>
    
      
        <div className="search_bar">
            <div className="icon" id="search_icon">
                <i className="bi bi-search"></i>
            </div>
            <input onChange={handleSearch} value={search} type="search" id="searchbar" placeholder="search image..." autofocus />
        </div>

        <div className="container" >
        { filteredImg.map((img) => {
            return (
            <div className="images" key={img.id}>
                <img className="blackwomen" src={img.image} alt={img.name}/>
                <p className="desc"><strong>{img.name}</strong></p>
            </div>
        )
        })
        }
</div>
   </div>
  );
}

export default App;
