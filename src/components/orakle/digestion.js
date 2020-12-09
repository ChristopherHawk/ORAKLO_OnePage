import React, {useState} from 'react'
import { Button, Modal, Header, Input, Card, CardContent } from 'semantic-ui-react'


const error = {
  required: {
    content: 'Campo obligatorio',
    pointing: 'below',
  }
}

function Digestion  () {

const [mensaje, setMensaje] = useState('');
const [datos, setDatos] = useState({ 
  food:'',
  poop:'',
  urine:''

});

const handleInputChange = (e, { value, name }) => setDatos({ ...datos, [name]: value });


const disabled = () => datos.food <= 0; 
const disabled2 = () => datos.poop <= 0 || datos.poop > 5; 
const disabled3 = () => datos.urine <= 0 || datos.urine > 300; 


const foodData  = () =>{
  let food = datos.food;
  let normalFood = food > 5 && food < 7;
  let highFood = food > 6;
  let slowFood = food < 6;

  if(normalFood){
    setMensaje(`¡Maravilloso! ${food} comidas al día es saludable.`);
    return
  }
  if(highFood){
    setMensaje(`¡ups! ${food} comidas al día. Posiblemente presentes hiperfagia, bulimia, atracón u obesidad.
    `)
    return
  }
  if(slowFood){
    setMensaje(`¡vaya! ${food} comidas al día no es nada saludable. Posiblemente presentes anorexia`  )
  return
  }
 
};

const poopData = () => {
 let poop = datos.poop;
 let normalPoop = poop > 0 && poop < 2;
 if(normalPoop){
   setMensaje('Todo márcha bien');
 }
 if(poop === 0){
  setMensaje('Estreñimiento ');
 }
 if(poop > 1){
  setMensaje('Diarrea');
 }
};

const urineData = () => {
  let urine = datos.urine;
  let normalUrine = urine > 299 && urine < 301;
  let slowUrine = urine < 300;
  if(normalUrine){
    setMensaje(`Tu niveles de orina son normales. ${urine}cc`);
  }
  if(slowUrine){
    setMensaje(`Tu niveles de orina son un poco bajo. ${urine}cc`);
  }
}

const [open, setOpen] = useState(false)


return (
    <Modal
    onClose={() => setOpen(false)}
    onOpen={() => setOpen(true)}
    open={open}
    trigger={<Button color='green' icon='food' size='massive' circular style={{position:'absolute', left:'5%', top:'5%'}}/>}    
    >
      <Button  icon='cancel' color='red' onClick={() => setOpen(false)} floated='right'style={{ marginRight:'1%',  marginTop:'1%'}}/> 
       <Header as='h4' icon='doctor' content='SISTEMA DIGESTIVO (RITMO ALIMENTACIÓN/EXCRECCIÓN)'/>    
        <Card.Content style={{justifyContent: 'center', display:'flex'}}>
        <Header  icon='food' content='Alimentación'  style={{ marginTop:'1%'}} />  
        <br/>
        <Input 
        style={{ marginLeft:'1%'}} 
        name='food' 
        type='number' 
        icon='food' 
        placeholder='Comidas/24Horas' 
        onChange={handleInputChange} 
        error={!datos.food === 0 ? error.required : null}
        />
         <Button content='Resultados' disabled={disabled()} onClick={foodData} icon='lab' color='blue'style={{ marginLeft:'1%'}}   />
        </Card.Content>
        <Card.Content style={{justifyContent: 'center', display:'flex'}}>
        <Header  icon='bath' content='Excreción'  style={{ marginTop:'1%'}} />  
        <br/>
        <Input 
        style={{ marginLeft:'1%'}} 
        name='poop' 
        type='number' 
        icon='bath' 
        placeholder='Excreciones/24Horas' 
        onChange={handleInputChange} 
        error={!datos.poop === 0 ? error.required : null}
        />
         <Button content='Resultados' disabled={disabled2()} onClick={poopData}  icon='lab' color='blue'style={{ marginLeft:'1%'}}   />
        </Card.Content>
        <Card.Content style={{justifyContent: 'center', display:'flex'}}>
        <Header  icon='bath' content='Diuresis'  style={{ marginTop:'1%'}} />  
        <br/>
        <Input 
        style={{ marginLeft:'1%'}} 
        name='urine' 
        type='number' 
        icon='bath' 
        placeholder='Diuresis/24Horas' 
        onChange={handleInputChange} 
        error={!datos.urine === 0 ? error.required : null}
        />
         <Button content='Resultados' disabled={disabled3()} onClick={urineData} icon='lab' color='blue'style={{ marginLeft:'1%'}}   />
        </Card.Content>
       
        <Card style={{width:'100%'}}>
          <CardContent textAlign='center' style={{height:'190px', marginTop:'10px'}}>
          <br/>      
          <br/>         
          {mensaje}       
        </CardContent>
        </Card> 
       
        </Modal>
  )
}

export default Digestion