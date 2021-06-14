import * as React from "react";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

const books: string[] = [
    "Anna Karenina",
    "To Kill a Mockingbird",
    "The Great Gatsby",
    "One Hundred Years of Solitude",
    "A Passage to India",
    "Invisible Man",
    "Don Quixote",
    "Beloved",
    "Mrs. Dalloway",
    "Things Fall Apart",
    "Jane Eyre",
    "The Color Purple",
];

const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'orange']

const App = (): JSX.Element => {

    const [title, changeTitle] = React.useState("Click button to change the title");
    const [titleColor, changeTitleColor] = React.useState('gray')

    const getRandomBook = (): string => {
        const randomNumber = Math.floor(Math.random() * books.length);
        changeTitle(books[randomNumber]);
        const colorIndex = Math.floor(Math.random() * colors.length)
        changeTitleColor(colors[colorIndex])
        return ""
    };

	return (
        <>
		<p style={{color: titleColor}}>Title:  {title}</p>
        <button onClick={getRandomBook}>Change Title</button>
        </>
	);
};

ReactDOM.render(<App />, appDiv);
