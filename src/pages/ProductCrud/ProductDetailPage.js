import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { CheckIcon, CurrencyDollarIcon, MenuIcon, PuzzleIcon } from '@heroicons/react/outline'

function ProductDetailPage (props,) {
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




 const tiers = [
  {
    name: 'Standard',
    href: '#',
    priceMonthly: 49,
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    features: [
      'Pariatur quod similique',
      'Sapiente libero doloribus modi nostrum',
      'Vel ipsa esse repudiandae excepturi',
      'Itaque cupiditate adipisci quibusdam',
    ],
  },
]






  return (
    <div className="ProductDetails">
      {/* {product && (
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
    <button onClick={handleDelete}><b>Delete</b></button> */}




    <div className="bg-gray-900">
      <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
            <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Detalles del producto
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 h-3/4 bg-gray-900" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
             
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  
                  <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                      <div className="mt-4 flex items-baseline text-4xl font-extrabold">
                        {product.name}                       
                      </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">                                         
                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <CurrencyDollarIcon className="h-6 w-6 text-red-800" aria-hidden="true" />
                            </div>
                            <p className="ml-3 text-base text-gray-700">${product.price}</p>
                          </li>

                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <PuzzleIcon className="h-6 w-6 text-blue-500" aria-hidden="true" />
                            </div>
                            <p className="ml-3 text-base text-gray-700">{product.material}</p>
                          </li>

                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <MenuIcon className="h-6 w-6 text-green-500" aria-hidden="true" />
                            </div>
                            <p className="ml-3 text-base text-gray-700">{product.description}</p>
                          </li>          
                  </div>

                  <div className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"> 
                    <Link to="/gallery">
                      <button><b>Back to products</b></button>
                    </Link>
                  </div>
                      <br></br>
                  <div className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900">     
                    {
                    product &&
                    <Link to={`/gallery/edit/${product._id}`}>
                      <button><b>Edit</b></button>
                    </Link>
                    }
                  </div>
                    <br></br>
                  <div className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900">     
                      <button onClick={handleDelete}><b>Delete</b></button>
                  </div>



                </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>





    </div>


    
  );
}
 
export default ProductDetailPage;