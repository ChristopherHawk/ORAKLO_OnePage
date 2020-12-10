import React from 'react'
import { CardContent, Button, Popup } from 'semantic-ui-react';
import'./css/CentralMenu.css';

//BackGround Change Menu
import BGPhysical from '../../../assets/change/physicalBG.jpg';
import BGPsycho from '../../../assets/change/psychoBG.jpg';
import BGRelational from '../../../assets/change/relationalBG.jpg';
import BGContextual from '../../../assets/change/contextualBG.jpg';
import BGAvatar from '../../../assets/change/avatarBG.jpg';



const NewView = ({
  open, 
  physical, 
  psychological, 
  relational, 
  changeBg, 
  divFunction, 
  contextual,
  avatar
}) => {

  return ( 
<CardContent className={open}>  
  <CardContent className="icons">
    <CardContent className="rotater">
      <CardContent className="btn btn-icon" style={{background:'none'}}>
      <Popup content='Cuerpo' trigger={ <Button id='btnCentralMenu' onClick={()=>{physical(); changeBg(BGPhysical);}} size='massive' icon='stopwatch' circular style={{position:'absolute', left:'13%', top:'5%', background:'linear-gradient(to right, #000000, #e74c3c)', color:'white'}} /> } />
     
      </CardContent>
    </CardContent>
    <CardContent className="rotater">
      <CardContent className="btn btn-icon" style={{background:'none'}}>
      <Popup content='Avatar' trigger={ <Button id='btnCentralMenu' onClick={()=>{avatar(); changeBg(BGAvatar);}} size='massive' icon='user circle' circular style={{position:'absolute', left:'5%', top:'5%', background:'linear-gradient(to right, #000000, #434343)', color:'white' }} /> } />

      </CardContent>
    </CardContent>
    <CardContent className="rotater">
      <CardContent className="btn btn-icon" style={{background:'none'}}>
    
      <Popup content='Contexto' trigger={ <Button id='btnCentralMenu' onClick={()=>{contextual(); changeBg(BGContextual);}} size='massive' icon='umbrella' circular style={{position:'absolute', left:'13%', top:'5%', background:'linear-gradient(to right, #136a8a, #267871)' , color:'white'}} /> } />
      </CardContent>
    </CardContent>
     
    <CardContent className="rotater">
      <CardContent className="btn btn-icon"  style={{background:'none'}}>
      <i>{divFunction}</i> 
             
      </CardContent>
    </CardContent>
    
    <CardContent className="rotater">
      <CardContent className="btn btn-icon" style={{background:'none'}}>

      <Popup content='Mente' trigger={ <Button id='btnCentralMenu' onClick={()=>{psychological(); changeBg(BGPsycho);}} size='massive' icon='lightbulb' circular style={{position:'absolute', left:'13%', top:'5%',background:'linear-gradient(to right, #4b6cb7, #182848)', color:'white'}} /> } />
      </CardContent>
    </CardContent>
    
    <CardContent className="rotater">
      <CardContent className="btn btn-icon" style={{background:'none'}}>
   
        <Popup content='Relación' trigger={ <Button id='btnCentralMenu' onClick={()=>{relational(); changeBg(BGRelational);}} size='massive' color='teal' icon='handshake' circular style={{position:'absolute', left:'13%', top:'5%', background:'linear-gradient(to right, #c31432, #240b36)', color:'white'}} /> } />
     
      </CardContent>
    </CardContent>
    </CardContent>
</CardContent>
);
}
 
export default NewView;