import { useState } from "react";

import Birthday from "./Birthday";

import data from "../assets/data";

export default function BirthdayContainer() {
  const [birthdays, setBirthdays] = useState(data);

  const deleteItem = (name) => {
    setBirthdays(birthdays.filter((birthday) => birthday.name != name));
  };

  return (
    <article className="w-full max-w-sm p-5 bg-white rounded-lg shadow-2xl">
      <h1 className="text-2xl mb-5">{`${birthdays.length} birthdays today`}</h1>
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
      <button
        onClick={() => setBirthdays([])}
        className="w-full p-2 text-white text-xl bg-pink-400 rounded-md"
      >
        Clear All
      </button>
    </article>
  );
}
