import { AiOutlineClose } from "react-icons/ai";

export default function Birthday({ img, name, age, deleteFunc }) {
  return (
    <article>
      <section>
        <img src={img} alt={name + " image"} />
      </section>
      <section>
        <h2>{name}</h2>
        <p>{`${age} years`}</p>
      </section>
      <section>
        <AiOutlineClose className="text-red-500" />
      </section>
    </article>
  );
}
