import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer';

const heroData = [
  {text1:"Dive into", text2:"What you love"},
  {text1:"Indulge", text2:"Your passions"},
  {text1:"Give in to ", text2:"Your passions"},
]

const App = () => {
  
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

 useEffect(() => {
  setInterval(() => {
    setHeroCount((count) => {return count === 2 ?0 : count + 1})
  }, 4000);
 }, [])

  return (
    <div>
        <Background playStatus={playStatus} heroCount={heroCount} />
        <Navbar/>
        <Hero
          setPlayStatus={setPlayStatus}
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          playStatus={playStatus}
        />
        <Footer/>
    </div>
  )
}

export default App