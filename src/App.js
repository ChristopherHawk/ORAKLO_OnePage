
import React, {useState, useEffect}  from 'react';
import {  Container } from 'semantic-ui-react';
import './App.css';
import './components/visual/css/panal.css';
//--------------Nav----------------//
import NewNav from './components/newNav';
//--------------Stars----------------//
import Parallax from './components/visual/parallax';

//--------------Pages----------------//
//#Home
import Home from './page/home/home';
//#Team
import Slide from './page/home/parts/teamSlide';
//#Contact
import Contact from './page/contact/contact';

//--------------Images----------------//
import Logo from './assets/logo.png';
import TeamPicture from './assets/change/team.gif';
import QuestionPicture from './assets/change/question.gif';
import MailPicture from './assets/change/mail.gif';
import MenuIcon from './assets/change/menuIcon.webp';
import voiceIcon from './assets/change/voice.gif';
import Background from './assets/background.jpg';

import BGHome from './assets/bgHome.jpg';

//Voice Oraklo
import MyVoice from './assets/answer1.mp3';


//Control Description
import Controls from './page/about/listenOrakle';


function App() {

  //Special Menu 
  const [tittle, setTittle] = useState('ORAKLO');
  const [colorBG, setColorBG] = useState('tab-home');
  const [btn, setBtn] = useState([]);
  const [btn2, setBtn2] = useState([]);
  const [imgCenter, setImgCenter] = useState(Logo);
  const [shadowBg, setShadowBg] = useState(BGHome);
  const [shadowBgState, setShadowBgState] = useState('no-repeat');
  const [shadowBgSize, setShadowBgSize] = useState('cover');
  const [shadowBgPosition, setShadowBgPosition] = useState('center');
  const [openCentralMenu, setOpenCentralMenu] = useState('NewMenu');
  
  useEffect(() => {
    homeViewOver()
    homeView()
    aboutViewOver()
    aboutView()
    TeamViewOver()
    TeamView()
    mailViewOver()
    mailView()
    RadialOver()
    MouseOut()
   
   
  },[])// eslint-disable-line react-hooks/exhaustive-deps
  
  
  //Central Menu
  const openMenu = () =>{
    setOpenCentralMenu('NewMenu  active')
    setColorBG('tab-home')
 }
  
 
  
  const closeMenu = () =>{
    setOpenCentralMenu('NewMenu')    
 }
  

// Home
const homeViewOver = () =>{
  setTittle('ORAKLO')
  setImgCenter(Logo)
  setColorBG('tab-home')
  setBtn()
  setBtn2()
  
}
const homeView = () =>{
  setTittle('ORAKLO')
  setImgCenter(Logo)
  setColorBG('tab-home')
  setBtn()
  setBtn2()
  
}
// About
const aboutViewOver = () =>{
  setTittle('¿Qué es ORAKLO?')
  setImgCenter(QuestionPicture)
  setColorBG('tab-home')
  setBtn()
  setBtn2()
  
  
}

const aboutView = () =>{
  setTittle('¿Qué es ORAKLO?')
  setColorBG('tab-home2')
  setShadowBg('')
  setImgCenter(voiceIcon)
  setBtn()
  setBtn2(<iframe src={MyVoice} allow="autoplay" id='voice'/>)
  
  

}
const aboutControls= () =>{
  setTittle('¿Qué es ORAKLO?')
  setImgCenter(QuestionPicture)
  setBtn()
  setBtn2(
  <Controls AgainListen={AgainListen} />)
  
  setColorBG('tab-home')
  
  
}



// About [Again]
const AgainListen= () =>{

  setTittle('¿Qué es ORAKLO?')
  setImgCenter(voiceIcon)  
  setShadowBg('')
  setBtn()
  setBtn2(<iframe src={MyVoice} allow="autoplay" id='voice' onended={aboutControls}/>)
  
  setColorBG('tab-home2')
 
  
}





// Team
const TeamViewOver = () =>{
  setTittle('NM-ORAKLO')
  setImgCenter(TeamPicture)
  setColorBG('tab-home')
  setBtn2()
  
}
const TeamView = () =>{
  setTittle('NM-ORAKLO')
  setImgCenter(TeamPicture)
  setColorBG('tab-home')
  setBtn2(<Slide setImgCenter={setImgCenter} selectBGround={setShadowBg} repeatBG={setShadowBgState}
    widthsBG={setShadowBgSize} positionBG={setShadowBgPosition} setTittle={setTittle}/>)
 
}
// Contact

const mailViewOver = () =>{
  setTittle('Contacto')
  setImgCenter(MailPicture)
  setColorBG('tab-home')
  setBtn()
  
}
const mailView = () =>{
  setTittle('Contacto')
  setImgCenter(MailPicture)
  setColorBG('tab-home')
  setBtn2(<Contact/>)
  
}
  //view center default
  const MouseOut = () =>{
    setTittle('ORAKLO')
    setImgCenter(Logo)
    setColorBG('tab-home')
    setBtn()
    setBtn2()
    
  }
  const RadialOver = () =>{
    setTittle('Radial Menu')
    setImgCenter(MenuIcon)
    setColorBG('tab-home')
    setBtn()
    setBtn2()
    closeMenu()
   
  }

  
  return (
  <Container style={{background:`url(${shadowBg})`, backgroundPosition:`${shadowBgPosition}`, backgroundRepeat:`${shadowBgState}`, backgroundSize:`${shadowBgSize}`}}  fluid>
    
    <Parallax/>
    <Home     
    colorBG={colorBG}
    openCentralMenu={openCentralMenu}
    openMenu={openMenu}
    closeMenu={closeMenu}
    imgTeam={setImgCenter} 
    picture={imgCenter} 
    Logo={Logo}
    divBtn={setBtn}
    divBtn2={setBtn2}
    btnFooter={btn}
    BtnPages={btn2}
    divTittle={setTittle}
    contentTittle={tittle}
    setShadowBg={setShadowBg}
    />
    
    <NewNav 
    radialMenu={RadialOver}
    selectBGround={setShadowBg} 
    repeatBG={setShadowBgState}
    widthsBG={setShadowBgSize}
    homeClick={homeView}
    homeOver={homeViewOver}
    aboutClick={aboutView} 
    aboutOver={aboutViewOver}
    teamClick={TeamView} 
    teamOver={TeamViewOver}
    contactClick={mailView}  
    contactOver={mailViewOver}
    outFocus={ MouseOut}/>
  
  </Container>  
  );
}

export default App;
