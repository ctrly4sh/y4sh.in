import Navbar from "./Navbar"
import "./index.css"

function App() {
  return (
    <>
      <Navbar/>
      <div className="bg-font-fira text-center">
        <div id="main-content">
         <h1>hii this is yash here,</h1> 
          <div id="keywords">
            <a className="hover:"  href="https://github.com/ctryly4sh">Programmer</a> ,
            <a href="https://github.com/ctryly4sh"> Open Source Contributor ,</a> 
            <a href="https://reddit.com"> Tech enthusiast.</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App