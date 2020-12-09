import React from 'react'
import { Button, Header, Image, Modal, Form, Input, Icon } from 'semantic-ui-react'


function SettingsUser() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button icon='settings' color= 'black' floated='right'/>}
    >
      <Modal.Header><Icon name='cogs'/> Configuraciones</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='https://arthasarathi.com/arthasarthi/images/user-img.png' wrapped />
        <Modal.Description>
        <Header><Icon name='user'/> Datos de </Header>
          
        <Form>
    <Form.Field>
      <Input type='number' iconPosition='left'  labelPosition='right' icon='text height' label='Estatura' value=''/>    
    </Form.Field>
    <Form.Field>
      <Input type='number' iconPosition='left'  labelPosition='right' icon='weight' label='Peso' value=''/>
    </Form.Field>    
    <Form.Field>
      <Input icon='stopwatch' iconPosition='left'  labelPosition='right' label='Actividad Física' value=''/>
    </Form.Field>    
    <Form.Field>
      <Input icon='heart' iconPosition='left'  labelPosition='right' label='Relación de pareja' value=''/>
    </Form.Field>    
  </Form>
</Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)} content='Cancelar'/>
        <Button
          content="Actualizar"
          labelPosition='right'
          icon='undo'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default SettingsUser
