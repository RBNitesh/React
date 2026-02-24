import "./InfoBox.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import image from "./assets/image.jpg"; // adjust the path as needed

export default function InfoBox({ info }) {
  return (
    <div className="InfoBox">
      <h1>WeatherInfo - {info.weather}</h1>
      <div className="card-container">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={image} title="haze" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Humidity = {info.humidity}</p>
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Min = {info.tempMin}</p>
              <p>Max = {info.tempMax}</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
