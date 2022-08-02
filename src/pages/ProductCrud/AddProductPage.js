import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
 
const API_URL = "http://localhost:5005";
 
function AddProduct(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [material, setMaterial] = useState("");
  const [description, setDescription] = useState("")
 
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {                          
    // <== ADD
    // Nos ayuda a prevenir el comportamiento por defecto /Que se recargue toda la PAG
    e.preventDefault();
 
    const requestBody = { name, price, material, description };
    axios
      .post(`${API_URL}/api/gallery`, requestBody)
      .then((response) => {
        // Reset the state
        setName("");
        setPrice("");
        setMaterial("");
        setDescription("");
        navigate("/gallery");
      })
      .catch((error) => console.log(error));
  };
 
  
  return (
    <div className="AddProduct">
      <h3>Add Product</h3>
 
      <form onSubmit={handleSubmit}>          {/*  <== UPDATE   */}
        <label>name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
 
        <label>price:</label>
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label>material:</label>
        <textarea
          type="text"
          name="material"
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
        />

<label>description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
 
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
 
export default AddProduct;