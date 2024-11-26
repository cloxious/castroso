import { useParams } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";

const articles = [
  {
    id: 1,
    title: "Cómo preparar tu hogar para un nuevo perro",
    content:
      "Traer un nuevo perro a casa es una experiencia emocionante, pero requiere preparación. Aquí te damos algunos consejos para hacer que la transición sea lo más suave posible para ti y tu nuevo amigo peludo...",
    date: "2023-05-15",
  },
  {
    id: 2,
    title: "Los beneficios de adoptar un gato adulto",
    content:
      "Mientras que los gatitos son adorables, adoptar un gato adulto puede ser una experiencia increíblemente gratificante. Los gatos adultos ya tienen personalidades formadas, por lo que sabrás exactamente qué tipo de compañero estás trayendo a casa...",
    date: "2023-05-10",
  },
  {
    id: 3,
    title: "Nutrición básica para mascotas rescatadas",
    content:
      "La nutrición adecuada es crucial para la salud y el bienestar de tu nueva mascota rescatada. Dependiendo de su historia, es posible que necesite una dieta especial para ayudarle a recuperarse y mantenerse saludable...",
    date: "2023-05-05",
  },
];

function Article() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

  usePageTitle(article ? article.title : "Artículo no encontrado");

  if (!article) {
    return <div>Artículo no encontrado</div>;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-primary-dark mb-4">
        {article.title}
      </h1>
      <p className="text-gray-500 mb-4">{article.date}</p>
      <div className="prose text-text">
        <p>{article.content}</p>
      </div>
    </div>
  );
}

export default Article;
