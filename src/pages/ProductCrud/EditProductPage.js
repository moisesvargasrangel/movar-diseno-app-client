import { useState, useEffect } from "react";
import { useParams, useNavigate} from "react-router-dom";
import axios from "axios";
 
const API_URL = `${process.env.REACT_APP_SERVER_URL}`;
 
function EditProductPage(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [material, setMaterial] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const {productId} = useParams()
  const navigate = useNavigate()
 
  useEffect(() => {
    axios.get(`${API_URL}/gallery/${productId}`)
    .then((resultado)=>{
      const {name, price, material, description, image} = resultado.data;
      setName(name);
      setPrice(price);
      setMaterial(material);
      setDescription(description);
      setImage(image);      
    })
    .catch(console.log)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`${API_URL}/gallery/${[productId]}`, {name, price, material, description, image})
    .then(resultado => {
      navigate("/gallery")
    })
    .catch(console.log)
  }

  return (
  <div classname="EditProductPage">
    <div>
      <>
        <div className="newProductContainer">
          <div className="md:grid md:grid-cols-3 md:gap-6">

            <div className="mt-2 md:mt-10 md:col-span-3 px-10 py-10">
              <form onSubmit={handleSubmit}>
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <h2 className="text-xl font-bold text-gray-900">Editar Producto</h2>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Nombre del Producto
                      </label>

                        <div className="mt-1">
                          <input
                            type="text"
                            name="name"
                            rows={3}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="shadow-sm focus:ring-indigo-500
                                      focus:border-indigo-500 mt-1 block w-full 
                                      sm:text-sm border border-gray-300 rounded-md"
                            placeholder="Nombre del Producto"
                          
                          />
                        </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                          Precio
                      </label>

                        <div className="mt-1">
                          <input
                            type="number"
                            name="price"
                            value={price}
                            rows={3}
                            onChange={(e) => setPrice(e.target.value)}
                            className="shadow-sm focus:ring-indigo-500
                                      focus:border-indigo-500 mt-1 block w-full 
                                      sm:text-sm border border-gray-300 rounded-md"
                            placeholder="Precio"
                            
                          />
                        </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Material
                      </label>

                        <div className="mt-1">
                          <input
                            type= "text"
                            name="material"
                            value={material}
                            rows={3}
                            className="shadow-sm focus:ring-indigo-500
                                      focus:border-indigo-500 mt-1 block w-full 
                                      sm:text-sm border border-gray-300 rounded-md"
                            placeholder="Material"
                            onChange={(e) => setMaterial(e.target.value)}
                          />
                        </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Descripción
                      </label>

                        <div className="mt-1">
                          <textarea
                            type="text"
                            name="Description"
                            rows={3}
                            value={description}
                            className="shadow-sm focus:ring-indigo-500
                                      focus:border-indigo-500 mt-1 block w-full 
                                      sm:text-sm border border-gray-300 rounded-md"
                            placeholder="Descripción"
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        URL de la imagen
                      </label>

                        <div className="mt-1">
                          <textarea
                            type="text"
                            name="Image"
                            rows={3}
                            value={image}
                            className="shadow-sm focus:ring-indigo-500
                                      focus:border-indigo-500 mt-1 block w-full 
                                      sm:text-sm border border-gray-300 rounded-md"
                            placeholder="URL de la imagen"
                            onChange={(e) => setImage(e.target.value)}
                          />
                        </div>
                    </div>           
                  </div>

                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex 
                      justify-center py-2 px-4 
                      border border-transparent 
                      shadow-sm text-sm font-medium 
                      rounded-md text-white 
                      bg-gray-700 
                      hover:bg-gray-600  
                      focus:outline-none 
                      focus:ring-2 
                      focus:ring-offset-2 
                      focus:ring-indigo-500"
                    >
                      Editar Producto
                    </button>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    </div>
 </div>
  );
}
 
export default EditProductPage;