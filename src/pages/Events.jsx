import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";

function Events() {
  usePageTitle("Eventos");

  const events = [
    {
      id: 1,
      title: "Jornada de Adopción",
      date: "15 de Julio, 2023",
      time: "10:00 AM - 4:00 PM",
      location: "Parque Central",
      description:
        "Ven y conoce a nuestros adorables perros y gatos en busca de un hogar permanente.",
    },
    {
      id: 2,
      title: "Taller de Cuidado de Mascotas",
      date: "22 de Julio, 2023",
      time: "2:00 PM - 5:00 PM",
      location: "Centro Comunitario",
      description:
        "Aprende sobre el cuidado básico de perros y gatos, incluyendo nutrición, higiene y primeros auxilios.",
    },
    {
      id: 3,
      title: "Carrera Benéfica 'Patas a Correr'",
      date: "5 de Agosto, 2023",
      time: "8:00 AM - 12:00 PM",
      location: "Pista de Atletismo Municipal",
      description:
        "Participa en nuestra carrera anual para recaudar fondos. ¡Trae a tu mascota!",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-primary-dark mb-6">
        Próximos Eventos
      </h1>
      <p className="text-text mb-8">
        Únete a nosotros en nuestros eventos para apoyar a los animales
        necesitados y aprender más sobre el cuidado responsable de mascotas.
      </p>
      <div className="space-y-8">
        {events.map((event) => (
          <div key={event.id} className="bg-white p-6 rounded-none border border-primary shadow-md">
            <h2 className="text-2xl font-semibold text-primary-dark mb-2">
              {event.title}
            </h2>
            <p className="text-text mb-1">
              <strong>Fecha:</strong> {event.date}
            </p>
            <p className="text-text mb-1">
              <strong>Hora:</strong> {event.time}
            </p>
            <p className="text-text mb-2">
              <strong>Ubicación:</strong> {event.location}
            </p>
            <p className="text-text mb-4">{event.description}</p>
            <Link
              to={`/event/${event.id}`}
              className="bg-secondary text-white px-4 py-2 rounded-none border border-primary-dark font-semibold hover:bg-secondary-dark transition duration-300"
            >
              Más Información
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
