const faqs = [
  {
    id: 1,
    question: "¿Mis productos tienen garantía?",
    answer:
      "Claro que si. Todos nuestros productos tienen garantía por defecto de fábrica. El tiempo puede varíar dependiendo del producto."
  },
  {
    id: 2,
    question: "¿Sólo tienen los productos exhibidos en su portal?",
    answer:
      "No, los productos mostrados en el portal, solo son algunos de los muchos que fabricamos para ustedes."
  },
  {
    id: 3,
    question: "¿Fabrican muebles sobre medida?",
    answer:
      "Si, adaptamos la funcionalidad y el diseño de acuerdo a las necesidades que tengan usted y su hogar. "
  },
  {
    id: 4,
    question: "¿Como sé que mi compra es segura?",
    answer:
      "Movar Diseño ofrece la visita a las instalaciones, para que puedan observar el proceso, el taller y los productos. De esta manera usted podrá conocernos y tener la tranquilidad de que su inversión es segura. Además de que los productos sobre-pedido o sobre-medida, se liquidan hasta que se concluya la entrega del mismo."
  },
  {
    id: 5,
    question: "¿Aceptan tarjetas bancarias?",
    answer:
      "Si, a traves de nuestra terminal de BillPocket."
  },
  {
    id: 6,
    question: "¿Ofrecen MSI?",
    answer:
      "Si, es importante consultar la comisión que pueda tener su banco y el plazo requerido."
  },
]

export default function Questions() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 divide-y-2 divide-gray-200 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Preguntas Frecuentes</h2>
        <div className="mt-6 pt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-lg leading-6 font-medium text-gray-900">{faq.question}</dt>
                <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
