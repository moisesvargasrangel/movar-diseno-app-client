import logo from "../logo.svg";
import "../App.css";

export default function HomePage() {
  return (
    
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
              ¡Tu espacio está en las mejores manos!
              </h2>

              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Nos encargamos de acondicionar tu espacio de acuerdo a tus necesidades, para que tú, tu familia y tus clientes disfruten del mejor lugar.
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
    </div>
  )
}
