// ==============================================
// ==================LOGIN=======================
// ==============================================

// ACTION TYPE SET_EMAIL_IN_LOGIN
export const SET_EMAIL_IN_LOGIN = 'SET_EMAIL_IN_LOGIN';

// ACTION CREATOR setEmailInLogin
export const setEmailInLogin = (value) => ({
  type: SET_EMAIL_IN_LOGIN,
  value,
});

// ACTION TYPE SET_PASSWORD_IN_LOGIN
export const SET_PASSWORD_IN_LOGIN = 'SET_PASSWORD_IN_LOGIN';

// ACTION CREATOR setPasswordInLogin
export const setPasswordInLogin = (value) => ({
  type: SET_PASSWORD_IN_LOGIN,
  value,
});

// ACTION TYPE SET_PASSWORD_IN_LOGIN
export const LOGIN = 'LOGIN';

// ACTION CREATOR setPasswordInLogin
export const login = (value) => ({
  type: LOGIN,
  value,
});

// ACTION TYPE LOGOUT
export const LOGOUT = 'LOGOUT';

// ACTION CREATOR LOGOUT
export const logout = () => ({
  type: LOGOUT,
});

// ACTION TYPE DELETE_USER
export const DELETE_USER = 'DELETE_USER';

// ACTION CREATOR DeleteUser
export const deleteUser = () => ({
  type: DELETE_USER,
});

// ACTION TYPE LOGIN_UNKNOWN
export const SET_LOGIN_UNKNOWN = 'SET_LOGIN_UNKNOWN';

// ACTION CREATOR LOGIN_UNKNOWN
export const setLoginUnknown = () => ({
  type: SET_LOGIN_UNKNOWN,
});

// ACTION TYPE RESET_LOGIN_UNKNOWN
export const RESET_LOGIN_UNKNOWN = 'RESET_LOGIN_UNKNOWN';

// ACTION CREATOR RESET_LOGIN_UNKNOWN
export const resetLoginUnknown = () => ({
  type: RESET_LOGIN_UNKNOWN,
});

// ==============================================
// ==================SIGN UP=====================
// ==============================================

// ACTION TYPE SAVE_USER
export const SAVE_USER = 'SAVE_USER';

// ACTION CREATOR SAVE_USER
export const saveUser = (user) => ({
  type: SAVE_USER,
  user,
});

// ACTION TYPE FETCH_USER
export const FETCH_USER = 'FETCH_USER';

// ACTION CREATOR FETCH_USER
export const fetchUser = () => ({
  type: FETCH_USER,
});

// ACTION TYPE FETCH_USER_DATA
export const SAVE_USER_DATA = 'SAVE_USER_DATA';

// ACTION CREATOR FETCH_USER_DATA
export const saveUserData = (user) => ({
  type: SAVE_USER_DATA,
  user,
});
// ==============================================
// ==================FAVORITES===================
// ==============================================

// ACTION TYPE ADD_ARTICLE_TO_FAVORITE
export const ADD_ARTICLE_TO_FAVORITE = 'ADD_ARTICLE_TO_FAVORITE';

// ACTION CREATOR ADD_ARTICLE_TO_FAVORITE
export const addArticleToFavorite = (article) => ({
  type: ADD_ARTICLE_TO_FAVORITE,
  article,
});

export const ADD_ARTICLE_TO_FAVORITE_BDD = 'ADD_ARTICLE_TO_FAVORITE_BDD';

// ACTION CREATOR ADD_ARTICLE_TO_FAVORITE_BDD
export const addArticleToFavoriteBdd = () => ({
  type: ADD_ARTICLE_TO_FAVORITE_BDD,
});

// ACTION TYPE DELETE_ARTICLE_TO_FAVORITE
export const DELETE_ARTICLE_TO_FAVORITE = 'DELETE_ARTICLE_TO_FAVORITE';

// ACTION CREATOR deleteArticleToFavorite
export const deleteArticleToFavorite = (favID) => ({
  type: DELETE_ARTICLE_TO_FAVORITE,
  favID,
});

// ACTION TYPE DELETE_ARTICLE_TO_FAVORITE_IN_BDD
export const DELETE_ARTICLE_TO_FAVORITE_IN_BDD = 'DELETE_ARTICLE_TO_FAVORITE_IN_BDD';

// ACTION CREATOR deleteArticleToFavoriteInBdd
export const deleteArticleToFavoriteInBdd = () => ({
  type: DELETE_ARTICLE_TO_FAVORITE_IN_BDD,
});

// ==============================================
// ==================NEW USER====================
// ==============================================

// ACTION TYPE SET_FIRSTNAME_IN_SIGNUP
export const SET_FIRSTNAME_IN_SIGNUP = 'SET_FIRSTNAME_IN_SIGNUP';

// ACTION CREATOR SET_FIRSTNAME_IN_SIGNUP
export const setFirstNameInSignup = (firstname) => ({
  type: SET_FIRSTNAME_IN_SIGNUP,
  firstname,
});

// ACTION TYPE SET_LASTNAME_IN_SIGNUP
export const SET_LASTNAME_IN_SIGNUP = 'SET_LASTNAME_IN_SIGNUP';

// ACTION CREATOR SET_LASTNAME_IN_SIGNUP
export const setLastNameInSignup = (lastname) => ({
  type: SET_LASTNAME_IN_SIGNUP,
  lastname,
});

// ACTION TYPE SET_BIRTHDATE_IN_SIGNUP
export const SET_BIRTHDATE_IN_SIGNUP = 'SET_BIRTHDATE_IN_SIGNUP';

