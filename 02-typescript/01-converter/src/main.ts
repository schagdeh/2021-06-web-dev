const fahrenheitInput: Element | null  = document.querySelector('#fahrenheitInput')
const celsiusInput: Element | null  = document.querySelector('#celsiusInput')
const fahrenheitResult: Element | null  = document.querySelector('#fahrenheitResult')
const celsiusResult: Element | null  = document.querySelector('#celsiusResult')
 


if(!(fahrenheitInput instanceof HTMLInputElement)) {
    throw new Error("No input element with an id 'F' found")
}
if(!(celsiusInput instanceof HTMLInputElement)) {
    throw new Error("No input element with an id 'C' found")
}
if(!(fahrenheitResult instanceof HTMLSpanElement)) {
    throw new Error("No input element with an id 'C' found")
}
if(!(celsiusResult instanceof HTMLSpanElement)) {
    throw new Error("No input element with an id 'C' found")
}

const NaNHandler = (input: HTMLInputElement) => {
    const number = parseFloat(input.value)
    return isNaN(number) ? 0 : number
}

fahrenheitInput.addEventListener('input', () => {
    // checks if the input is empty then returns other inputs and innerText empty
    if(fahrenheitInput.value === '') {
         celsiusInput.value = "";
         celsiusResult.innerText = "";
         fahrenheitResult.innerText = "";
         return true
    }
    celsiusInput.value = ((NaNHandler(fahrenheitInput) - 32) * 5/9).toString()
    
    fahrenheitResult.innerText = ((NaNHandler(celsiusInput) * 9/5 ) + 32).toString()
    celsiusResult.innerText = ((NaNHandler(fahrenheitInput) - 32) * 5/9).toString()
 })
celsiusInput.addEventListener('input', () => {
        // checks if the input is empty then returns other inputs and innerText empty
    if(celsiusInput.value === '') {
        fahrenheitInput.value = "";
        celsiusResult.innerText = "";
        fahrenheitResult.innerText = "";
        return true
   }
    fahrenheitInput.value = ((NaNHandler(celsiusInput) * 9/5 ) + 32).toString()
    
    fahrenheitResult.innerText = ((NaNHandler(celsiusInput) * 9/5 ) + 32).toString()
    celsiusResult.innerText = ((NaNHandler(fahrenheitInput) - 32) * 5/9).toString()
 })