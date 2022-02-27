timport React, { useState } from 'react'
import {Route,Routes,} from "react-router-dom";
import Navbar from './components/Navbar'
import Business from './pages/Business'
import Health from './pages/Health'
import General from './pages/General'
import Sports from './pages/Sports'
import Technology from './pages/Technology'
import Science from './pages/Science'
import Entertainment from './pages/Entertainment'
import LoadingBar from 'react-top-loading-bar'
import Footer from './components/Footer';


function App() {
  const pagesize = 6
  const [progress, setProgress] = useState(0)

  function handleProgress(progrssIncrease) {
    setProgress(progrssIncrease)
  }

  return (
    <>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<General seProgress={handleProgress} category="general" pagesize= {pagesize} />}></Route>
        <Route exact path="/health" element={<Health seProgress={handleProgress} category="health" pagesize= {pagesize} />}></Route>
        <Route exact path="/sports" element={<Sports seProgress={handleProgress} category="sports" pagesize= {pagesize} />}></Route>
        <Route exact path="/technology" element={<Technology seProgress={handleProgress} category="technology" pagesize= {pagesize} />}></Route>
        <Route exact path="/entertainment" element={<Entertainment seProgress={handleProgress} category="entertainment" pagesize= {pagesize} />}></Route>
        <Route exact path="/business" element={<Business seProgress={handleProgress} category="business" pagesize= {pagesize} />}></Route>
        <Route path="/science" element={<Science seProgress={handleProgress} category="science" pagesize= {pagesize} />}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
