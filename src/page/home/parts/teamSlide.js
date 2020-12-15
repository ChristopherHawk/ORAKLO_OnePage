import React, {useState, useEffect} from 'react';
import { Button, CardContent, CardGroup, Card} from 'semantic-ui-react';
import './css/slide.css';
//Photography Team
import JPerez from '../../../assets/team/JosePerez.jpg';
import RHiggins from '../../../assets/team/Rous.jpg';

//Backgroun Team
import CEOBG from '../../../assets/team/ceoBg.jpg';
import MANAGERBG from '../../../assets/team/managerBg.jpg';
import TeamIcon from '../../../assets/change/team.gif';
import TeamBG from '../../../assets/bgTeam.jpg';

const TeamSlide = ({
  setImgCenter, 
  selectBGround, 
  repeatBG, 
  widthsBG, 
  positionBG,
  setTittle
}) => {

  const [userName, setUserName] = useState('NM-ORAKLO');
  const [userPosition, setUserPosition] = useState('');
  const [userDescription, setUserDescription] = useState('NM-ORAKLO');
  const [userMail, setUserMail] = useState('Miembros');
     

 
  
  const DefaultTeam = () =>{
    setTittle('NM-ORAKLO')
    setUserName('Miembros')
    setUserPosition('')
    setUserDescription('NM-ORAKLO')
    setUserMail('info@nm-oraklo.com')
    setImgCenter(TeamIcon)
    selectBGround(TeamBG )
    repeatBG('no-repeat')
    widthsBG('cover')
    positionBG('center')
  }
  const CeoIcon = () =>{
    setTittle('Jose Perez')
    setUserName('Jose Perez')
    setUserPosition('CEO NM-ORAKLO')
    setUserDescription('Médico Psiquiatra')
    setUserMail('jpg@nm-oraklo.com')
    setImgCenter(JPerez)
    selectBGround(CEOBG)
    repeatBG('no-repeat')
    widthsBG('cover')
    positionBG('center')
  }
  const  managerIcon = () =>{
    setTittle('Rosmary Higgins')
    setUserName('Rosmary Higgins')
    setUserPosition('Product Manager NM-ORAKLO')
    setUserDescription('Psicóloga')
    setUserMail('info@nm-oraklo.com')
    setImgCenter(RHiggins)
    selectBGround(MANAGERBG)
    repeatBG('no-repeat')
    widthsBG('cover')
    positionBG('center')
  }
   
 
  useEffect(() => {
    CeoIcon()     
    managerIcon()    
    DefaultTeam()
  },[])// eslint-disable-line react-hooks/exhaustive-deps
    
 

  return ( 

      <Card
      id='cardInfoTeam'
      fluid    
      meta={
        <CardGroup id='AllBtnTeam'>
        <Button id='btnTeam1'  icon='compass outline' onClick={CeoIcon} color='black' size='medium' circular/>
        <Button id='btnTeam2' icon='remove bookmark' onClick={ managerIcon} color='white' size='medium' style={{color:'black'}} circular/>
        </CardGroup>

      }
      description={userName}
      extra={
      <CardContent id='extraTeam' >
          <p id='teamUserMail'>{userDescription} <br/>{userPosition}  </p>     
         <p id='teamUserPosition'>{userMail}</p>   
        </CardContent>
        }
    />
    
  
   
   );
}
 
export default TeamSlide;