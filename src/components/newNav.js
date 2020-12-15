import React, {useState} from 'react';
import {  CardContent,  MenuItem, Image } from "semantic-ui-react";
import './visual/css/RadialMenu.css';
import BGHome from '../assets/bgHome.jpg';
import BGAbout from '../assets/bgAbout.jpg';
import BGTeam from '../assets/bgTeam.jpg';
import BGContact from '../assets/bgContact.jpg';
import BGMenu from '../assets/bgMenu.jpg';

const RadialMenu = ({
  homeClick,
  aboutClick, 
  teamClick, 
  contactClick, 
  outFocus, 
  homeOver,
  aboutOver,
  teamOver,
  contactOver, 
  selectBGround,
  repeatBG,
  widthsBG, 
  radialMenu
 
  
}) => {


  const [clickState, setClickState] = useState(outFocus);


  const clickBtnMenu = (x) =>{
    setClickState(x)
  }

  const hoverBtn = (bg) =>{
    selectBGround(bg)
  }

  const cleanBg = () =>{
    selectBGround(BGMenu)
    repeatBG('no-repeat')
    widthsBG('cover')    
   
  }


  return ( 
    
    <CardContent className="radial-menu">
    <CardContent className="menu">
      <CardContent className="row">
        <MenuItem className="icon-btn" as='a' onClick={()=>{clickBtnMenu(); homeClick();}} onMouseOver={()=>{hoverBtn(BGHome); homeOver();}} onMouseOut={clickState}>
          <Image src="https://img.icons8.com/windows/32/000000/home-page.png"/>
          <CardContent className="text">Home</CardContent>
          </MenuItem>
      </CardContent>
      <CardContent className="row">
        <MenuItem className="icon-btn" as='a' onClick={()=>{clickBtnMenu(); aboutClick();}} onMouseOver={()=>{hoverBtn(BGAbout); aboutOver();}} onMouseOut={clickState} >
        <Image src="https://img.icons8.com/ios-glyphs/30/000000/source-code.png"/>
      <CardContent className="text">About</CardContent>
        </MenuItem>
      </CardContent>
      <CardContent className="row">
        <MenuItem className="icon-btn" as='a' onClick={()=>{clickBtnMenu(); teamClick();}}   onMouseOver={()=>{hoverBtn(BGTeam); teamOver();}} onMouseOut={clickState}>
        <Image src="https://img.icons8.com/windows/50/000000/user.png"/>
          <CardContent className="text">Team</CardContent>
        </MenuItem>
      </CardContent>
      <CardContent className="row">
        <MenuItem className="icon-btn" as='a' onClick={()=>{clickBtnMenu(); contactClick();}}  onMouseOver={()=>{hoverBtn(BGContact); contactOver();}} onMouseOut={clickState} >
          <Image src="https://img.icons8.com/material-outlined/24/000000/important-mail.png"/>
          
          <CardContent className="text">Contact</CardContent>
        </MenuItem>
      </CardContent>
    </CardContent>
    <MenuItem className="icon-btn menu-btn" onMouseOver={()=>{radialMenu(); cleanBg();}} >
      <Image src="https://img.icons8.com/ios-filled/50/000000/menu.png"/>
      <CardContent className="text" >Menu</CardContent>
    </MenuItem>
  </CardContent>
   );
}
 
export default RadialMenu;