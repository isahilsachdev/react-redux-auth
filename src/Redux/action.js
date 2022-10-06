import axios from "axios";

export const GET_WEATHER_SUCCESS = "GET_WEATHER_SUCCESS";
export const GET_WEATHER_FAILURE = "GET_WEATHER_FAILURE";
export const GET_LOGIN_SUCCESS = "GET_LOGIN_SUCCESS";
export const GET_LOGIN_FAILURE = "GET_LOGIN_FAILURE";
export const GET_LOGOUT_SUCCESS = "GET_LOGOUT_SUCCESS";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

const getWeatherSuccess = payload => {
  console.log('getWeatherSuccess', payload);
  return {
    type: GET_WEATHER_SUCCESS,
    payload
  };
}

const getWeatherFailure = error => {
  return {
    type: GET_WEATHER_FAILURE,
    error
  };
};

const getLoginSuccess = payload => {
  return {
    type: GET_LOGIN_SUCCESS,
    payload
  };
};

const getLoginFailure = error => {
  return {
    type: GET_LOGIN_FAILURE,
    error
  };
};

const getLogoutSuccess = payload => {
  return {
    type: GET_LOGOUT_SUCCESS,
    payload
  };
};

const getWeather = ({lat, long}) => (dispatch) => {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`)
  .then(res => {
    dispatch(getWeatherSuccess(res.data))
  }).catch(err => {
    dispatch(getWeatherFailure(err))
  })
};

export { getWeather, getLoginSuccess, getLoginFailure, getLogoutSuccess };