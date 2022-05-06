// npm
import { useSelector } from 'react-redux';

import './styles.scss';
import CardArticle from '../CardArticle';
import CardCategory from '../CardCategory';

function Home() {
  const articles = useSelector((state) => state.article.list);

  // Selection des catégorie récupérée dans le state
  const categories = useSelector((state) => state.categories.list);
  // console.log(categories);

  // Fonction filtrant le nombre de catégorie à afficher
  const filteredCategories = () => {
    const filteredCategorie = categories.filter((categorie) => categorie.id < 10);
    return filteredCategorie;
  };
  // console.log(filteredCategories());

  // Stockage de la fonction de filtre dans une constante pour pouvoir l'utiliser
  const categoriesToDisplay = filteredCategories();

  return (

    <div className="home">
      <section className="home__categories">

        {
          // Boucle avec la méthode map sur le tableau de catégorie récupéré qui va afficher les
          // chaque catégorie via le composant enfant CardCategory
          categoriesToDisplay.map((categorie) => <CardCategory key={categorie.id} {...categorie} />)
        }

      </section>

      <section className="home__articles">

        {articles.map((article) => (
          // On map sur la liste des articles récupéré depuis le state.
          // On passe en props les données nécessaire au composant CardArticle.
          <CardArticle key={article.id} {...article} />
        ))}

      </section>
    </div>
  );
}

export default Home;
