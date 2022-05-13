import { findArticle, findFiveArticles } from 'src/selectors/article.js';
import { initialState } from 'src/reducers/article';

describe('Selectors - Article', () => {
  // tester findRecipe
  describe('findArticle', () => {
    // structure
    describe('Structure', () => {
      // vérifier qu'il s'agit d'une fonction
      test('it is a function', () => {
        // pour ce faire, j'utilise une assertion
        expect(typeof findArticle).toBe('function');
      });
    });

    // exécution
    describe('Execution', () => {
      // vérifier qu'on nous retourne
      // un objet contenant une propriété id si on passe le premier slug
      test('it returns an object with an id property when called with the first slug', () => {
        // on vérifie dans une première assertion si c'est un objet
        expect(typeof findArticle(initialState.list, initialState.list[0].slug)).toBe('object');
        // dans une seconde si cet objet a une propriété id
        expect(findArticle(articles, articles[0].slug)).toHaveProperty('id');
      });

      // vérifier qu'on nous retourne la première recette
      // si on passe le premier slug
      test('it returns the first recipe when called with the first slug', () => {
        expect(findArticle(initialState.list, initialState.list[0].slug)).toBe(initialState.list[0]);
      });

      // vérifier qu'on nous retourne undefined si on passe une slug bidon
      test('it returns undefined when called with a incorrect slug', () => {
        expect(findArticle(initialState.list, 'dsdqxzxz13+sfaqefa')).toBeUndefined();
      });
    });
  });
});
