import { number } from "prop-types";
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


	const sumArray = [1,5,7,3,0,-2].reduce((a: number, b: number): number => a + b)	
	const minArray = [1,5,7,3,0,-2].reduce((a: number, b: number): number => a < b ? a : b)		
	
    const nullArray = [null, null, 7, 2, null, 4].reduce((a: number | null, b: number | null): number | null =>  b !== null ? b : a)
		
	const filterArray = (a: number[], f: (a: number) => boolean) => {
		const results: number[] = [];
		for (const n of a) {
			if (f(n)) {
				results.push(n);
			}
		}
		return results

	}

	const arr2 = [3,5,5,4,6]
	const filtered = arr2.filter((y: number): boolean => y < 5)
console.log(filtered, 'its coming from filter');


	const afFilter = filterArray(arr2, (x: number): boolean => x < 10)


	return (
		<main>
			<h5>[1,5,7,3,0,-2] sum up: result = {sumArray}</h5>
			<h5>[1,5,7,3,0,-2] smallest No.: result = {minArray}</h5>
			<h5>[null, null, 7, 2, null, 4] !null last No.: result = {nullArray}</h5>
			{afFilter}
		</main>
	);
};

ReactDOM.render(<App />, appDiv);
