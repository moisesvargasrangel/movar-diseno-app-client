/* This example requires Tailwind CSS v2.0+ */
import { NewspaperIcon, PhoneIcon, SupportIcon, HomeIcon, PresentationChartLineIcon, OfficeBuildingIcon} from '@heroicons/react/outline'

const supportLinks = [
  {
    name: 'Negocio',
    href: '#',
    description:
      'Sabemos lo importante que es tu negocio para ti, por eso nos comprometemos a darle el mejor servicio.',
    icon: PresentationChartLineIcon,
  },
  {
    name: 'Hogar e Interiores',
    href: '#',
    description:
      'Dejanos complacer las necesidades de tu familia, fabricando muebles con la calidad que ellos se merecen.',
    icon: HomeIcon,
  },
  {
    name: 'Exposiciones y Stands',
    href: '#',
    description:
      '¿Necesitas llevar tu negocio a otro nivel? Nos encantaría poder coolaborar contigo para dar ese gran salto.',
    icon: OfficeBuildingIcon,
  },
  
]

const people = [
  {
    name: '2017 Expo Mueble Internacional - Stand Whirlpool',
    role: 'Expo Guadalajara.',
    imageUrl:
      '/images/homepage/aa.jpeg',
  },
  {
    name: 'Cocina Intregal',
    role: 'Huixquilucan, Edo de Mex.',
    imageUrl:
      '/images/gallery/1.jpg',
  },
  {
    name: '2022 Expo Mueble Internacional - Stand Whirlpool',
    role: 'Expo Guadalajara.',
    imageUrl:
      '/images/homepage/cc.png',
  },
  {
    name: '2019 Expo Mueble WTC - Stand Mabe',
    role: 'WTC, CDMX.',
    imageUrl:
      '/images/homepage/bb.jpg',
  },
  {
    name: 'Cocina de Exhibición - Whirlpool',
    role: 'Palacio de Hierro Polanco, CDMX.',
    imageUrl:
      '/images/homepage/z.jpg',

  },
  {
    name: 'Cocina Integral',
    role: 'Roma, CDMX.',
    imageUrl:
      '/images/homepage/a.jpg',

  },

]
  

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative pb-32 bg-gray-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="/images/about-us.png"
            alt=""
          />
          <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5l lg:text-5xl">¡Tu espacio está en las mejores manos!</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
          Nos encargamos de acondicionar tu espacio de acuerdo a tus necesidades, 
          para que tú, tu familia y tus clientes disfruten del mejor lugar.

          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >

        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div key={link.name} className="flex flex-col bg-white rounded-2xl shadow-xl">
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-3 inline-block bg-red-700 rounded-xl shadow-lg transform -translate-y-1/2">
                  <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                <p className="mt-4 text-base text-gray-500">{link.description}</p>
              </div>

            </div>
          ))}
        </div>
      </section>

      <div className="bg-white">
      <div className="mx-auto py-0 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-0">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Bienvenido a Movar Diseño</h2>
            <p className="text-xl text-gray-500">
              Dejanos mostrate un poco de nuestro trabajo...
            </p>
          </div>
          <ul
            role="list"
            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2">
                    <img className="object-cover shadow-lg rounded-lg" src={person.imageUrl} alt="" />
                  </div>

                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>{person.name}</h3>
                      <p className="text-indigo-600">{person.role}</p>
                    </div>
                    <ul role="list" className="flex space-x-5">

                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>


    </div>







  )
  
}


