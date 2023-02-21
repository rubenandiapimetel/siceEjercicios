import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";

/*me parece que sandbox ejecuta un error que en vscode no deberia*/

function Reloj() {
  const [hora, setHora] = useState({});
  const date = new Date();

  //setInterval(setHora(date), 1000);

  useEffect(() => {
    const intervalo = setInterval(() => setHora(date), 1000);
    return () => clearInterval(intervalo);
  }, [hora]);

  return <p>{JSON.stringify(hora)}</p>;
}

export default Reloj;
