import {useState} from "react";
import products from '../ProductsData'
import {Link} from 'react-router-dom'

function Home() {

const [data, setData] = useState(products);

  return (
    <div>
      <div className="wrap-header">
      <h1>Product List</h1>
      <nav>
      <Link className="link_button" to="addproduct"> ADD </Link>
      <a className="link_button" href="/">MASS DELETE</a>
      </nav>
      </div>
    
      <div className="line"></div>
      <div className="article-wrap">
      {data.map((product)=>{
        return(
            <article key={product.id} style={{border: "1px solid black"}}>
            <input id="checkbox" type="checkbox"></input>
            <p>{product.id}</p>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </article>)
      })}
      </div>
    </div>
  );
}

export default Home;
