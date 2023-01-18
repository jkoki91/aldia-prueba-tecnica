import { useEffect, useState } from "react";

function Reloj() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  return (
    <h3>
      {" "}
      {date.toLocaleString("default", {
        weekday: "short",
        day: "numeric",
        month: "short"
      })}{" "}
      {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
    </h3>
  );
}

export default Reloj;