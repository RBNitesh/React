import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Wheather App</h2>
      <SearchBox />
      <InfoBox />
    </div>
  );
}
