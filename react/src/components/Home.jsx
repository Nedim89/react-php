import {useState} from "react";
import products from '../ProductsData'

function Home() {

const [data, setData] = useState(products);

  return (
    <div>
      <h1>Home Page</h1>
      {console.log(data)}
    </div>
  );
}

export default Home;
