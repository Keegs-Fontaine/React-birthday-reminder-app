import { useState } from "react";

import Birthday from "./Birthday";

import data from "../assets/data";

export default function BirthdayContainer() {
  const [birthdays, setBirthdays] = useState(data);

  const deleteItem = (name) => {
    setBirthdays(birthdays.filter((birthday) => birthday.name != name));
  };

  return (
    <article className="w-full max-w-sm p-5 bg-white">
      <h1 className="text-2xl">{`${birthdays.length} birthdays today`}</h1>
      {birthdays.map(({ name, age, image, id }) => {
        return (
          <Birthday
            key={id}
            name={name}
            age={age}
            img={image}
            deleteFunc={deleteItem}
          ></Birthday>
        );
      })}
    </article>
  );
}
