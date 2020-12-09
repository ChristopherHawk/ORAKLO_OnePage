import React, {useState} from 'react'
import { Button, Modal, Header, Input, Card, CardContent } from 'semantic-ui-react'


const error = {
  required: {
    content: 'Campo obligatorio',
    pointing: 'below',
  }
}



function HeartForm({data}) {


const [mensaje, setMensaje] = useState('');

const [datos, setDatos] = useState({
  tas: '',
  tad: '',
  bpm: ''
});

const handleInputChange = (e, { value, name }) => setDatos({ ...datos, [name]: value });


const disabled2 = () =>  datos.bpm <= 0; 
const disabled3 = () =>  datos.tas <= 0 || datos.tad <= 0;






const PressureData = () => {  
//Blood Pressure
 let x = datos.tas;
 let y = datos.tad;
//Systolic
 let sis1 =  x <= 120;
 let sis2 =  x > 120 && x < 130;
 let sis3 = x > 129 && x < 140;
 let sis4 = x > 139;
//Diastolic
 let dist1 = y <= 80;
 let dist2 = y > 79 && y < 90;
 let dist3 = y > 89;
//----------------------//
//[systolic blood pressure <=  120] && [ diastolic blood pressure <=  80]
if(sis1 && dist1){ 

  setMensaje(
    `Mantén o adopta un estilo de vida saludable
    `  
  );
  return
}   
//[systolic blood pressure > 120 y < 130] && [ diastolic blood pressure <=  80] 
if(sis2 && dist1){

    setMensaje(`
    Mantén o adopta un estilo de vida saludable`
  );
  return
}
//[systolic blood pressure >  129 y < 140] && [ diastolic blood pressure > 79 y < 90]
if(sis3 && dist2){
  
  setMensaje(` 
  Mantén o adopta un estilo de vida saludable. Habla con tu médico sobre la necesidad de tomar uno o más medicamentos.`
);
return

}
//[systolic blood pressure >  139 ] && [ diastolic blood pressure > 89]
if(sis4 && dist3){
  setMensaje(`Tu corazón está en riesgo. Habla con tu médico sobre la necesidad de tomar más de un medicamento.`);
}
//--------------------------------------------------------------------------------------//

}
const beatsData = () =>{
//BPM
let BPM = datos.bpm;
let normalBpm = BPM > 49 && BPM <101;
let lowBpm = BPM < 50;
let hightBpm = BPM > 100;

if(normalBpm){
  setMensaje('Tus latidos por minuto son nomales');
  return
}
if(lowBpm){
  setMensaje('Tus latidos por minuto son bajos. Debes consultar cuanto antes a un médico.');
  return
}
if(hightBpm){
  setMensaje('Tus latidos han subido por encíma de los 100bpm.');
  return
}







//--------------------------------------------------------------------------------------//
}

const [open, setOpen] = useState(false)


return (
    <Modal
    onClose={() => setOpen(false)}
    onOpen={() => setOpen(true)}
    open={open}
    trigger={<Button size='massive' color='red' icon='heart' circular style={{position:'absolute', left:'5%', top:'5%'}} />}    
    >
      <Button  icon='cancel' color='red' onClick={() => setOpen(false)} floated='right'style={{ marginRight:'1%',  marginTop:'1%'}}/> 
       <Header as='h4' icon='doctor' content='Sistema Cardiovascular'  />    
       <Card.Content style={{justifyContent: 'center', display:'flex'}}>
       <Header  icon='heart' content='Tensión arterial'  style={{ marginTop:'1%'}} />  
        <br/>
        <Input 
        style={{ marginLeft:'1%'}} 
        name='tas' 
        type='number' 
        icon='heart' 
        placeholder='Presión Sistólica' 
        onChange={handleInputChange} 
        error={!datos.tas === 0 ? error.required : null}
        />
        <br/>
        <br/>
        <Input
        style={{ marginLeft:'1%'}} 
        name='tad' 
        type='number' 
        icon='heart' 
        placeholder='Presión Diastólica' 
        onChange={handleInputChange}
        error={!datos.tad === 0 ? error.required : null}
        />
        <Button content='Resultados' disabled={disabled3()} onClick={PressureData} icon='lab' color='blue'style={{ marginLeft:'1%'}}   />
       </Card.Content>
      
       <Card.Content style={{justifyContent: 'center', display:'flex'}}>
       <Header  icon='heartbeat' content='Ritmo Cardíaco'  style={{ marginTop:'1%'}} />  
        <br/>
        <Input 
        style={{ marginLeft:'1%'}} 
        name='bpm' 
        type='number' 
        icon='heart' 
        placeholder='ritmo Cardíaco' 
        onChange={handleInputChange} 
        error={!datos.bpm === 0 ? error.required : null}
        />
         <Button content='Resultados' disabled={disabled2()} onClick={beatsData} icon='lab' color='blue'style={{ marginLeft:'1%'}}   />
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

export default HeartForm