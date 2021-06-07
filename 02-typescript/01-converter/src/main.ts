const fInput: Element | null  = document.querySelector('#F')
const cInput: Element | null  = document.querySelector('#C')
const fN: Element | null  = document.querySelector('#fN')
const cN: Element | null  = document.querySelector('#cN')
 


if(!(fInput instanceof HTMLInputElement)) {
    throw new Error("No input element with an id 'F' found")
}
if(!(cInput instanceof HTMLInputElement)) {
    throw new Error("No input element with an id 'C' found")
}
if(!(fN instanceof HTMLSpanElement)) {
    throw new Error("No input element with an id 'C' found")
}
if(!(cN instanceof HTMLSpanElement)) {
    throw new Error("No input element with an id 'C' found")
}


fInput.addEventListener('input', () => {
    cInput.value = ((parseFloat(fInput.value) - 32) * 5/9).toString()
    
    fN.innerText = ((parseFloat(cInput.value) * 9/5 ) + 32).toString()
    cN.innerText = ((parseFloat(fInput.value) - 32) * 5/9).toString()
 })
cInput.addEventListener('input', () => {
    fInput.value = ((parseFloat(cInput.value) * 9/5 ) + 32).toString()
    
    fN.innerText = ((parseFloat(cInput.value) * 9/5 ) + 32).toString()
    cN.innerText = ((parseFloat(fInput.value) - 32) * 5/9).toString()

 })