import React from 'react';
import { CardContent, MenuItem} from 'semantic-ui-react';
import HeartForm from '../../../components/orakle/heart';
import MuscleData from '../../../components/orakle/muscle';
import LugsData from '../../../components/orakle/lugs';
import TempData from '../../../components/orakle/temp';
import SlumberData from '../../../components/orakle/slumber';
import ReproductiveSystem from '../../../components/orakle/reproductiveSystem';
import Digestion from '../../../components/orakle/digestion';
import './css/cyrcle.css';


const Cyrcle = () => {

return (  
    <CardContent className="C1" >
     
    <input type="checkbox" href="#" className="C1-open" name="C1-open" id="C1-open"/>
    <label className="C1-open-button" for="C1-open">
      <MenuItem className="hamburger hamburger-1"></MenuItem>
      <MenuItem className="hamburger hamburger-2"></MenuItem>
      <MenuItem className="hamburger hamburger-3"></MenuItem>
    </label>
    <MenuItem as='a' className="C1-item"><ReproductiveSystem  /> </MenuItem> 
    <MenuItem as='a' className="C1-item">    <SlumberData  /> </MenuItem>
    <MenuItem as='a' className="C1-item">  <TempData  /> </MenuItem>
    <MenuItem as='a' className="C1-item"><LugsData  /> </MenuItem>
    <MenuItem as='a' className="C1-item">    <MuscleData  /> </MenuItem>
    <MenuItem as='a' className="C1-item"> <HeartForm  /> </MenuItem>
    <MenuItem as='a' className="C1-item">   <Digestion  /> </MenuItem>
   
  
  </CardContent>
  );
}
 
export default Cyrcle;