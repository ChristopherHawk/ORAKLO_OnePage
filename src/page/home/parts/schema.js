import { CardContent, Image, Header } from "semantic-ui-react";
import './css/schema.css';
const CentralSchema = ({imgSchema, contentTittle}) => {
  return ( 
<CardContent id='DivSchema'>
<Header content={contentTittle} id='SchemaTittle'/>
<Image id='ImgSchema' src={imgSchema}/>
</CardContent>
  
   );
}
 
export default CentralSchema;