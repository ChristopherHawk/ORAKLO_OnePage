import React from 'react';
import {  CardContent, MenuItem, Button} from 'semantic-ui-react';
import './css/cyrcle2.css';

const Cyrcle = () => {
  return (  
    <CardContent className="C2" >
     
    <input type="checkbox" href="#" className="C2-open" name="C2-open" id="C2-open"/>
    <label className="C2-open-button" for="C2-open">
      <MenuItem className="hamburger hamburger-1"></MenuItem>
      <MenuItem className="hamburger hamburger-2"></MenuItem>
      <MenuItem className="hamburger hamburger-3"></MenuItem>
    </label>
    <MenuItem as='a' className="C2-item"><Button size='massive' color='orange' icon='globe' circular style={{position:'absolute', left:'5%', top:'5%'}} /> </MenuItem>
    <MenuItem as='a' className="C2-item"> <Button size='massive' color='blue' icon='university' circular style={{position:'absolute', left:'5%', top:'5%'}} /></MenuItem>
    <MenuItem as='a' className="C2-item"> <Button size='massive'  icon='handshake outline' circular style={{position:'absolute', left:'5%', top:'5%'}} /> </MenuItem>
    <MenuItem as='a' className="C2-item"> <Button size='massive' color='vk' icon='chess king' circular style={{position:'absolute', left:'5%', top:'5%'}} /> </MenuItem>
    <MenuItem as='a' className="C2-item"> <Button size='massive' color='black' icon='suitcase' circular style={{position:'absolute', left:'5%', top:'5%'}} /> </MenuItem>
   
  
  </CardContent>
     
  );
}
 
export default Cyrcle;