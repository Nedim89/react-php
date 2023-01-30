import {useState} from "react";
import products from '../ProductsData'

function Home() {

const [data, setData] = useState(products);

  return (
    <div>
      <h1>Home Page</h1>
      {data.map((product)=>{
        return(
            <article key={product.id} style={{border: "1px solid black"}}>
            <input type="checkbox"></input>
            <p>{product.id}</p>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </article>)
      })}
    </div>
  );
}

export default Home;
