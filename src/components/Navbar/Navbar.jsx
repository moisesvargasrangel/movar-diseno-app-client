import { Fragment, React } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, ShoppingCartIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from "react-router-dom";
import "./Navbar.css";


const navigation = [
  { name: 'Inicio', href: '/', current: false },
  { name: 'Catálogo', href: '/gallery', current: false },
  { name: 'Acerca de Nosotros', href: '/aboutus', current: false },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar(props) {
  const {user, handleLogout} = props;

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md 
                                            text-gray-400 
                                            hover:text-white
                                            hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src="/images/logo-navbar.png"
                      alt="LogoNavbar"
                    />
                  </Link>
                  <Link to="/">
                  <img
                    className="hidden lg:block h-10 w-auto"
                    src="/images/logo-navbar.png"
                    alt="Logo Navbar"
                    href="/"
                  />
                  </Link>
                </div>
                <div className="hidden sm:block sm:m-auto">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                          >
                          {item.name}
                      </Link>
                    ))}
                  </div>
                </div>


                <div className="hidden sm:block sm:m-auto">
                  <div className="flex space-x-4">

    {/* -----NO HAY INICIO DE SESIÓN-------- */}
    
                    {!user && (
                      <>
                          <Link
                              to="/auth/login"
                              className= 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'   
                          >
                            Iniciar Sesión
                          </Link>

                          <Link
                              to="/auth/signup"
                              className= 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'        
                          >
                            Registrate
                          </Link>
                      </>
                      
                    )}

     {/* -----SI HAY SESIÓN-------- */}  
                    
                    {user && (
                      <>
                          <div className=' text-gray-300 px-4 py-2 rounded-md text-sm font-medium'>
                          Bienvenid@ <b>{user?.username}</b> 
                          </div>

                          {user.role == "admin" &&
                              <Link
                                  to="/newproduct"
                                  className= 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'   
                              >
                                Agregar Producto
                              </Link>
                            }

                          <button
                              onClick={handleLogout}                            
                              className= ' text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                                
                                {/* {user?.email} */}
                               Cerrar Sesión
                          </button>
                      </>
                )}
                  </div>
                </div>
              </div>



              <div className="absolute inset-y-0 
                              right-0 flex items-center pr-2 
                              sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <div className="bg-gray-800 flex text-sm rounded-full 
                                              focus:outline-none focus:ring-2 focus:ring-offset-2 
                                              focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://avatars.githubusercontent.com/u/106891043?v=4"
                        alt="User Image"
                      />
                    </div>
                  </div>
                  
                </Menu>
              </div>
            </div>


            
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
      
    </Disclosure>
  )
}
