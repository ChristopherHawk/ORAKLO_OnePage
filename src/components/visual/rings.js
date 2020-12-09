import React from 'react';
import { Button, CardContent, Image } from 'semantic-ui-react';


import'./css/rings.css';

const Rings = ({
  symbol, 
  imgCenter,  
  BtnPages, 
  openCentralMenu,
  clickCentralMenu,
  ReloadCenter
}) => {

const multiClick = ()=>{
  if(openCentralMenu === 'NewMenu'){
    clickCentralMenu()
  }
  if(openCentralMenu === 'NewMenu  active'){    
    ReloadCenter()
  }
}


  return (


<CardContent>
<CardContent   className="wrapper">
  <CardContent className="visual">
    <CardContent className="rings">
      <CardContent className="inner-ring" >
      <Button id='menuOraklo'  icon={symbol}  onClick={multiClick} />
      <Image id='logo' src={imgCenter} />
      {BtnPages}
      </CardContent>        
      <CardContent className="middle-ring"></CardContent>
      <CardContent className="outer-ring"></CardContent>
    </CardContent>
  </CardContent>
</CardContent>

</CardContent>

    );
}
 
export default Rings;