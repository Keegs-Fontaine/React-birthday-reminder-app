import { AiOutlineClose } from "react-icons/ai";

export default function Birthday({ img, name, age, deleteFunc }) {
  return (
    <article className="flex items-center my-5">
      <section className="w-16 aspect-square  overflow-hidden rounded-[100%]">
        <img
          src={img}
          alt={name + " image"}
          className="object-cover w-full h-full"
        />
      </section>
      <section className="ml-5">
        <h2 className="text-lg">{name}</h2>
        <p>{`${age} years`}</p>
      </section>
      <button
        onClick={() => deleteFunc(name)}
        className="ml-auto border-[3px] p-1"
      >
        <AiOutlineClose className="text-red-500" />
      </button>
    </article>
  );
}
