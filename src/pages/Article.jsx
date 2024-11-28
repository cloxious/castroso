import { useParams } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";

const articles = [
  {
    id: 1,
    title: "GISSEL OSEGUERA",
    content:
      "Me alegro de ser parte del proyecto Amor y Abrigo ¡Todo lo que se realiza es tan útil para los animales!, me alegra ser parte de este proyecto y ayudar de manera sencilla aportando un poco de amor a estos animales.",
    date: "2023-01-28",
  },
  {
    id: 2,
    title: "RUBBY ASAFF",
    content:
      "Me propuse como meta en la vida ayudar a los animales al ver la importancia que merecen. Todos necesitamos amor y podemos dar amor a quienes se lo merecen y a quienes la vida los ha tratado tan injustamente, me encanta poder ayudar a estos animales brindandoles ese 'amor y abrigo'",
    date: "2023-03-10",
  },
  {
    id: 3,
    title: "MARTA GUZMAN",
    content:
      "Encontré una excelente manera de marcar la diferencia. ¡Me apasiona y me siento feliz de ayudar!. Ver que los animales que han sido mal tratados encuentran amor y felicidad cuando son adoptados, son sentimientos que no tienen precio.",
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
