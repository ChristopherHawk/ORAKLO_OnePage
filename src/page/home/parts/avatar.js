import React, {useState} from 'react';
import { Icon, CardContent, Card, Dropdown, Input} from 'semantic-ui-react';
import'./css/avatar.css';
import Male from '../../../assets/change/avatar1.gif';
import Female from '../../../assets/change/avatar2.gif';



const Avatar = ({imgTeam}) => {

  const [selectGender, setSelectGender] = useState('');

  const options = [
    { key: 1, text: 'Hombre', icon:'male', value: 'male' },
    { key: 2, text: 'Mujer', icon:'female', value: 'female' }
  ]

  const handleInputChange = ((e, { value }) => setSelectGender(value));

//Change Image Avatar
  
const changeGender = ()=>{
  if(selectGender === 'female'){
    imgTeam(Female)
    return
  }
  if(selectGender === 'male'){
    imgTeam(Male)
    return
  }

}
changeGender()



  return ( 
 
    
    <Card
    id='cardInfoAvatar'
    fluid    
    description={
      <CardContent id='avatarForm' >
          <p><Icon name='user' color='blue'/>ID</p>
          <Input value='anónimo' fluid/>   
          <p ><Icon name='venus mars' color='blue'/>sexo</p>   
          <Dropdown  onChange={handleInputChange} options={options} selection fluid />
         
    </CardContent>
    }
 
  />
  

   );
}
 
export default Avatar;