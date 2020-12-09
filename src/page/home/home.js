import Parallax from '../../components/visual/parallax';
import React, {useEffect} from 'react';
import { Segment, CardContent, Header } from 'semantic-ui-react';
//Cyrcle Center
import Rings from '../../components/visual/rings';
//Central Menu
import CentralMenu from './parts/CentralMenu';
//Central images
import Body from '../../assets/change/body.gif';
import Brain from '../../assets/change/brain.gif';
import Relation from '../../assets/change/relation.gif';
import Context from '../../assets/change/context.gif';
import Avatar from '../../assets/change/avatar1.gif';
import BGHome from '../../assets/bgHome.jpg';
import BGMenu from '../../assets/bgMenu.jpg';
//Submenu
import Cyrcle from './parts/cyrcle';
import Cyrcle2 from './parts/cyrcle2';
import Cyrcle3 from './parts/cyrcle3';
import Cyrcle4 from './parts/cyrcle4';
import AvatarBox from './parts/avatar';




const Home = ({
  imgTeam, 
  Logo, 
  picture, 
  divBtn,
  divBtn2, 
  btnFooter, 
  divTittle, 
  contentTittle, 
  setShadowBg,
  openCentralMenu,
  openMenu,
  closeMenu,
  BtnPages,
  colorBG
}) => {

  useEffect(() => {
  physical()
  psychological()
  relational()
  contextual()
  ReloadCenter()
  },[])// eslint-disable-line react-hooks/exhaustive-deps

//change Cyrcle

const physical = () =>{
  imgTeam(Body)
  divBtn(<Cyrcle/>)
  divTittle('CUERPO')
}
const psychological = () =>{
  imgTeam(Brain)
  divBtn(<Cyrcle2/>)
  divTittle('MENTE')
}
const relational = () =>{
  imgTeam(Relation)
  divBtn(<Cyrcle3/>)
  divTittle('RELACIÓN')
}
const contextual = () =>{
  imgTeam(Context)
  divBtn(<Cyrcle4/>)
  divTittle('CONTEXTO')
}
const avatar = () =>{
  imgTeam(Avatar)
  divBtn(<AvatarBox imgTeam={imgTeam}/>)
  divBtn2()
  divTittle('AVATAR')
}
const clickCentralMenu = () =>{
  imgTeam('https://media.giphy.com/media/3o7aD6ydPRgEPllYQM/giphy.gif')
  divBtn()
  divBtn2()
  divTittle('Menú')
  openMenu()
  setShadowBg(BGMenu)

}
const ReloadCenter = () =>{
  imgTeam(Logo)
  divBtn()
  divTittle('ORAKLO')
  closeMenu()
  setShadowBg(BGHome)

}


  

return (
<Segment className="et-slide" id={colorBG}  >     

<Header content={contentTittle} id='HomeTittle'/>

<CardContent  >
<Rings 
clickCentralMenu={clickCentralMenu} 
ReloadCenter={ReloadCenter} 
openCentralMenu={openCentralMenu} 
imgCenter={picture} 
BtnPages={BtnPages}
/> 
<CentralMenu 
open={openCentralMenu} 
divFunction={btnFooter}  
close={closeMenu} 
physical={physical} 
psychological={psychological} 
relational={relational} 
contextual={contextual}
avatar={avatar}
changeBg={setShadowBg}
/>

</CardContent>



<Parallax/>
</Segment >
);
}
 
export default Home;