/*
  detail recipe operations
*/
import { API } from '../../config';
import Cookies from 'js-cookie';

export const fetchRecipeDetails = async recipeId => {
  try {
    const res = await fetch(`${API}/recipe/${recipeId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export const authRecipeDetails = async (recipeId, userId) => {
  try {
    const res = await fetch(`${API}/recipe/${recipeId}?userId=${userId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export const incrementLike = async recipeId => {
  try {
    const res = await fetch(`${API}/recipe/likes/${recipeId}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Types': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`
      }
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export const getAuthState = state => state.Auth;
export const getRecipeState = state => state.Recipe;
