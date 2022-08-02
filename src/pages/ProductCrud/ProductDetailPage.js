import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
 

function ProductDetailPage (props) {
  const [product, setProduct] = useState(null);

  const {productId} = useParams();
  const navigate = useNavigate()

 useEffect(() =>{
  axios.get(`http://localhost:5005/api/gallery/${productId}`)
  .then(resultado => {
   setProduct(resultado.data)
  })
  .catch(console.log)
 },[]);
  

 const handleDelete = () => {
  axios.delete(`http://localhost:5005/api/gallery/${productId}`)
  .then(() =>{
    navigate("/gallery")
  })
  .catch(console.log)
 }

  return (
    <div className="ProductDetails">
      {product && (
        <>
          <h1>{product.name}</h1>
          <p>{product.price}</p>
          <p>{product.material}</p>
          <p>{product.description}</p>
        </>
      )}
 
      <Link to="/gallery">
        <button><b>Back to products</b></button>
      </Link>
    <br></br>
    {
      product &&
      <Link to={`/gallery/edit/${product._id}`}>
        <button><b>Edit</b></button>
      </Link>
    }
      <br></br>
    <button onClick={handleDelete}><b>Delete</b></button>

    </div>
  );
}
 
export default ProductDetailPage;