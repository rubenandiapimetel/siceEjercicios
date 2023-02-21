import "./styles.css";
import Reloj from "./Reloj";
import Image from "./Image";
import Contador from "./Contador";

export default function App() {
  return (
    <div className="App">
      <h1>Reloj</h1>
      <Reloj />
      <Image />
      <Reloj />
      <Contador />
    </div>
  );
}
