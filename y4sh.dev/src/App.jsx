import Navbar from "./Navbar"
import "./index.css"
const github = "https://github.com/ctrly4sh"
const medium = "https://medium.com"

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-font-fira text-center">
        <div id="main-content">
          <p className="text-2xl">
            hii this is yash here, <br />
            I write <a className="font-pixelify"  href={github} target="_blank">Code</a> and i <a className="font-pixelify"  href="#projects">Build</a> stuff with it.
          </p>
          <div id="keywords">
            <a className="hover:" href={github}>Programmer</a> ,
            <a href={github}> Open Source Contributor ,</a>
            <a href={medium}> Tech enthusiast.</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App