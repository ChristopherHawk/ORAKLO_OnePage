import React from 'react';
import {  CardContent, MenuItem, Button } from 'semantic-ui-react';
import './css/cyrcle3.css';

const Cyrcle = () => {
  return (  
    <CardContent className="C3" >
     
    <input type="checkbox" href="#" className="C3-open" name="C3-open" id="C3-open"/>
    <label className="C3-open-button" for="C3-open">
      <MenuItem className="hamburger hamburger-1"></MenuItem>
      <MenuItem className="hamburger hamburger-2"></MenuItem>
      <MenuItem className="hamburger hamburger-3"></MenuItem>
    </label>
    <MenuItem as='a' className="C3-item"> <Button size='massive' color='green' icon='paw' circular style={{position:'absolute', left:'5%', top:'5%'}} /> </MenuItem>
    <MenuItem as='a' className="C3-item"> <Button size='massive' color='google plus' icon='bicycle' circular style={{position:'absolute', left:'5%', top:'5%'}} /> </MenuItem>
    <MenuItem as='a' className="C3-item"> <Button size='massive'  icon='tablet' circular style={{position:'absolute', left:'5%', top:'5%'}} /> </MenuItem>
    <MenuItem as='a' className="C3-item"> <Button size='massive' color='vk' icon='birthday cake' circular style={{position:'absolute', left:'5%', top:'5%'}} /> </MenuItem>
    <MenuItem as='a' className="C3-item"> <Button size='massive' color='blue' icon='users' circular style={{position:'absolute', left:'5%', top:'5%'}} /> </MenuItem>
   
  
  </CardContent>
     
  );
}
 
export default Cyrcle;