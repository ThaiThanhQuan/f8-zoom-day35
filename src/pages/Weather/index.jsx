import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from './Weather.module.scss'

const cx = classNames.bind(styles)

function Weather() {
            const weatherData = {
                    "hanoi": { city: "Hà Nội", temp: 28, weather: "Nắng",
                    humidity: 65 },
                    "hcm": { city: "TP.HCM", temp: 32, weather: "Có mây",
                    humidity: 78 },
                    "danang": { city: "Đà Nẵng", temp: 30, weather: "Mưa nhẹ",
                    humidity: 82 }
            }

            const[selectedCity, setSelectedCity] = useState("hanoi")
            const [weatherDatas, setWeatherDatas] = useState(weatherData);

            const handleChange = (e) => {
                setSelectedCity(e.target.value)
            }

            const randomWeather = () => {
               setWeatherDatas((prev) => {
                const newData = { ...prev };

                const city = selectedCity;
                const oldTemp = newData[city].temp;
                const oldHumidity = newData[city].humidity;

                const randomSign = Math.random() < 0.5 ? -5 : 5;

                newData[city] = {
                    ...newData[city],
                    temp: oldTemp + randomSign,       
                    humidity: oldHumidity + randomSign,
                };

                return newData;
            });
            }
            const weather = weatherDatas[selectedCity]

            return(
                <div className={cx("weather-app")}>
                <h1 className={cx("app-header")}>WEATHER APP</h1>

                <div className={cx("form-group")}>
                <label className={cx("title")}>Chọn thành phố</label>
                    <select onChange={handleChange} className={cx("select-city")}>
                        {Object.keys(weatherDatas).map((key) => (
                            <option key={key} value={key}> 
                                   {weatherDatas[key].city} 
                            </option>
                        ))}
                   
                    </select>
                </div>

                <div className={cx("weather-card")}>
                    <h3 className={cx("city")}>{weather.city} ☀</h3>
                    <p className={cx("temp")}>🌡 {weather.temp}°C</p>
                    <p className={cx("desc")}>☁ {weather.weather}</p>
                    <p className={cx("humidity")}>💧 {weather.humidity}%</p>
                </div>
                
                <button onClick={randomWeather} className={cx("refresh-btn")}>Làm mới</button>
                
                </div>

           )
           
        }

export default Weather;