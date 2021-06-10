import ActionTypes from '../constants/ActionTypes';

export const counter = (state = 0, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return state + 1;
    default:
      return state;
  }
};

export const decrease = (state = 0, action) => {
  switch (action.type) {
    case ActionTypes.DECREMENT:
      return state - 1;

    default:
      return state;
  }
};

export const loggedIn = (state = false, action) => {
  switch (action.type) {
    case ActionTypes.SIGN_IN:
      return !state;

    default:
      return state;
  }
};
