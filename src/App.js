
import React, {useState, useEffect}  from 'react';
import {  Container, Header } from 'semantic-ui-react';
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
import BGHome from './assets/bgHome.jpg';
//Voice Oraklo
import MyVoice from './assets/myV.mp3';
//Control Description
import Controls from './page/about/listenOrakle';
//Sound Page
import SoundPage from './assets/Vitality.mp3';



function App() {

  //Special Menu 
  const [tittle, setTittle] = useState('ORAKLO');
  const [colorBG, setColorBG] = useState('tab-home');
  const [subTitle, setSubTitle] = useState([]);
  const [btn, setBtn] = useState([]);
  const [btn2, setBtn2] = useState([]);
  const [sound, setSound] = useState([]);
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

    setSubTitle(<Header content='Artificial Awareness AA' id='SubTittle'/>)

    
    
  },[])// eslint-disable-line react-hooks/exhaustive-deps
  
  


  //Central Menu
  const openMenu = () =>{
    setOpenCentralMenu('NewMenu  active')
    setColorBG('tab-home')
    setSubTitle()
   
 }
  
 
  
  const closeMenu = () =>{
    setOpenCentralMenu('NewMenu')    
    setSubTitle(<Header content='Artificial Awareness AA' id='SubTittle'/>)
 }
  

// Home
const homeViewOver = () =>{
  setTittle('ORAKLO')
  setImgCenter(Logo)
  setBtn()
  setBtn2()
  setSubTitle(<Header content='Artificial Awareness AA' id='SubTittle'/>)

  
}
const homeView = () =>{
  setTittle('ORAKLO')
  setImgCenter(Logo)
  setBtn()
  setSound(<audio src={SoundPage} autoPlay  onEnded={aboutControls}></audio>)
  setBtn2()
  setSubTitle(<Header content='Artificial Awareness AA' id='SubTittle'/>)
  
}
// About
const aboutViewOver = () =>{
  setTittle('¿Qué es ORAKLO?')
  setImgCenter(QuestionPicture)
  setBtn()
  setBtn2()
  setSubTitle()
  
}


const aboutView = () =>{
  setTittle('¿Qué es ORAKLO?')
  setColorBG('tab-home2')
  setImgCenter(voiceIcon)
  setBtn()
  setBtn2(<audio src={MyVoice} autoPlay  onEnded={aboutControls}></audio>) 
  
}
const aboutControls= () =>{
  setTittle('¿Qué es ORAKLO?')
  setImgCenter(QuestionPicture)
  setBtn()
  setBtn2(
  <Controls AgainListen={AgainListen}/>)
  setColorBG('tab-home')
  
}

// About [Again]
const AgainListen= () =>{

  setTittle('¿Qué es ORAKLO?')
  setImgCenter(voiceIcon)  
  setBtn()
  setBtn2(<audio src={MyVoice} autoPlay  onEnded={aboutControls}></audio>) 
  setColorBG('tab-home2')
  
}


// Team
const TeamViewOver = () =>{
  setTittle('NM-ORAKLO')
  setImgCenter(TeamPicture)
  setBtn2()
  setSubTitle()
}
const TeamView = () =>{
  setTittle('NM-ORAKLO')
  setImgCenter(TeamPicture)
  setBtn2(<Slide setImgCenter={setImgCenter} selectBGround={setShadowBg} repeatBG={setShadowBgState}
    widthsBG={setShadowBgSize} positionBG={setShadowBgPosition} setTittle={setTittle}/>)
 
}
// Contact

const mailViewOver = () =>{
  setTittle('Contacto')
  setImgCenter(MailPicture)
  setBtn()
  setSubTitle()
}
const mailView = () =>{
  setTittle('Contacto')
  setImgCenter(MailPicture)
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
    setSubTitle()
    
  }

  
  return (
  <Container style={{background:`url(${shadowBg})`, backgroundPosition:`${shadowBgPosition}`, backgroundRepeat:`${shadowBgState}`, backgroundSize:`${shadowBgSize}`}}  fluid>
    
    <Parallax/>
    <Home   
    sound={sound}  
    subTitle={subTitle}
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
    outFocus={ MouseOut}
    setSound={setSound}
    
    />
  
  </Container>  
  );
}

export default App;
