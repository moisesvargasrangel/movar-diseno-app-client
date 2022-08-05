import React, { useState } from "react";
import { signup } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";

export default function Signup({authenticate}) {
  const [form, setForm] = useState({
    username: "",
    password: "",
    country: "",
    email: "",
    fullName: "",
    role: "user",
  });
  const { username, password, country, email, fullName, role } = form;
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
      country,
      email,
      fullName,
      role
    };

    signup(credentials).then((res) => {
      if (!res.status) {
        // UNSUCCESSFUL SIGNUP
        console.error("Signup was unsuccessful: ", res);
        return setError({
          message: "Signup was unsuccessful! Please check the console.",
        });
      }
      // SUCCESSFUL SIGNUP
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.HOMEPAGE);
    });
  }

  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">

        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              className="mx-auto h-40 w-auto"
              src="/images/heading.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Registrarte </h2>          
            <p className="mt-2 text-center text-sm text-gray-600">
              ¿Ya tienes cuenta? {' '}              
                <a href="/auth/login" className="font-medium text-red-700 hover:text-gray-900">
                  Iniciar Sesión
                </a>
            </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleFormSubmission} className="space-y-6 auth__form"  action="#" method="POST">

              <div>
                <label htmlFor="input-username" className="block text-sm font-medium text-gray-700">
                  Nombre de Usuario
                </label>
                <div className="mt-1">
                  <input
                    id="input-username"
                    type="text"
                    name="username"
                    placeholder="Nombre de Usuario"
                    value={username}
                    onChange={handleInputChange}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
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
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                  <label htmlFor="input-fullName" className="block text-sm font-medium text-gray-700">
                    Nombre
                  </label>
                  <div className="mt-1">
                    <input
                      id="input-fullName"
                      type="text"
                      name="fullName"
                      placeholder="Nombre"
                      value={fullName}
                      onChange={handleInputChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
              </div>

              <div>
                  <label htmlFor="input-country" className="block text-sm font-medium text-gray-700">
                    País
                  </label>
                  <div className="mt-1">
                    <input
                      id="input-country"
                      type="text"
                      name="country"
                      placeholder="País"
                      value={country}
                      onChange={handleInputChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
              </div>

              <div>
                  <label htmlFor="input-email" className="block text-sm font-medium text-gray-700">
                    Correo Electrónico
                  </label>
                  <div className="mt-1">
                    <input
                      id="input-email"
                      type="text"
                      name="email"
                      placeholder="Correo Electrónico"
                      value={email}
                      onChange={handleInputChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
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
                  ¡Comienza ahora!
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

