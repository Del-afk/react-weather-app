import "./styles.css";
import "./searchbar";
import Searchbar from "./searchbar";
import TodayPart from "./today-part";
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core";

export default function App() {
  return (
    <div className="App">
      <Searchbar />
      <TodayPart />
    </div>
  );
}
