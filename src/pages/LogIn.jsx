import React, { useState } from "react";
import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./Signup";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";

export default function LogIn({authenticate}) {
  const [form, setForm] = useState({
        username: "",
        password: "",
      });
      const { username, password } = form;
      const [error, setError] = useState(null);
      const navigate = useNavigate();
    
      function handleInputChange(event) {
        const { name, value } = event.target;
    
        return setForm({ ...form, [name]: value });
      }
    
      function handleFormSubmission(event) {
        event.preventDefault();
        const credentials = {
          username,
          password,
        };
        login(credentials).then((res) => {
          if (!res.status) {
            return setError({ message: "Invalid credentials" });
          }
          USER_HELPERS.setUserToken(res.data.accessToken);
          authenticate(res.data.user);
          if(res.data.user.role == "admin"){
            navigate("/newproduct");
          }else{
            navigate("/");
          }
          navigate(PATHS.HOMEPAGE);
        });
      }

  return (
    <>    
      <div className="min-h-full flex">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            
            <div>
                <img
                  className="h-20 w-auto"
                  src="/images/heading.png"
                  alt="Workflow"
                />
                
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Iniciar Sesión</h2>
                <p className="mt-2 text-sm text-gray-600">
                  ¿No tienes cuenta? {' '}
                  
                  <a href="/auth/signup" className="font-medium text-red-700 hover:text-gray-900">
                    Registrate aquí
                  </a>
                </p>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form onSubmit={handleFormSubmission} className="space-y-6 signup__form">
                  <div>
                    <label htmlFor="input-username" className="block text-sm font-medium text-gray-700">
                      Usuario
                    </label>
                    <div className="mt-1">
                      <input
                         id="input-username"
                                   type="text"
                                   name="username"
                                   placeholder="Usuario"
                                   value={username}
                                   onChange={handleInputChange}
                                   required
                        className="appearance-none block w-full px-3 py-2 border 
                                 border-gray-300 rounded-md shadow-sm 
                                 placeholder-gray-400 focus:outline-none 
                                 focus:ring-gray-500 
                                 focus:border-gray-500  
                                 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="input-password" className="block text-sm font-medium text-gray-700">
                      Contraseña
                    </label>
                    <div className="mt-1">
                      <input
                          id="input-password"
                          type="password"
                          name="password"
                          placeholder="Contraseña"
                          value={password}
                          onChange={handleInputChange}
                          required
                          minLength="8"
                        className="appearance-none block w-full px-3 py-2 border 
                                  border-gray-300 rounded-md shadow-sm 
                                  placeholder-gray-400 focus:outline-none 
                                  focus:ring-gray-500 
                                  focus:border-gray-500 
                                  sm:text-sm"
                      />
                                   {error && (
                                  <div className="error-block">
                                    <p>There was an error submiting the form:</p>
                                    <p>{error.message}</p>
                                  </div>
                                )}
                    </div>
                  </div>


                  <div>
                    <button
                      type="submit"
                      className="button__submit
                                w-full flex justify-center 
                                py-2 px-4 border border-transparent 
                                rounded-md shadow-sm text-sm font-medium 
                                text-white 
                                bg-gray-700
                                hover:bg-gray-600 
                                focus:outline-none focus:ring-2 
                                focus:ring-offset-2 focus:ring-red-500"
                    >
                      Iniciar Sesión
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="/images/img-login.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  )
}
