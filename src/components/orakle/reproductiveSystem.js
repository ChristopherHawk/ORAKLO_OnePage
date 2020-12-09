import React, {useState} from 'react'
import { Button, Modal, Header, Input, Card, CardContent } from 'semantic-ui-react'


const error = {
  required: {
    content: 'Campo obligatorio',
    pointing: 'below',
  }
}

function ReproductiveSystem  ({data}) {

const [mensaje, setMensaje] = useState('');
const [datos, setDatos] = useState({ 
  sexualDay: ''
});

const handleInputChange = (e, { value, name }) => setDatos({ ...datos, [name]: value });


const disabled4 = () => datos.sexualDay <= 0 || datos.sexualDay > 28; 





const sexualCycle  = () =>{

let sexualDay = datos.sexualDay;
let menstrualStage = sexualDay < 8;
let preOvulatoryStage = sexualDay > 8 && sexualDay < 15;
let zealStage= sexualDay > 7 && sexualDay < 18;
let postOvulatoryStage = sexualDay > 14 && sexualDay < 22;
let preMenstrualStage = sexualDay > 20 && sexualDay < 29;

if(menstrualStage){
  setMensaje(` Día ${sexualDay}. En este periodo no se sugiere encuentros sexuales (0)
  `);
  return
}
if(preOvulatoryStage){
  setMensaje(` Día ${sexualDay}. Se sugiere de 2 a 3 relaciones sexuales culminará
  con el día 14 del ciclo donde se produce la ovulación`);
  return
}
if(zealStage){
  setMensaje(` Día ${sexualDay}. Este es el periodo más fértil de la mujer`);
  return
}
if(postOvulatoryStage){
  setMensaje(` Día ${sexualDay}. En esta etapa sugieren de 2 a 3 relaciones sexuales`);
  return
}
if(preMenstrualStage){
  setMensaje(` Día ${sexualDay}. En esa etapa ya se encuentra la mujer menos
  dispuesta a las relaciones, algunas con inestabilidad física y emocional por lo que está
  indicado de 1 a 2 relaciones sexuales.`);
  return
}


 
}

const [open, setOpen] = useState(false)


return (
    <Modal
    onClose={() => setOpen(false)}
    onOpen={() => setOpen(true)}
    open={open}
    trigger={<Button color='purple'  icon='venus mars' size='massive' style={{position:'absolute', left:'5%', top:'5%'}} circular />}    
    >
      <Button  icon='cancel' color='red' onClick={() => setOpen(false)} floated='right'style={{ marginRight:'1%',  marginTop:'1%'}}/> 
       <Header as='h4' icon='doctor' content='SISTEMA GENITO SEXUAL'  />    
        <Card.Content style={{justifyContent: 'center', display:'flex'}}>
        <Header  icon='venus mars' content='Ciclo sexual [Hombre/Mujer]'  style={{ marginTop:'1%'}} />  
        <br/>
        <Input 
        style={{ marginLeft:'1%'}} 
        name='sexualDay' 
        type='number' 
        icon='venus mars' 
        placeholder='Día' 
        onChange={handleInputChange} 
        error={!datos.sexualDay === 0 ? error.required : null}
        />
         <Button content='Resultados' disabled={disabled4()} onClick={sexualCycle} icon='lab' color='blue'style={{ marginLeft:'1%'}}   />
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

export default ReproductiveSystem