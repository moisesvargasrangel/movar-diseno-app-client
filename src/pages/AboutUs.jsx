import logo from "../logo.svg";
import "../App.css";

export default function AboutUs() {
  return (











    //<------------ONE BLOCK---------->
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>

            <div class="logo-homepage">
              <img 
                src="/images/heading.png">
              </img>
            </div>

            <div className="homepage-text">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Nuestra historia
              </h2>

              <p className="mt-3 max-w-3xl text-lg text-gray-500">
              Desde hace 30 años, nos hemos dedicado a cumplir con 
            las necesidades de las familias respecto al
            diseño de su hogar. No basta con cumplir 
            el aspecto visual, la <b>funcionalidad</b> y  
            <b> calidad</b> de los muebles es nuestra prioridad.
              </p>
            </div>

          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            <div className="col-span-1 flex justify-center py-1 px-1 bg-gray-50">
              <img
                className="max-h-30"
                src="/images/homepage/3.jpg"
                alt="1"
              />
            </div>
            <div className="col-span-1 flex justify-center py-1 px-1 bg-gray-50">
              <img className="max-h-30" 
              src="/images/homepage/5.jpg" 
              alt="2" 
            />
            </div>
            <div className="col-span-1 flex justify-center py-1 px-1 bg-gray-50">
              <img className="max-h-30" 
              src="/images/homepage/4.jpg" 
              alt="3"
            />
            </div>
            <div className="col-span-1 flex justify-center py-1 px-1 bg-gray-50">
              <img
                className="max-h-30"
                src="/images/homepage/6.jpg"
                alt="4"
              />
            </div>
          </div>
        </div>
      </div>


      <div className="bg-white py-16 lg:py-0">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative py-24 px-8 bg-gray-700 rounded-xl shadow-2xl overflow-hidden lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="absolute inset-0 opacity-50 filter saturate-0 mix-blend-multiply">
            <img
              src="/images/homepage/bar-div2.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative lg:col-span-1">
            <img className="h-12 w-auto" src="/images/logo-navbar.png" alt="" />
            <blockquote className="mt-6 text-white">
              <p className="text-xl font-medium sm:text-2xl">
                Aprovechemos hasta el último rincón.
              </p>
              <footer className="mt-6">
                <p className="flex flex-col font-medium">
                  <span>
                    <p> 
                        Hoy en día, las familias necesitan aprovecha todo el espacio que
                        tengan disponible. Es necesario adaptar los muebles de una forma funcional e inteligente,
                        no es suficiente con que tenga una buena apariencia.
                    </p>
                    <br> 
                  
                    </br>
                    <p className="text-xl font-medium sm:text-2xl">
                    Funcionalidad, estilo, y eficiencia,
                    </p>
                    <p className="text-xl font-medium sm:text-2xl">
                    materializemos lo que imaginas.
                    </p>
                  </span>
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>




    </div>
  )
}
