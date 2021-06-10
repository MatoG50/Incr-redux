import ActionTypes from '../constants/ActionTypes';

export const increment = () => {
  return {
    type: ActionTypes.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: ActionTypes.DECREMENT,
  };
};

export const signIn = () => {
  return {
    type: ActionTypes.SIGN_IN,
  };
};
