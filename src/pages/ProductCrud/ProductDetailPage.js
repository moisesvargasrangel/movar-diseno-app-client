import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { CheckIcon, CurrencyDollarIcon, MenuIcon, PuzzleIcon  } from '@heroicons/react/outline'

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
    <div className="bg-white">
      <section aria-labelledby="features-heading" className="relative">
        <div className="aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:w-1/2 lg:h-5/6 lg:pr-4 xl:pr-16">
          <img
            src={product?.image}
            alt="Product Image"
            className="h-full w-full object-center object-cover lg:h-full lg:w-full"
          />
        </div>

        <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pb-32 sm:px-6 lg:max-w-7xl lg:pt-12 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="lg:col-start-2">
            <h2 id="features-heading" className="font-medium text-gray-500">
              Detalles del Producto
            </h2>
            <p className="mt-4 text-4xl font-extrabold text-gray-900 tracking-tight">{product?.name}</p>


            <dl className="mt-20 grid grid-cols-1 gap-y-10 gap-x-8 text-lg sm:grid-cols-2">        
                <div >
                  <dt className="font-medium text-gray-900">Precio</dt>
                  <dd className="mt-2 text-gray-500">${product?.price}</dd>
                </div>

                <div >
                  <dt className="font-medium text-gray-900">Material</dt>
                  <dd className="mt-2 text-gray-500">{product?.material}</dd>
                </div>

                <div >
                  <dt className="font-medium text-gray-900">Descripción</dt>
                  <dd className="mt-2 text-gray-500">{product?.description}</dd>
                </div>              
            </dl>

            <span className="relative z-0 inline-flex shadow-sm rounded-md pt-60 pl-60">
              <Link to="/gallery">  
                <button
                  type="button"
                  className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-transparent bg-gray-100 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  Regresar a catálogo
                </button>
              </Link>
              {product &&
                <Link to={`/gallery/edit/${product._id}`}>
                  <button
                    type="button"
                    className="-ml-px relative inline-flex items-center px-4 py-2 border border-transparent bg-gray-100 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    Editar Producto 
                  </button>
                </Link>  
              }
                <button
                  onClick={handleDelete} 
                  type="button"
                  className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-transparent bg-gray-100 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  Borrar Producto
                </button>
            </span>
          </div>          
        </div>        
      </section>
    </div>

  );
}
 
export default ProductDetailPage;
