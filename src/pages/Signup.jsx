import React, { useState } from "react";
import { signup } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";

export default function Signup() {
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
                <a href="/auth/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Iniciar Sesión
                </a>
            </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo Electrónico
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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

// export default function Signup({ authenticate }) {
//   const [form, setForm] = useState({
//     username: "",
//     password: "",
//   });
//   const { username, password } = form;
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   function handleInputChange(event) {
//     const { name, value } = event.target;
//     return setForm({ ...form, [name]: value });
//   }

//   function handleFormSubmission(event) {
//     event.preventDefault();
//     const credentials = {
//       username,
//       password,
//     };
//     signup(credentials).then((res) => {
//       if (!res.status) {
//         // unsuccessful signup
//         console.error("Signup was unsuccessful: ", res);
//         return setError({
//           message: "Signup was unsuccessful! Please check the console.",
//         });
//       }
//       // successful signup
//       USER_HELPERS.setUserToken(res.data.accessToken);
//       authenticate(res.data.user);
//       navigate(PATHS.HOMEPAGE);
//     });
//   }

//   return (
//     <div>
//       <h1>Sign Up</h1>
//       <form onSubmit={handleFormSubmission} className="auth__form">
//         <label htmlFor="input-username">Username</label>
//         <input
//           id="input-username"
//           type="text"
//           name="username"
//           placeholder="Text"
//           value={username}
//           onChange={handleInputChange}
//           required
//         />

//         <label htmlFor="input-password">Password</label>
//         <input
//           id="input-password"
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={password}
//           onChange={handleInputChange}
//           required
//           minLength="8"
//         />

//         {error && (
//           <div className="error-block">
//             <p>There was an error submiting the form:</p>
//             <p>{error.message}</p>
//           </div>
//         )}

//         <button className="button__submit" type="submit">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

