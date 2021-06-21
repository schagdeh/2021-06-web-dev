import * as React from "react";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
  throw new Error("No div with id 'app' found");
}

const App = (): JSX.Element => {
  interface TodoItem {
    created: number;
    done: boolean;
    title: string;
  };

  const [list, setList] = React.useState<TodoItem[]>(
    [{ created: 1, done: false, title: "Created to do list"}]);
    // { created: Date.now(), done: true, title: "shopping" },);
  const [inputValue, setInputValue] = React.useState("");

  const handleSubmit = (e: React.MouseEvent) =>
    setList([...list, { created: Date.now(), done: false, title: inputValue }]);

  return (
    <main>
      <header>
        <h1>To Do List</h1>
      </header>
      <section className="list-section">
        <ol>
          {list.map((item, index) => {
            return (
              <li key={item.created}>
                <span>{item.title}</span>{" "}
                <input type="checkbox"/>
              </li>
            );
          })}
        </ol>
      </section>
      <footer>
        <div className="formWrapper">
          <input
            className="noteInput"
            placeholder="Write a new note..."
            value={inputValue}
            checked={false}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="noteButton" onClick={handleSubmit}>
            Add Note
          </button>
        </div>
      </footer>
    </main>
  );
};

ReactDOM.render(<App />, appDiv);
