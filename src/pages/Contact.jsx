import { useState } from "react";
import usePageTitle from "../hooks/usePageTitle";

function Contact() {
  usePageTitle("Contacto");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
    alert("Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-primary-dark mb-6">Contáctanos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-700 mb-4">
            Estamos aquí para responder cualquier pregunta que puedas tener
            sobre nuestro refugio, los animales o el proceso de adopción.
          </p>
          <div className="bg-white p-6 rounded-none border border-primary shadow-md">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Información de Contacto
            </h2>
            <p className="text-gray-700 mb-2">
              <strong>Dirección:</strong> San Pedro Sula, Honduras
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Teléfono:</strong> +504 9824-8715
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong> amoryabrigo13@gmail.com
            </p>
            <p className="text-gray-700">
              <strong>Horario:</strong> Lunes a Sábado, 9:00 AM - 5:00 PM
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-none border border-primary shadow-md"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-none focus:outline-none focus:border-primary"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-none focus:outline-none focus:border-primary"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-none focus:outline-none focus:border-primary"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-secondary text-white px-4 py-2 rounded-none border border-primary-dark font-semibold hover:bg-secondary-dark transition duration-300"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
