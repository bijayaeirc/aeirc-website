// src/hooks/useCurrentWeather.ts
import { useEffect, useState } from "react";

interface WeatherData {
  temp: number;
  icon: string;
  description: string;
}

const useCurrentWeather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_KEY = "84f8db5e2862e7c82240f2abba2cac3a"; 
  const LAT = 27.7172;
  const LON = 85.324;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric`
        );
        if (!res.ok) throw new Error("Failed to fetch weather data");
        const data = await res.json();

        setWeather({
          temp: Math.round(data.main.temp),
          icon: data.weather[0].icon,
          description: data.weather[0].description,
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return { weather, loading, error };
};

export default useCurrentWeather;
