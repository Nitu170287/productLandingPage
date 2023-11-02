
import "./style.css";

import {  Container, Topdiv,Content,Bottom} from "../styledComponents"

const Card = ({ product }) => {
    
  return (
    <div className="card">

    <Container>
    <Topdiv>
    <img src={product.image} alt="product"/>
    </Topdiv>

    <Bottom>
      <Content>
        <div className="title">{product.title.substring(0, 30) + "..."}</div>
        <div className="desc">{product.description.substring(0, 80)} <span>Read more...</span></div>
      <div  className="price">${product.price}</div>
      </Content>
    </Bottom>
    
      
      
      

     
    </Container>
    </div>
  );
};
export default Card;
