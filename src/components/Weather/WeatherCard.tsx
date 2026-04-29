import { useEffect, useState } from "react";
import "../../styles/WeatherCard.css";

interface ForecastItem {
  dt_txt: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
}

interface ForecastResponse {
  list: ForecastItem[];
}

const WeatherCard5Day = () => {
  const [forecast, setForecast] = useState<ForecastItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_KEY = "84f8db5e2862e7c82240f2abba2cac3a";
  const LAT = 27.7103;
  const LON = 85.3222;

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric`
        );
        if (!res.ok) throw new Error("Failed to fetch weather data");
        const data: ForecastResponse = await res.json();
        const daily = data.list.filter((item) =>
          item.dt_txt.includes("12:00:00")
        );
        setForecast(daily.slice(0, 6));
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load forecast"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, []);

  if (loading) return null;
  // <div className="text-center mt-5">Loading...</div>;
  if (error || forecast.length === 0) return null;
  // (
  //     <div className="alert alert-danger mt-5 text-center">
  //       {error || "Unable to load weather data."}
  //     </div>
  //   );

  const today = forecast[0];
  const remaining = forecast.slice(1);

  return (
    <div id="weather-card">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-highlight px-3">
              Real-Time Weather Monitoring
            </h6>
            <h1 className="mb-3">Environment Matters at AEIRC</h1>
            <p className="mb-5">
              We ensure our services operate smoothly by keeping track of local
              weather conditions. Whether it's computer-based testing or field
              operations, up-to-date weather information helps us plan and
              deliver with precision.
            </p>
          </div>
          <div
            className="weather-wrapper"
            style={{
              backgroundImage: "url('/img/WeatherCard/weather_banner.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <div className="weather-overlay">
              {/* Today Forecast */}
              <div className="today-forecast-horizontal">
                <div className="today-icon-wrapper">
                  <div className="today-label">Today</div>{" "}
                  {/* This is the new label */}
                  <img
                    src={`https://openweathermap.org/img/wn/${today.weather[0].icon}@2x.png`}
                    alt={today.weather[0].description}
                    className="today-icon"
                  />
                </div>
                <div className="today-right">
                  <div className="today-temp responsive-today-temp">
                    {Math.round(today.main.temp)}°
                  </div>
                  <div className="today-details responsive-today-details">
                    <strong>
                      <p>{today.weather[0].description}</p>
                    </strong>
                    <p className="hide-after-400">
                      <strong>Wind:</strong> {today.wind.speed} m/s
                    </p>
                    <p className="hide-after-514">
                      <strong>Humidity: </strong>
                      {today.main.humidity}%
                    </p>
                  </div>
                </div>
              </div>

              {/* 5-Day Forecast */}
              <div className="forecast-list">
                {remaining.map(({ dt_txt, main, weather }, idx) => {
                  const dayName = new Date(dt_txt).toLocaleDateString(
                    undefined,
                    {
                      weekday: "short",
                    }
                  );
                  return (
                    <div className="forecast-item" key={idx}>
                      <h6>{dayName}</h6>
                      <img
                        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                        alt={weather[0].description}
                        className="forecast-icon"
                      />
                      <p>{Math.round(main.temp)}°</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard5Day;
