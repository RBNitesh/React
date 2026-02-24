import "./SearchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "7a385c0c996bb09265da48b4b5c8cc26";

  let weatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonresponse = await response.json();
      let result = {
        city: jsonresponse.name,
        temp: jsonresponse.main.temp,
        tempMin: jsonresponse.main.temp_min,
        tempMax: jsonresponse.main.temp_max,
        humidity: jsonresponse.main.humidity,
        feelslike: jsonresponse.main.feels_like,
        weather: jsonresponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      setError("No such place in our API");
    }
  };

  let [city, setCity] = useState("");

  let handleChange = (e) => {
    setCity(e.target.value);
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(city);
    setCity("");
    let newInfo = await weatherInfo();
    updateInfo(newInfo);
  };

  return (
    <>
      <div className="SearchBox">
        <h2>Search for the wheather</h2>
        <form>
          <TextField
            id="city"
            label="City name"
            variant="outlined"
            required
            onChange={handleChange}
          ></TextField>
          <Button variant="contained" type="submit" onClick={handleSubmit}>
            Search
          </Button>
        </form>
      </div>
    </>
  );
}
