// src/pages/EditProductPage.js
 
import { useState, useEffect } from "react";
import { useParams, useNavigate} from "react-router-dom";
import axios from "axios";
 
const API_URL = "http://localhost:5005";
 
function EditProductPage(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [material, setMaterial] = useState("");
  const [description, setDescription] = useState("");

  const {productId} = useParams()

  const navigate = useNavigate()

  
  useEffect(() => {
    axios.get(`${API_URL}/api/gallery/${productId}`)
    .then((resultado)=>{
      // console.log(resultado.data);
      const {name, price, material, description} = resultado.data;

      setName(name);
      setPrice(price);
      setMaterial(material);
      setDescription(description);
      
    })
    .catch(console.log)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(name, price, material, description);
    axios.put(`${API_URL}/api/gallery/${[productId]}`, {name, price, material, description})
    .then(resultado => {
      // console.log(resultado)
      navigate("/gallery")
    })
    .catch(console.log)
  }

  return (
    <div classname="EditProductPage">
      <h3>Edit the Prodect</h3>
 
      <form onSubmit={handleSubmit}>
        <label>name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
 
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
 
export default EditProductPage;