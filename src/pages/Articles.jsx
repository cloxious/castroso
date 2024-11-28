import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";

function Articles() {
  usePageTitle("Artículos");

  const articles = [
    {
      id: 1,
      title: "GISSEL OSEGUERA",
      excerpt:
        "Me alegro de ser parte del proyecto Amor y Abrigo ¡Todo lo que se realiza es tan útil para los animales!",
      date: "2023-01-28",
    },
    {
      id: 2,
      title: "RUBBY ASAFF",
      excerpt:
        "Me propuse como meta en la vida ayudar a los animales al ver la importancia que merecen.",
      date: "2023-03-10",
    },
    {
      id: 3,
      title: "MARTA GUZMAN",
      excerpt:
        "Encontré una excelente manera de marcar la diferencia. ¡Me apasiona y me siento feliz de ayudar!",
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
