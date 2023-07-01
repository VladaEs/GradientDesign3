
import './App.css';
import { useState,useEffect } from 'react';
import MainImage from './components/MainImage/MainImage';
import SecondBlock from './components/SecondBlock/SecondBlockWrapper/SecondBlock';
import ThirdBlock from './components/ThirdBlock/BlockWrapper/ThirdBlockWrapper';
import FourthBlock from './components/FourthBlock/FourthBlockWrapper/FourthBlockWrapper';
import FifthBlock from './components/fifthBlock/BlockWrapper/FifthBlock';
import SixthBlock from './components/sixthBlock/SixthBlockWrapper/SixthBlockWrapper';
function App() {
  const [WidthScreen, SetWidthScreen]=useState(Number(window.innerWidth));

  const ResizeScreenHandler=()=>{
    SetWidthScreen(Number(window.innerWidth));
  }

  useEffect(()=>{
    window.addEventListener('resize',ResizeScreenHandler);
    return ()=>{
      window.removeEventListener('resize',ResizeScreenHandler);
    }
  },[])
  const isMobile= WidthScreen<=768;
  return (
    <>
      <MainImage isMobile={isMobile}/>
      <SecondBlock/>
      <ThirdBlock/>
      <FourthBlock/>
      <FifthBlock/>
      <SixthBlock isMobile={isMobile}/>
    </>
  );
}

export default App;
