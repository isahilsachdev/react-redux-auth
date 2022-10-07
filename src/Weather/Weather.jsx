/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { auth } from '../firebaseConfig';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../Redux/action';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

const Weather = () => {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [error, setError] = useState(null);
  const [userEmail, setUserEmail] = useState('');

  const dispatch = useDispatch();
  const geolocationAPI = navigator.geolocation;
  const { data } = useSelector(state => state, shallowEqual);
  const navigate = useNavigate();


  useEffect(() => {
    onAuthStateChanged(auth, (userDetails) => {
      if (userDetails) {
        setUserEmail(userDetails.email)
        getUserCoordinates();    
      } else {
        navigate("/login");
      }
    })
  }, []); 

  
  useEffect(() => {
    getWeatherDetails();
  }, [lat, long]);

  const getWeatherDetails = () => {
    if (lat && long) {
      dispatch(getWeather({lat, long}))
    }
  };

  // to get users latitude and longitude
  const getUserCoordinates = () => {
    if (!geolocationAPI) {
      setError('Geolocation API is not available in your browser!')
    } else {
      geolocationAPI.getCurrentPosition((position) => {
        const { coords } = position;
        setLat(coords.latitude);
        setLong(coords.longitude);
      }, (error) => {
        setError('Something went wrong getting your position!')
      })
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="weather-component">
      <h1>Weather</h1>
      <div>
        {error ? (
          <p style={{ color: 'red'}}> {error} </p>
          ) : (
            <>
            <div>
              {lat && (
                <h4>
                  Lat - {lat}
                </h4>
              )}
              {
                long && (
                  <h4>
                    Long - {long}
                  </h4>
                )
              }
              {userEmail && (
                <h4> User Logged In: {userEmail}</h4>
              )}
            </div>
            {!!data && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                  <h5>Area name - {data.name}</h5>
                  <div>
                    <h5>Weather</h5>
                    {data.weather.map((info, i) => (
                      <div key={i}>
                        {
                          Object.keys(info).map(key => (
                            <div key={key}>
                              {key} - {info[key]}
                            </div>
                          ))
                        }
                      </div>
                    ))}
                  </div>
                  
                  <div>
                    <h5>Wind</h5>
                    {Object.keys(data.wind).map((info, i) => (
                      <div key={i}>  
                        {info} - {data.wind[info]}
                      </div>
                    ))}
                  </div>

                  <div>
                    <h5>Temperature</h5>
                    {Object.keys(data.main).map((info, i) => (
                      <div key={i}>  
                        {info} - {data.main[info]}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            </>
        )}
        <button onClick={logout}> Sign Out </button>
      </div>
    </div>
  )
}

export default Weather