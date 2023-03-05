/*
Simple birthday App.
Will take a static list of people (from data.js) and list their birthdays.

:BirthdayContainer
  - Contains Birthday Component, each showing a single birthday
  - Contains a {clear all btn} that clears the entire birthday list
    - Uses useState to achieve this: [birthdays, setBirthdays] = useState(data.js)
    - Clear btn: setBirthdays([])
    - Passes down a deleteItem function as a prop for Birthday to use

  :Birthday
    - Shows profile picture, name, age
    - Has an "x" button to clear that birthday
      - BirthdayContainer component passes down a deleteItem function as a prop
      - deleteItem(id) => setBirthdays([every id !== to the one passed into the function])
*/
import BirthdayContainer from "./components/BirthdayContainer";

export default function App() {
  return (
    <section className="grid place-items-center h-screen bg-pink-400">
      <BirthdayContainer></BirthdayContainer>
    </section>
  );
}
