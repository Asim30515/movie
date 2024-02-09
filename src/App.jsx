
import { useState } from "react";
import { useEffect } from "react";
import "./App.css"
import { BiArrowToTop } from "react-icons/bi";
import { BiArrowFromTop } from "react-icons/bi";

function App() {
 
  const [caunt, setCaunt] = useState(0);
  const [post, setPost] = useState([]);
  const [metn, setMetn] = useState("")
  const [show, setShow] = useState(false)

  const api = async () => {
    try {
      const sorgu = await fetch('http://localhost:3000/filmler')
      if(sorgu.ok){
        const cavab = await sorgu.json();
        setPost(cavab);
      }
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    api()
  }, [caunt])

  return (
    <>
    <div className="nav">
    <span>{caunt}</span>
    <button onClick={() => setCaunt(caunt + 1)}>+</button>
    <input type="text" onChange={(e) => setMetn(e.target.value)} />
    <p>{metn}</p>
    </div>

    <div className="inputs">
      <select>
        <option>Raiting</option>
        <option>Artan</option>
        <option>Azalan</option>
      </select>
      <input type="text" placeholder="Search"/>
      <div className="icons">
      <BiArrowToTop className="icon" />
      <BiArrowFromTop className="icon" />
      </div>
    </div>
      <div className="buttons">
        <button>All</button>
        <button>History</button>
        <button>Tension</button>
        <button>Action</button>
        <button>Adventure</button>
        <button>Fight</button>
      </div>
      <div className="umumi">
      {
        post.length > 0 && post.map(item => (
          <div className="card" key={item.id}>
            <div>
              <img className="photo" src={item.image} alt="" />
            </div>
            <div className="yazi">
              <span className="ad">{item.movie}</span>
              <span className="xal">{item.rating}</span>
            </div>
            <div>
              <a href={item.imdb_url}>Filme Kecid et</a>
            </div>
          </div>
          ))}
      </div>
    
    </>
  )
}
export default App
