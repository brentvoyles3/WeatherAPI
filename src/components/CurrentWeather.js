import { getCurrentWeather } from "../api";
import "../styles/components/CurrentWeather.scss"

function CurrentWeather() {
  const data = getCurrentWeather();
  const {
    cloud_cover, feels_like, humidity, icon_num, precipitation, summary, temperature, uv_index, visibility, wind
  } = data;
 
  
  return <div className="CurrentWeather">
     <div className="temperature"></div>
     <div className=".weather-icon">
      <img src={'${process.env.PUBLIC_URL}/dist/weather_icons/set05/big/${}.png'}
       alt={summary}
       />
      </div>  
      <div className="value">
        <div className="real">{temperature}</div>
        <div className="feels_like">{feels_like}</div>
      </div>
     <div className="other-infos"></div>

     </div>
  
}

export default CurrentWeather