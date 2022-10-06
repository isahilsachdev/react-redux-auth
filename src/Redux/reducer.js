import { GET_WEATHER_SUCCESS, GET_WEATHER_FAILURE, GET_LOGIN_SUCCESS, GET_LOGIN_FAILURE, GET_LOGOUT_SUCCESS } from "./action";

const weatherData = {
  error: '',
  data: null,
  user: null,
};

export const weatherReducer = (state = weatherData, { type, payload }) => {
  switch (type) {
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        data: payload,
      };

    case GET_WEATHER_FAILURE:
      return {
        ...state,
        error: payload,
      };

    case GET_LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
      };

    case GET_LOGIN_FAILURE:
      return {
        ...state,
        error: payload,
      };

    case GET_LOGOUT_SUCCESS:
      return {
        ...state,
        user: {},
      };

    default:
      return state;
  }
};
