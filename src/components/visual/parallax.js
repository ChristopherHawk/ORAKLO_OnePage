import './css/parallax.css';
const { Container, CardContent } = require("semantic-ui-react")

const Parallax = () => {
  return ( 
  <Container id='parallax'>
  
  <CardContent id='stars'></CardContent>
  <CardContent id='stars2'></CardContent>
  <CardContent id='stars3'></CardContent>

  </Container>
   );
}
 
export default Parallax;