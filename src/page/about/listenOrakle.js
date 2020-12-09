import React from 'react';
import { Button} from 'semantic-ui-react';
import './css/about.css';

const ListenOraklo = ({AgainListen}) => {
  return (
   
      
      <Button id='repeat'  icon='reply' onClick={AgainListen}  color='black' size='massive' circular/>
     
     );
}
 
export default ListenOraklo;