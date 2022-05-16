// Import
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CardArticle from 'src/components/CardArticle';

// Actions
import { findFiveArticles } from '../../selectors/article';

// Styles
import './styles.scss';

// Components

import CardCart from './CardCart';
import { addCartToOrder, addCartToOrderBdd, setArticleInCart } from '../../actions/cart';

function Carts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ________________________________________________________________ //
  // __________________________ Articles_____________________________ //

  // Selection des artciles récupérée dans le state
  const articles = useSelector((state) => state.article.list);
  const isLogged = useSelector((state) => state.user.user.logged);

  // Stockage dans une constante de 5 articles à afficher
  const articlesToDisplay = findFiveArticles(articles);

  // ________________________________________________________________ //
  // ________________________________________________________________ //
  // __________________________ Panier_____________________________ //
  const value = localStorage.getItem('allCart');
  const initialValue = JSON.parse(value);
  // dispatch(setArticleInCart(initialValue));

  // ________________________________________________________________ //
  // ________________________________________________________________ //
  // ____________________Envoie de commande__________________________ //

  function handleSendOrder() {
    if (isLogged) {
      dispatch(addCartToOrder(initialValue));
      dispatch(addCartToOrderBdd());
    }
    else {
      navigate('/connexion');
    }
  }

  return (
    <>
      <div className="carts">

        {/* Head of content */}
        <section className="carts__content">
          <div className="carts__content__head">
            <h2 className="carts__content__head__title">Votre panier</h2>
            <span className="carts__content__head__price">Prix</span>
          </div>

          {/* Content of article */}
          {initialValue.map((item) => (
            <CardCart
              key={item.article.id}
              quantity={item.quantity}
              {...item.article}
            />
          ))}

          <span className="carts__article__total">Sous-total (X article) : XX$</span>
        </section>

        {/* Content of payment section */}
        <section className="carts__pay">
          <p className="carts__pay__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reiciendis reprehenderit molestiae, qui possimus, mollitia
            delectus maxime ex doloremque.
          </p>
          <p className="carts__pay__total">Sous-total (X article) : XX$</p>
          <button type="button" className="carts__pay__button" onClick={handleSendOrder}>Passer la commande</button>
          <button type="button" className="carts__pay__button">Continuez vos achats</button>
        </section>
      </div>
      {/* Content of article to display */}
      {articlesToDisplay.map((article) => <CardArticle {...article} key={article.id} />)}

    </>
  );
}

export default Carts;
