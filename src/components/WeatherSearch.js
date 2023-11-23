import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
// import WeatherCard from "./WeatherCard";
import axios from "axios";

const API_KEY = "e468aa976180b65225fd67c8031ca71d";
const WeatherSearch = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error(response.status);
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setError("City not found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Container maxWidth="sm">
        <TextField
          label="Enter city"
          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={handleSearch}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Search"}
        </Button>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {/* <WeatherCard weatherData={weatherData} /> */}
      </Container>
    </div>
  );
};

export default WeatherSearch;
