
import Card from "../card";
import "./style.css";


const Cards = ({state}) => {
  
  if (state?.loading) {
    return <>Loading..</>;
  }

  if (state?.error) {
    return <p>Error:{state.error}</p>;
  }

  return (
    <div className="cards">
    
    { state?.products.map((e,i)=>
    (<Card key={i} product={e} className="card"/>))}
      
      
    </div>
  );
};
export default Cards;
