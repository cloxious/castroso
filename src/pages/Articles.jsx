import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";

function Articles() {
  usePageTitle("Artículos");

  const articles = [
    {
      id: 1,
      title: "Cómo preparar tu hogar para un nuevo perro",
      excerpt:
        "Consejos prácticos para hacer que la transición de tu nuevo amigo peludo sea lo más suave posible.",
      date: "2023-05-15",
    },
    {
      id: 2,
      title: "Los beneficios de adoptar un gato adulto",
      excerpt:
        "Descubre por qué adoptar un gato adulto puede ser una experiencia increíblemente gratificante.",
      date: "2023-05-10",
    },
    {
      id: 3,
      title: "Nutrición básica para mascotas rescatadas",
      excerpt:
        "Una guía sobre cómo alimentar adecuadamente a tu nueva mascota rescatada para garantizar su salud y bienestar.",
      date: "2023-05-05",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-primary-dark mb-6">Artículos</h1>
      <p className="text-text mb-8">
        Explora nuestros artículos informativos sobre el cuidado de animales y
        noticias sobre nuestro refugio.
      </p>

      <div className="space-y-6">
        {articles.map((article) => (
          <div key={article.id} className="bg-white p-6 rounded-none border border-primary shadow-md">
            <h2 className="text-xl font-semibold text-primary-dark mb-2">
              {article.title}
            </h2>
            <p className="text-text mb-4">{article.excerpt}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{article.date}</span>
              <Link
                to={`/article/${article.id}`}
                className="text-secondary hover:text-secondary-dark"
              >
                Leer más
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Articles;
