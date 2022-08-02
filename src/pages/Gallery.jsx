import { Link } from 'react-router-dom'
import { PlusSmIcon as PlusSmIconSolid } from '@heroicons/react/solid'
import { PlusSmIcon as PlusSmIconOutline } from '@heroicons/react/outline'


const products = [
  {
    id: 1,
    name: 'Cocina Integral',
    color: 'Muebles en MDF, con cubierta de Piedra',
    href: '#',
    imageSrc: '/images/gallery/1.jpg',
    imageAlt: 'Mueble 1',
    price: '$20,000.00',
  },
  {
    id: 2,
    name: 'Vestidor',
    color: 'Muebles en MDF color Rioja',
    href: '#',
    imageSrc: '/images/gallery/2.jpg',
    imageAlt: 'Mueble 1',
    price: '$14,000.00',
  },
  {
    id: 3,
    name: 'Cocina Integral',
    color: 'Muebles en MDF, con cubierta de Piedra',
    href: '#',
    imageSrc: '/images/gallery/3.jpg',
    imageAlt: 'Mueble 1',
    price: '$18,000.00',
  },
  {
    id: 4,
    name: 'Cocina Integral',
    color: 'Muebles en MDF, con cubierta de Piedra',
    href: '#',
    imageSrc: '/images/gallery/4.jpeg',
    imageAlt: 'Mueble 1',
    price: '$13,000.00',
  },
  // More products...
]

export default function Gallery() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-gray-900">Nuestros Productos</h2>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}>
              <div className="relative">
                <div className="relative w-full h-72 rounded-lg overflow-hidden">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-white">{product.price}</p>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href={product.href}
                  className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  Agregar al carrito <span className="sr-only">, {product.name}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
{/* 
      <div>
        <Link to= "/">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border 
                      border-transparent text-sm font-medium rounded-md 
                      text-indigo-700 bg-indigo-100 
                      hover:bg-indigo-200 focus:outline-none 
                      focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Nuevo Producto
          </button>
      </Link>
      </div> */}
    </div>
    
  )
}
