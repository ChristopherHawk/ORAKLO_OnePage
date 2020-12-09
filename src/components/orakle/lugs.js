import React, {useState} from 'react'
import { Button, Modal, Header, Input, Card, CardContent } from 'semantic-ui-react'


const error = {
  required: {
    content: 'Campo obligatorio',
    pointing: 'below',
  }
}



function LugsData ({data}) {

const [mensaje, setMensaje] = useState('');
const [datos, setDatos] = useState({ 
  rpm: '',
  o2: ''
});

const handleInputChange = (e, { value, name }) => setDatos({ ...datos, [name]: value });


const disabled1 = () => datos.o2 <= 0; 
const disabled = () => datos.rpm <= 0; 





const lugsData = () =>{
  let rpm = datos.rpm;
  let taquipnea = rpm >= 20;
  let bradipnea = rpm <= 12;
  let normalBreathing = rpm > 11 && rpm < 17;
  
 

  if(normalBreathing ){
    setMensaje('Tu respiración marcha bien.');
    return
  }
  if(taquipnea){
    setMensaje('Estado: Alteración emocional o esfuerzo físico.');
    return
  }
  if(bradipnea){
    setMensaje('Estado: sueño.')
    return
  }   

}

const O2 = () => {
  let o2Level = datos.o2;
  let hipoxia = o2Level < 95;
  let normalO2 = o2Level > 94 && o2Level < 101;

  if(normalO2){
    setMensaje(`Sus niveles de O2 son estables. Porcentaje: ${o2Level}%.`);
    return
  }
  if(hipoxia){
    setMensaje(`¡Necesitas llamar a una ambulancia urgente!. Tus niveles de O2 son de ${o2Level}%.`)
  }
}

const [open, setOpen] = React.useState(false)


return (
    <Modal
    onClose={() => setOpen(false)}
    onOpen={() => setOpen(true)}
    open={open}
    trigger={<Button color='blue' icon='ship' size='massive' style={{position:'absolute', left:'5%', top:'5%'}} circular />}    
    >
      <Button  icon='cancel' color='red' onClick={() => setOpen(false)} floated='right'style={{ marginRight:'1%',  marginTop:'1%'}}/> 
       <Header as='h4' icon='doctor' content='Sistema respiratorio'  />    
        <Card.Content style={{justifyContent: 'center', display:'flex'}}>
        <Header  icon='ship' content='Ritmo respiratorio'  style={{ marginTop:'1%'}} />  
        <br/>
        <Input 
        style={{ marginLeft:'1%'}} 
        name='rpm' 
        type='number' 
        icon='ship' 
        placeholder='Respiración' 
        onChange={handleInputChange} 
        error={!datos.rpm === 0 ? error.required : null}
        />
         <Button content='Resultados' disabled={disabled()} onClick={lugsData} icon='lab' color='blue'style={{ marginLeft:'1%'}}   />
        </Card.Content>
        <Card.Content style={{justifyContent: 'center', display:'flex'}}>
        <Header  icon='ship' content='Saturación de O2'  style={{ marginTop:'1%'}} />  
        <br/>
        <Input 
        style={{ marginLeft:'1%'}} 
        name='o2' 
        type='number' 
        icon='ship' 
        placeholder='Niveles de O2' 
        onChange={handleInputChange} 
        error={!datos.o2 === 0 ? error.required : null}
        />
         <Button content='Resultados' disabled={disabled1()} onClick={O2} icon='lab' color='blue'style={{ marginLeft:'1%'}}   />
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

export default LugsData 