import React from 'react';
import { Icon, CardContent, Card, Dropdown, Input, Button} from 'semantic-ui-react';
import'./css/avatar.css';




const Avatar = () => {



  return ( 
 
    
    <Card
    id='cardInfoAvatar'
    fluid    
    description={
      <CardContent id='avatarForm' >
          <p><Icon name='user' color='blue'/>Registro</p>
          <Input value='anónimo' fluid/>   
          <Button id='newAvatar' content='crear avatar' color='twitter'/>
        
    </CardContent>
    }
 
  />
  

   );
}
 
export default Avatar;