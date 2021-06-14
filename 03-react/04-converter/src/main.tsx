import * as React from "react";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

/**
 * Convert a string to an integer.
 * 
 * Returns 0 if the string can not be converted.
 */
const toInt = (value: string): number => {
	const result = Number(value);
	return isNaN(result) ? 0 : result;
};

const App = (): JSX.Element => {
	const [a, setA] = React.useState("");
	const [b, setB] = React.useState("");
	console.log(a);
	
	
	const fToc = (e: React.ChangeEvent<HTMLInputElement>) => {
		setA(e.target.value)
		const celsius = ((toInt(e.target.value) - 32) * 5/9).toFixed(2)
		setB(celsius)
		e.target.value === '' && setB('')
		 return 
	}
	const cTof = (e: React.ChangeEvent<HTMLInputElement>) => {
		setB(e.target.value)
		const fahrenheit = ((toInt(e.target.value) * 9/5) + 32).toFixed(2)
		 setA(fahrenheit)
		 e.target.value === '' && setA('')
		 return 
	}

	return (
		<main>
			<input
				type="number"
				value={a}
				placeholder="°F"
				onChange={fToc}
			/>
			{" + "}
			<input
				type="number"
				value={b}
				placeholder="°C"
				onChange={cTof}
			/>
		</main>
	);
};

ReactDOM.render(<App />, appDiv);
