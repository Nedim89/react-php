import {useState} from 'react'
import axios from 'axios'
import './StyleAddProduct.css'

function AddProduct() {
  const [SKU,setSKU] = useState('');
  const [name,setName] = useState('');
  const [price,setPrice] = useState('');
  const [typeSwitch,setTypeSwitch] = useState(false);
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
      <div>
      <h1>Product Add</h1>
      <div>
        <button>Save</button>
        <button>Cancel</button>
      </div>
      </div>
      
      <div className='container'>
        <label htmlFor="SKU">SKU</label>
        <input type="text" name="SKU" id="SKU" value={SKU} onChange={(e) => setSKU(e.target.value)} />

        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="price">Price</label>
        <input type="number" name="price" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />

        <label htmlFor="typeSwitch">Type Switcher</label>
        <input type="checkbox" name="typeSwitch" id="typeSwitch" value={typeSwitch} onChange={(e) => setTypeSwitch(e.target.checked)} />

{typeSwitch?
<>
<label htmlFor="size">Size</label>
  <input type="number" name="size" id="size" value={size} onChange={(e) => setSize(e.target.value)} />

  <label htmlFor="height">Height</label>
  <input type="number" name="height" id="height" value={height} onChange={(e) => setHeight(e.target.value)} />

  <label htmlFor="width">Width</label>
  <input type="number" name="width" id="width" value={width} onChange={(e) => setWidth(e.target.value)} />

  <label htmlFor="length">Length</label>
  <input type="number" name="length" id="length" value={length} onChange={(e) => setLength(e.target.value)} />

  <label htmlFor="weight">Weight</label>
  <input type="number" name="weight" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
</>
    :
    ""
  
}

        <input type="button" name="submit" id="submit" value="SEND" onClick={handleSubmit} />
      </div>
    </>
  );
}

export default AddProduct;
