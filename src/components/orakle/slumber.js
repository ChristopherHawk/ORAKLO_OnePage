import React, {useState} from 'react'
import { Button, Modal, Dropdown, Header, Input, Card, CardContent } from 'semantic-ui-react'


const error = {
  required: {
    content: 'Campo obligatorio',
    pointing: 'below',
  }
}

function SlumberUser  ({data}) {


const [mensaje, setMensaje] = useState('');
const [datos, setDatos] = useState({ 
  slumber: '',
  light:'',
  station: null
});

const handleInputChange = (e, { value, name }) => setDatos({ ...datos, [name]: value });


const disabled3 = () => datos.light <= 0 || !datos.station; 
const disabled4 = () => datos.slumber <= 0; 


const slumberData  = () =>{
let sleep = datos.slumber;
let normalSleep = sleep > 5 && sleep < 9;
let slowSleep = sleep < 6;
let highSleep = sleep > 9;

if(normalSleep){
  setMensaje('Tienes un rango de sueño saludable');
  return
}
if(slowSleep){
  setMensaje('Debes dormir un poco más.');
  return
}
if(highSleep){
  setMensaje('Tus horas de sueño son algo excesivas.');
  return
} 
}

const lightDark = () => {
  let stations = datos.station;
  let light = datos.light;
  let winter = light < 121;
  let highWinter = light > 120;
  let summer = light < 16;
  let highSummer = light > 15;
  let autumn = light < 31;
  let highAutumn = light > 30;
  let spring = light < 31;
  let highSpring = light > 30;

  if(stations === 'invierno' && winter){
    setMensaje('¡Magnífico! Durante este invierno aprovecha el sol lo más que puedas sin excederte.');
    return
  }
  if(stations === 'invierno' && highWinter){
    setMensaje('Con 2 horas al día es suficiente exposición a la luz durante el invierno.');
    return
  }
  if(stations === 'verano' && summer){
    setMensaje('¡Bien! el sol es importante para todos, claro está, en pocas durante el verano.');
    return
  }
  if(stations === 'verano' && highSummer){
    setMensaje('Con 15 minutos de luz solar al día es suficiente durante el verano, Evita los excesos que puedan perjudicar tu salud.');
    return
  } 
  if(stations === 'otoño' && autumn){
    setMensaje('¡Maravilloso! un poco de sol durante el otoño te permitirá ver los colores más bellos de las 4 estaciones.');
    return
  }
  if(stations === 'otoño' && highAutumn){
    setMensaje('Con 30 minutos de luz solar al día es suficiente durante el otoño, Evita los excesos que puedan perjudicar tu salud.');
    return
  }
  if(stations === 'primavera' && spring){
    setMensaje('¡Genial! Después de un largo invierno un poco de sol no cae nada mal.');
    return
  }
  if(stations === 'primavera' && highSpring){
    setMensaje('Con 30 minutos de luz solar al día es suficiente durante el la primavera, Evita los excesos que puedan perjudicar tu salud.');
    return
  }

}
//Stations Choices
const stations = [ 
  {key: 1, text: 'Invierno', value: 'invierno', icon:'snowflake'},
  {key: 2, text: 'Primavera', value: 'primavera', icon:'certificate'},
  {key: 3, text: 'Verano', value: 'verano', icon:'sun'},
  {key: 4, text: 'Otoño', value: 'otoño', icon:'leaf'},
]




const [open, setOpen] = useState(false)


return (
    <Modal
    onClose={() => setOpen(false)}
    onOpen={() => setOpen(true)}
    open={open}
    trigger={<Button color='brown' icon='bed' size='massive' style={{position:'absolute', left:'5%', top:'5%'}} circular />}    
    >
      <Button  icon='cancel' color='red' onClick={() => setOpen(false)} floated='right'style={{ marginRight:'1%',  marginTop:'1%'}}/> 
       <Header as='h4' icon='doctor' content='SISTEMA PSICONEUROENDOCRINO/EPIDERMICO'  />    
        <Card.Content style={{justifyContent: 'center', display:'flex'}}>
        <Header  icon='bed' content='Ritmo Sueño/Vigilia'  style={{ marginTop:'1%'}} />  
        <br/>
        <Input 
        style={{ marginLeft:'1%'}} 
        name='slumber' 
        type='number' 
        icon='bed' 
        placeholder='Sueño' 
        onChange={handleInputChange} 
        error={!datos.slumber === 0 ? error.required : null}
        />       
         <Button content='Resultados' disabled={disabled4()} onClick={slumberData} icon='lab' color='blue'style={{ marginLeft:'1%'}}   />
        </Card.Content>
        <Card.Content style={{justifyContent: 'center', display:'flex'}}>
        <Header  icon='sun' content='Ritmo luz/oscuridad'  style={{ marginTop:'1%'}} />  
        <br/>
        <Input 
        style={{ marginLeft:'1%', marginBottom:'1%'}} 
        name='light' 
        type='number' 
        icon='sun' 
        placeholder='Necesidad de luz' 
        onChange={handleInputChange} 
        error={!datos.light === 0 ? error.required : null}
        />
        <Dropdown 
        clearable 
        selection
        name='station'  
        options={stations} 
        onChange={handleInputChange}
        placeholder='Seleccionar Estación' 
        style={{marginLeft:'1%', marginBottom:'1%'}} 
        />
         <Button content='Resultados' disabled={disabled3()} onClick={lightDark} onChange={handleInputChange}  icon='lab' color='blue'style={{ marginLeft:'1%', marginBottom:'1%'}}   />
        </Card.Content>
        <Card style={{width:'100%'}}>
         <CardContent textAlign='center' style={{height:'190px', marginTop:'10px'}}>
            <br/>
            <br/>
            <br/>
            <br/>
          {mensaje} 
      
        </CardContent>
        </Card> 
        </Modal>
  )
}

export default SlumberUser