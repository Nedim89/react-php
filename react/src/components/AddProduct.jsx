import {useState} from 'react'
import axios from 'axios'
import './StyleAddProduct.css'

function AddProduct() {
  const [SKU,setSKU] = useState('');
  const [name,setName] = useState('');
  const [price,setPrice] = useState('');
  const [typeSwitch,setTypeSwitch] = useState("DVD");
  const [size,setSize] = useState('');
  const [height,setHeight] = useState('');
  const [width,setWidth] = useState('');
  const [length,setLength] = useState('');
  const [weight, setWeight] = useState('');


  const handleSubmit = () => {
    if(name.length === 0){
      alert("Name has left Blank!");
    }
    else if(price.length === 0){
      alert("Mobile has left Blank!");
    }
    
    else if (typeSwitch=== true){
      const url = 'http://localhost/enquiry.php';
      let fData = new FormData();
      fData.append('SKU', SKU);
      fData.append('name', name);
      fData.append('price', price);
      fData.append('size', size);
      fData.append('height', height);
      fData.append('width', width);
      fData.append('length', length);
      fData.append('weight', weight);



      axios.post(url, fData).then(response=> alert(response.data)).catch(error=> alert(error));
    }

    else{
      const url = 'http://localhost/enquiry.php';
      let fData = new FormData();
      fData.append('SKU', SKU);
      fData.append('name', name);
      fData.append('price', price);

      axios.post(url, fData).then(response=> alert(response.data)).catch(error=> alert(error));

    }
  }

  return (
    <>
    <div className="wrap-header">
      <h1>Product Add</h1>
      <nav>
      <a className="link_button" to="addproduct" onClick={()=>{console.log("Submited")}}> Save </a>
      <a className="link_button">Cancel</a>
      </nav>
      </div>
    
      <div className="line"></div>
      



      
      <form
                id="product_form"
                action="http://localhost:8000/server.php"
                method="post"
                onSubmit={(event) => handleSumbit(event)}
            >
        <div>
        <span>SKU</span>
        <span><input type="text" name="SKU" id="SKU" value={SKU} onChange={(e) => setSKU(e.target.value)} /></span>
        </div>

        <div>
        <div htmlFor="name">Name</div>
        <div><input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} /></div>
       </div>
        <div>
        <div htmlFor="price">Price ($)</div>
        <div><input type="number" name="price" id="price" value={price} onChange={(e) => setPrice(e.target.value)} /></div>
        </div>
        <div>
        <div htmlFor="typeSwitch">Type Switcher</div>
          <div><select name="typeSwitch" id="typeSwitch" onChange={(e) => setTypeSwitch(e.target.value)}>
          <option value="DVD">DVD</option>
          <option value="Furniture">Furniture</option>
          <option value="Book">Book</option>
          </select>
          </div>
        </div>
        

{typeSwitch=="DVD"?
<div>
<div htmlFor="size">Size (MB)</div>
  <div><input type="number" name="size" id="size" value={size} onChange={(e) => setSize(e.target.value)} /></div>
</div> : ""}
{typeSwitch=="Furniture"?
<div>
  <div htmlFor="height">Height (CM)</div>
  <div><input type="number" name="height" id="height" value={height} onChange={(e) => setHeight(e.target.value)} /></div>

  <div htmlFor="width">Width (CM)</div>
  <div><input type="number" name="width" id="width" value={width} onChange={(e) => setWidth(e.target.value)} /></div>

  <div htmlFor="length">Length (CM)</div>
  <div><input type="number" name="length" id="length" value={length} onChange={(e) => setLength(e.target.value)} /></div>
</div> : ""}
  
  { typeSwitch=="Book"?
  <div>
  <div htmlFor="weight">Weight (KG)</div>
  <div><input type="number" name="weight" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} /></div>
</div>
    :
    ""
    }
 
  

      </form>
    </>
  );
}

export default AddProduct;