// ACTION CREATOR SET_BIRTHDATE_IN_SIGNUP
export const setBirthDateInSignup = (birthdate) => ({
  type: SET_BIRTHDATE_IN_SIGNUP,
  birthdate,
});

// ACTION TYPE SET_PHONE_IN_SIGNUP
export const SET_PHONE_IN_SIGNUP = 'SET_PHONE_IN_SIGNUP';

// ACTION CREATOR SET_PHONE_IN_SIGNUP
export const setPhoneInSignup = (phone) => ({
  type: SET_PHONE_IN_SIGNUP,
  phone,
});

// ACTION TYPE SET_ADRESS_IN_SIGNUP
export const SET_ADRESS_IN_SIGNUP = 'SET_ADRESS_IN_SIGNUP';

// ACTION CREATOR SET_ADRESS_IN_SIGNUP
export const setAdressInSignup = (adress) => ({
  type: SET_ADRESS_IN_SIGNUP,
  adress,
});

// ACTION TYPE SET_EMAIL_IN_SIGNUP
export const SET_EMAIL_IN_SIGNUP = 'SET_EMAIL_IN_SIGNUP';

// ACTION CREATOR SET_EMAIL_IN_SIGNUP
export const setEmailInSignup = (email) => ({
  type: SET_EMAIL_IN_SIGNUP,
  email,
});

// ACTION TYPE SET_PASSWORD_IN_SIGNUP
export const SET_PASSWORD_IN_SIGNUP = 'SET_PASSWORD_IN_SIGNUP';

// ACTION CREATOR SET_PASSWORD_IN_SIGNUP
export const setPasswordInSignup = (password) => ({
  type: SET_PASSWORD_IN_SIGNUP,
  password,
});

// ACTION TYPE SET_CONFIRM_PASSWORD_IN_SIGNUP
export const SET_CONFIRM_PASSWORD_IN_SIGNUP = 'SET_CONFIRM_PASSWORD_IN_SIGNUP';

// ACTION CREATOR SET_CONFIRM_PASSWORD_IN_SIGNUP
export const setConfirmPasswordInSignup = (confirmPassword) => ({
  type: SET_CONFIRM_PASSWORD_IN_SIGNUP,
  confirmPassword,
});

// ACTION TYPE PASSWORD_ERROR
export const PASSWORD_ERROR = 'PASSWORD_ERROR';

// ACTION CREATOR PASSWORD_ERROR
export const passwordError = () => ({
  type: PASSWORD_ERROR,
});

// ACTION TYPE CREATE_USER
export const CREATE_USER = 'CREATE_USER';

// ACTION CREATOR CREATE_USER
export const createUser = (value) => ({
  type: CREATE_USER,
  value,
});

// ==============================================
// ==================CAPTCHA=====================
// ==============================================

// ACTION TYPE VALIDATE_CAPTCHA
export const VALIDATE_CAPTCHA = 'VALIDATE_CAPTCHA';

// ACTION CREATOR VALIDATE_CAPTCHA
export const validateCaptcha = (response) => ({
  type: VALIDATE_CAPTCHA,
  response,
});

// ACTION TYPE SAVE_CAPTCHA_TOKEN
export const SAVE_CAPTCHA_TOKEN = 'SAVE_CAPTCHA_TOKEN';

// ACTION CREATOR SAVE_CAPTCHA_TOKEN
export const saveCaptchaToken = (value) => ({
  type: SAVE_CAPTCHA_TOKEN,
  value,
});

// ACTION TYPE SEND_TO_GOOGLE
export const SEND_TO_GOOGLE = 'SEND_TO_GOOGLE';

// ACTION CREATOR SEND_TO_GOOGLE
export const sendToGoogle = () => ({
  type: SEND_TO_GOOGLE,
});

// ==============================================
// ==================PROFILE=====================
// ==============================================

// ACTION TYPE MODIFY_PROFILE
export const MODIFY_PROFILE = 'MODIFY_PROFILE';

// ACTION CREATOR MODIFY_PROFILE
export const modifyProfile = () => ({
  type: MODIFY_PROFILE,
});

// ACTION TYPE SET_FIRSTNAME_IN_PROFILE
export const SET_FIRSTNAME_IN_PROFILE = 'SET_FIRSTNAME_IN_PROFILE';

// ACTION CREATOR SET_FIRSTNAME_IN_PROFILE
export const setFirstNameInProfile = (firstname) => ({
  type: SET_FIRSTNAME_IN_PROFILE,
  firstname,
});

// ACTION TYPE SET_LASTNAME_IN_PROFILE
export const SET_LASTNAME_IN_PROFILE = 'SET_LASTNAME_IN_PROFILE';

// ACTION CREATOR SET_LASTNAME_IN_PROFILE
export const setLastNameInProfile = (lastname) => ({
  type: SET_LASTNAME_IN_PROFILE,
  lastname,
});

// ACTION TYPE SET_PHONE_IN_PROFILE
export const SET_PHONE_IN_PROFILE = 'SET_PHONE_IN_PROFILE';

// ACTION CREATOR SET_PHONE_IN_PROFILE
export const setPhoneInProfile = (phone) => ({
  type: SET_PHONE_IN_PROFILE,
  phone,
});

// ACTION TYPE SET_ADRESS_IN_PROFILE
export const SET_ADRESS_IN_PROFILE = 'SET_ADRESS_IN_PROFILE';

// ACTION CREATOR SET_ADRESS_IN_PROFILE
export const setAdressInProfile = (adress) => ({
  type: SET_ADRESS_IN_PROFILE,
  adress,
});
