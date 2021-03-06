// Import du reducer user
import userReducer from 'src/reducers/user';

describe('Reducers - Recipes', () => {
  describe('Structure', () => {
    test('it is a function', () => {
      expect(typeof userReducer).toBe('function');
    });
  });

  describe('Execution', () => {
    test('it return an object', () => {
      expect(typeof userReducer()).toBe('object');
    });

    test('it returns the right initial state when called without arg', () => {
      const expectedInitialState = {
        login: {
          email: 'admin@admin.com',
          password: 'admin',
          isVerified: false,
          captchaToken: '',
        },
        signup: {
          firstname: '',
          lastname: '',
          birthdate: '',
          phone: '',
          adress: '',
          email: '',
          password: '',
          confirmPassword: '',
        },
        user: {
          id: null,
          firstname: '',
          lastname: '',
          adress: '',
          birthdate: '',
          email: '',
          phone: '',
          roles: [],
          orders: [],
          favorites: [],
          newfavorites: [],
          deletefavorites: null,
          comments: [],
          token: '',
          logged: false,
        },
        profile: {
          firstname: '',
          lastname: '',
          adress: '',
          birthdate: '',
          phone: '',
        },
        passwordIsFalse: false,
        userUnknown: false,
      };
      expect(userReducer()).toEqual(expectedInitialState);
    });
  });
});
