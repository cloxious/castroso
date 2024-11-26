import { useState } from "react";
import usePageTitle from "../hooks/usePageTitle";

function FAQ() {
  usePageTitle("Preguntas Frecuentes");

  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "¿Cómo puedo adoptar una mascota?",
      answer:
        "Para adoptar una mascota, primero debes llenar un formulario de solicitud en nuestra página web o en persona en nuestro refugio. Luego, programaremos una visita para que conozcas a los animales disponibles. Si encuentras una mascota compatible, realizaremos una entrevista y una visita a tu hogar antes de finalizar la adopción.",
    },
    {
      question: "¿Cuáles son los requisitos para adoptar?",
      answer:
        "Los requisitos básicos incluyen ser mayor de 18 años, tener un hogar estable, contar con el consentimiento de todos los miembros de la familia, y estar dispuesto a proporcionar atención veterinaria regular. También evaluamos la compatibilidad entre el adoptante y la mascota.",
    },
    {
      question: "¿Cuál es el costo de adopción?",
      answer:
        "Las tarifas de adopción varían según el animal, pero generalmente cubren vacunas, esterilización/castración, microchip y un examen veterinario inicial. Los costos exactos se discuten durante el proceso de adopción.",
    },
    {
      question: "¿Cómo puedo ser voluntario en el refugio?",
      answer:
        "Ofrecemos varias oportunidades de voluntariado, desde cuidar a los animales hasta ayudar en eventos. Puedes comenzar llenando un formulario de voluntariado en nuestra página web o contactándonos directamente para más información.",
    },
    {
      question: "¿Aceptan donaciones?",
      answer:
        "Sí, aceptamos donaciones monetarias y en especie. Puedes donar en línea, por correo o en persona. También aceptamos alimentos para mascotas, juguetes, mantas y otros suministros necesarios para el cuidado de los animales.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-primary-dark mb-6">
        Preguntas Frecuentes
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white p-2 rounded-none border border-primary shadow-md"
          >
            <button
              className="w-full text-left p-4 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold text-primary-dark">
                  {faq.question}
                </span>
                <span className="text-primary-dark">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-gray-50">
                <p className="text-text">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
