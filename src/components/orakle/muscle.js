import React, {useState} from 'react'
import { Button, Modal, Header, Input, Card, CardContent } from 'semantic-ui-react'


const error = {
  required: {
    content: 'Campo obligatorio',
    pointing: 'below',
  }
}



function MuscleData  ({data}) {

const [mensaje, setMensaje] = useState('');
const [datos, setDatos] = useState({ 
  exercise: ''
});

const handleInputChange = (e, { value, name }) => setDatos({ ...datos, [name]: value });


const disabled4 = () => datos.exercise <= 0; 





const muscleUser  = () =>{
  let exercise = datos.exercise;
  let normalExercise  = exercise > 3 && exercise < 6
  let lowExercise = exercise < 3;
  let hightExercise = exercise > 5;
  

  if(normalExercise){
    setMensaje('¡Muy bien! Manten este ritmo para cuidar tu salud.');
    return
  }
  if(hightExercise){
    setMensaje('¡Excelente! Esta es la marca de un atleta.');
    return
  } 
  if(lowExercise){
    setMensaje('El sedentarismo no es bueno para tú salud. Aumenta tu actividad física.');
    return
  }
  }

const [open, setOpen] = useState(false)


return (
    <Modal
    onClose={() => setOpen(false)}
    onOpen={() => setOpen(true)}
    open={open}
    trigger={<Button color='orange' icon='child' size='massive' style={{position:'absolute', left:'5%', top:'5%'}} circular  />}    
    >
      <Button  icon='cancel' color='red' onClick={() => setOpen(false)} floated='right'style={{ marginRight:'1%',  marginTop:'1%'}}/> 
       <Header as='h4' icon='doctor' content='Sistema osteoesquelético'  />    
        <Card.Content style={{justifyContent: 'center', display:'flex'}}>
        <Header  icon='child' content='Actividad Física/Semana'  style={{ marginTop:'1%'}} />  
        <br/>
        <Input 
        style={{ marginLeft:'1%'}} 
        name='exercise' 
        type='number' 
        icon='child' 
        placeholder='Ejercicio' 
        onChange={handleInputChange} 
        error={!datos.exercise === 0 ? error.required : null}
        />
         <Button content='Resultados' disabled={disabled4()} onClick={muscleUser } icon='lab' color='blue'style={{ marginLeft:'1%'}}   />
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

export default MuscleData  