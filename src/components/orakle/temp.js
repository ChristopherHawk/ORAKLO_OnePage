import React, {useState} from 'react'
import { Button, Modal, Header, Input, Card, CardContent } from 'semantic-ui-react'


const error = {
  required: {
    content: 'Campo obligatorio',
    pointing: 'below',
  }
}

function TempForm   ({data}) {


const [mensaje, setMensaje] = useState('');
const [datos, setDatos] = useState({ 
  temp: ''
});

const handleInputChange = (e, { value, name }) => setDatos({ ...datos, [name]: value });


const disabled4 = () => datos.temp <= 0; 





const tempData  = () =>{
 let temperature = datos.temp;
 let normalTemp = temperature > 35 && temperature < 37;
 let hypothermia = temperature < 36;
 let feber = temperature > 37;

 if(normalTemp){
   setMensaje(`Tu temperatura es de ${temperature}°. Todo marcha bien.`);
   return
 }
 if(feber){
  setMensaje(`Tienes fiebre. Tu temperatura es de ${temperature}°.`);
  return
 }
 if(hypothermia){
  setMensaje(`¡Necesitas subir tu temperatura rapido!. Tu temperatura es de ${temperature}°`);
  return
 }  

}

const [open, setOpen] = useState(false)


return (
    <Modal
    onClose={() => setOpen(false)}
    onOpen={() => setOpen(true)}
    open={open}
    trigger={<Button color='yellow' icon='thermometer' size='massive' style={{position:'absolute', left:'5%', top:'5%'}} circular />}    
    >
      <Button  icon='cancel' color='red' onClick={() => setOpen(false)} floated='right'style={{ marginRight:'1%',  marginTop:'1%'}}/> 
       <Header as='h4' icon='doctor' content='Sistema inmunohemático'  />    
        <Card.Content style={{justifyContent: 'center', display:'flex'}}>
        <Header  icon='thermometer' content='Temperatura Corporal'  style={{ marginTop:'1%'}} />  
        <br/>
        <Input 
        style={{ marginLeft:'1%'}} 
        name='temp' 
        type='number' 
        icon='thermometer' 
        placeholder='Temperatura' 
        onChange={handleInputChange} 
        error={!datos.temp === 0 ? error.required : null}
        />
         <Button content='Resultados' disabled={disabled4()} onClick={tempData } icon='lab' color='blue'style={{ marginLeft:'1%'}}   />
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

export default TempForm