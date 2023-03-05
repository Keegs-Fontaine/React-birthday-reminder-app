import { useState } from "react";

import Birthday from "./Birthday";

import data from "../assets/data";

export default function BirthdayContainer() {
  const [birthdays, setBirthdays] = useState(data);

  return (
    <article>
      <h1>{`${birthdays.length} birthdays today`}</h1>
      {birthdays.map(({ name, age, image, id }) => {
        return <Birthday key={id} name={name} age={age} img={image}></Birthday>;
      })}
    </article>
  );
}
